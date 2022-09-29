# Retekess TD158

The [Retekess TD158](https://www.retekess.com/td158-paging-system-upgraded-version#F9482BX1) is an affordable (cheap) restaurant pager that is compatible with this pos system.

The following is an analysis of the RF protocol the pagers seems to be using:
* ASK modulation
* 434MHz center frequency
* Baud rate: 5kHz (4960Hz measured)

When a call is issued from the keypad the following RF sequence is sent:
1x WAKEUP and 38x CALL.

There is a spacing of 6 bits (6x4 symbols) between the packets.

There are the following paramters:
* Restaurant ID (F1, default to 15), value range: [1, 999]
* Pager ID, value range: [1, 999]

Data bits are mapped as the following symbols:

- 0: 1000
- 1: 1110


## WAKEUP Packet

The packet consists of 26 bits. The first 25 bits are the most significant bit of the Restaurant ID repeated and the last is 0.
This gives the following two wakeup packets:

* Restaurant ID [1, 512): 00000000000000000000000000
* Restaurant ID [512, 999]: 11111111111111111111111110

The symbol stream is therefore either 1):

```
10001000100010001000100010001000
10001000100010001000100010001000
10001000100010001000100010001000
10001000
```

or 2): 

```
11101110111011101110111011101110
11101110011011101110111011101110
11101110111011101110111011101110
11101000
```

## CALL Packet

This packet is also 26 bits consisting of:
* Restaurant ID (10 bits)
* Pager ID (10 bits)
* The bits 001000

| Restaurant ID | Pager ID | Packet bits |
|---|---|---|
| 15 | 6 | 0000001111 0000000110 001000 |
| 15 | 100 | 0000001111 0001100100 001000 |
| 31 | 5 | 0000011111 0000000101 001000 |
| 511 | 100 | 0111111111 0001100100 001000 |
| 512 | 100 | 1000000000 0001100100 001000 |
| 600 | 100 | 1001011000 0001100100 001000 |