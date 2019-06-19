import { State, addCurrentMiscOrderLine, updateCurrentMisc } from "../state";
import { Store, connectTo } from "aurelia-store";

import { Big } from "big.js";
import { autoinject } from "aurelia-framework";
import { computedFrom } from "aurelia-binding";

@autoinject()
@connectTo()
export class Misc {
    private state!: State;
    private description = "";
    
    @computedFrom("state")
    get amount() {
        return this.state && this.state.currentMiscOrderLine.total;
    }

    set amount(value: Big) {
        if (this.state && !this.state.currentMiscOrderLine.total.eq(value)) {
            this.store.dispatch(updateCurrentMisc, value)
        }
    }

    constructor(private store: Store<State>) {
    }

    activate() {
        this.amount = new Big(0);
    }

    async deactivate() {
        if (!this.amount.eq(0)) {
            await this.pushLine();
        }
    }

    pushLine() {
        return this.store.dispatch(addCurrentMiscOrderLine, this.description);
    }
}