import { Api } from "../api";
import { ProgressService } from "../resources/progress-service";
import { State } from "../state";
import { autoinject } from "aurelia-framework";
import { connectTo } from "aurelia-store";
import { faBell } from "@fortawesome/free-solid-svg-icons";

@connectTo({
    selector: store => store.state,
    setup: "activate"
})
@autoinject()
export class Alarms {
    private state!: State;
    feeds!: AlarmFeedViewModel[];

    constructor(private api: Api, private progress: ProgressService) {
    }

    async activate() {
        this.feeds = await this.api.getAllAlarmFeeds().transfer();

        try {
            this.progress.busy("Henter alarmer", faBell);

            var events = await this.api.getAllPendingAlarmEvents({ pointOfSaleId: this.state.pointOfSaleId }).bypassCache().transfer();

            this.progress.done();
        }
        catch (error) {
            this.progress.error("Fejl ved hentning af alarmer", error);
            return;
        }
        
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