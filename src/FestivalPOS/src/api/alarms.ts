import { DateTime } from "luxon";
import { dateTimeConverter } from "./converters/date-time-converter";
import { jsonProperty } from "@utiliread/json";

export class AlarmFeed {
  @jsonProperty()
  id!: number;

  @jsonProperty()
  name!: string;
}

export class AlarmEvent {
  @jsonProperty()
  id!: number;

  @jsonProperty()
  alarmFeedId!: number;

  @jsonProperty()
  alarmFeedName!: string;

  @jsonProperty()
  terminalId!: number;

  @jsonProperty()
  terminalName!: string;

  @jsonProperty()
  pointOfSaleId!: number;

  @jsonProperty()
  pointOfSaleName!: string;

  @jsonProperty({ converter: dateTimeConverter })
  cancelled?: DateTime;

  @jsonProperty({ converter: dateTimeConverter })
  created!: DateTime;
}
