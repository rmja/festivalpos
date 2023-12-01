import { autoinject } from "aurelia-framework";
import { Api } from "../../api";

@autoinject()
export class AlarmsList {
  feeds!: AlarmFeed[];

  constructor(private api: Api) {}

  async activate() {
    this.feeds = await this.api.getAllAlarmFeeds().transfer();
  }
}

interface AlarmFeed {
  id: number;
  name: string;
}
