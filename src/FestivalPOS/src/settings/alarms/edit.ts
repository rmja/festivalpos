import { AlarmFeed } from "../../api/alarms";
import { Api } from "../../api";
import { Patch } from "@utiliread/jsonpatch";
import { Router } from "aurelia-router";
import { autoinject } from "aurelia-framework";

@autoinject()
export class EditAlarm {
  private alarmFeedId!: number;
  name!: string;

  get canSubmit() {
    return !!this.name.length;
  }

  constructor(
    private api: Api,
    private router: Router,
  ) {}

  async activate(params: { alarmFeedId: string }) {
    this.alarmFeedId = Number(params.alarmFeedId);
    const feed = await this.api.getAlarmFeed(this.alarmFeedId).transfer();
    this.name = feed.name;
  }

  async delete() {
    if (confirm("Skal alarmen slettes?")) {
      await this.api.deleteAlarmFeed(this.alarmFeedId).send();
      this.router.navigateToRoute("list");
    }
  }

  async submit() {
    const patch = new Patch<AlarmFeed>().replace((x) => x.name, this.name);

    await this.api
      .updateAlarmFeed(this.alarmFeedId, patch.operations)
      .transfer();
    this.router.navigateToRoute("list");
  }
}
