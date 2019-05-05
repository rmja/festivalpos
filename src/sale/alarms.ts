import { autoinject } from "aurelia-framework";
import { Api } from "../api";
import { connectTo } from "aurelia-store";
import { State } from "../state";

@connectTo({
    selector: store => store.state,
    setup: "activate"
})
@autoinject()
export class Alarms {
    private state!: State;
    feeds!: AlarmFeedViewModel[];

    constructor(private api: Api) {
    }

    async activate() {
        this.feeds = await this.api.getAllAlarmFeeds().transfer();
        const events = await this.api.getAllPendingAlarmEvents({ pointOfSaleId: this.state.pointOfSaleId }).bypassCache().transfer();
        if (events.length) {
            for (const event of events) {
                for (const feed of this.feeds) {
                    if (feed.id === event.alarmFeedId) {
                        feed.pendingEvent = event;
                        break;
                    }
                }
            }
        }
    }

    async raise(feed: AlarmFeedViewModel) {
        feed.pendingEvent = await this.api.createAlarmEvent(feed.id, {
            terminalId: this.state.terminalId,
            pointOfSaleId: this.state.pointOfSaleId,            
        }).transfer();
    }
}

interface AlarmFeedViewModel {
    id: number;
    name: string;
    pendingEvent?: {
        terminalName: string;
        pointOfSaleName: string
    };
}