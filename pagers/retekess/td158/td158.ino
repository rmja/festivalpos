#include <RadioLib.h>

#define CS_PIN 10
#define GDO0_PIN 2
#define GDO2_PIN 3
#define FRAME_LENGTH 0x0D
#define SYMBOL0 0x8 // 1000
#define SYMBOL1 0xE // 1110
#define SYMBOL(condition) ((condition) ? SYMBOL1 : SYMBOL0)
#define DEFAULT_RESTAURANT_ID 15
CC1101 radio = new Module(CS_PIN, GDO0_PIN, RADIOLIB_NC, GDO2_PIN);

typedef struct frame {
  byte buffer[FRAME_LENGTH];
  int length;
} frame_t;

void setup() {
  Serial.begin(9600);
  
  cc1101_ensureSuccess(radio.begin(434.0 /* MHz */, 4.960 /* kbps */));
  cc1101_ensureSuccess(radio.disableSyncWordFiltering()); // Do not generate preamble and syncword
  cc1101_ensureSuccess(radio.setCrcFiltering(false)); // Do not generate CRC
  cc1101_ensureSuccess(radio.setOOK(true)); // Use ASK
}

void loop() {
  String line = serial_readLine();

  if (line.startsWith("CALL:")) {
    handleCall(line.substring(5));
  }
  else {
    if (line != "") {
      Serial.println(F("ERROR: Invalid command"));
    }
    Serial.println();
    Serial.println(F("USAGE"));
    Serial.println(F("  COMMANDS:"));
    Serial.println(F("    CALL:[pagerId]                 Call pager using restaurantId 15"));
    Serial.println(F("    CALL:[restaurantId],[pagerId]  Call pager"));
    Serial.println(F("  EXAMPLES:"));
    Serial.println(F("    CALL:8"));
    Serial.println(F("    CALL:15;8"));
  }
}

static int previous = -1;
static String serial_readLine() {
  String result;
  while (true) {
    int c = Serial.read();
    if (c == -1) {
      continue;
    }
    if (c == '\r') {
      previous = c;
      return result;
    }
    else if (c == '\n') {
      if (previous == '\r') {
        previous = c;
        continue; // Ignore \n after \r
      }
      previous = c;
      return result;
    }
    result += (char)c;
    previous = c;
  }
}

static void handleCall(String args) {
  int index = args.indexOf(';');
  int restaurantId;
  int pagerId;
  if (index == -1) {
    restaurantId = DEFAULT_RESTAURANT_ID;
    pagerId = args.toInt();
  }
  else {
    restaurantId = args.substring(0, index).toInt();
    pagerId = args.substring(index + 1).toInt();
  }
  
  Serial.print(F("OK: "));
  Serial.print(restaurantId);
  Serial.print(";");
  Serial.println(pagerId);

  frame_t wakeup;
  frame_buildWakeup(&wakeup, restaurantId);
  frame_t call;
  frame_buildCall(&call, restaurantId, pagerId);
  
  for (int i = 0; i < 4; i++) {
    cc1101_send(&wakeup);
    delayMicroseconds(3000);
  
    for (int j = 0; j < 16; j++) {
      cc1101_send(&call);
      delayMicroseconds(3000);
    }
  }

  Serial.println("DONE");
}

static void frame_buildWakeup(frame_t* frame, int restaurantId) {
  byte symbol = SYMBOL(restaurantId >= 512);
  frame->buffer[0x0] = (symbol << 4) | symbol;
  frame->buffer[0x1] = (symbol << 4) | symbol;
  frame->buffer[0x2] = (symbol << 4) | symbol;
  frame->buffer[0x3] = (symbol << 4) | symbol;
  frame->buffer[0x4] = (symbol << 4) | symbol;
  frame->buffer[0x5] = (symbol << 4) | symbol;
  frame->buffer[0x6] = (symbol << 4) | symbol;
  frame->buffer[0x7] = (symbol << 4) | symbol;
  frame->buffer[0x8] = (symbol << 4) | symbol;
  frame->buffer[0x9] = (symbol << 4) | symbol;
  frame->buffer[0xA] = (symbol << 4) | symbol;
  frame->buffer[0xB] = (symbol << 4) | symbol;
  frame->buffer[0xC] = (symbol << 4) | SYMBOL0;
  frame->length = 0x0D;
}

static void frame_buildCall(frame_t* frame, int restaurantId, int pagerId) {
  frame->buffer[0x0] = (SYMBOL(restaurantId & 0x200) << 4) | SYMBOL(restaurantId & 0x100);
  frame->buffer[0x1] = (SYMBOL(restaurantId & 0x080) << 4) | SYMBOL(restaurantId & 0x040);
  frame->buffer[0x2] = (SYMBOL(restaurantId & 0x020) << 4) | SYMBOL(restaurantId & 0x010);
  frame->buffer[0x3] = (SYMBOL(restaurantId & 0x008) << 4) | SYMBOL(restaurantId & 0x004);
  frame->buffer[0x4] = (SYMBOL(restaurantId & 0x002) << 4) | SYMBOL(restaurantId & 0x001);
  frame->buffer[0x5] = (SYMBOL(pagerId & 0x200) << 4) | SYMBOL(pagerId & 0x100);
  frame->buffer[0x6] = (SYMBOL(pagerId & 0x080) << 4) | SYMBOL(pagerId & 0x040);
  frame->buffer[0x7] = (SYMBOL(pagerId & 0x020) << 4) | SYMBOL(pagerId & 0x010);
  frame->buffer[0x8] = (SYMBOL(pagerId & 0x008) << 4) | SYMBOL(pagerId & 0x004);
  frame->buffer[0x9] = (SYMBOL(pagerId & 0x002) << 4) | SYMBOL(pagerId & 0x001);
  frame->buffer[0xA] = (SYMBOL0 << 4) | SYMBOL0;
  frame->buffer[0xB] = (SYMBOL1 << 4) | SYMBOL0;
  frame->buffer[0xC] = (SYMBOL0 << 4) | SYMBOL0;
  frame->length = 0x0D;
}

static void cc1101_send(frame_t* frame) {
  cc1101_ensureSuccess(radio.fixedPacketLengthMode(frame->length)); // Do not prefix length byte
  cc1101_ensureSuccess(radio.transmit(frame->buffer, frame->length));
}

static void cc1101_ensureSuccess(int error) {
  if (error != RADIOLIB_ERR_NONE) {
    Serial.print(F("CC1101 failed with code: "));
    Serial.println(error);
    while (true);
  }
}
