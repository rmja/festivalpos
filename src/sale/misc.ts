import { Big, RoundingMode } from "big.js";
import { connectTo, Store } from "aurelia-store";
import { State, updateCurrentMisc, addCurrentMiscOrderLine } from "../state";
import { Digit, COMMA, BACKSPACE } from "../keys";
import { computedFrom } from "aurelia-binding";
import { autoinject } from "aurelia-framework";

@autoinject()
@connectTo()
export class Misc {
    private state!: State;
    
    @computedFrom("state")
    get amount() {
        if (this.state) {
            return this.state.currentMiscOrderLine.total;
        }
    }

    constructor(private store: Store<State>) {
        this.keyup = this.keyup.bind(this);
    }

    async activate() {
        await this.setAmount(new Big(0));

        document.addEventListener("keyup", this.keyup);
    }

    async deactivate() {
        if (!this.state.currentMiscOrderLine.total.eq(0)) {
            await this.pushLine();
        }

        document.removeEventListener("keyup", this.keyup);
    }

    private keyup(event: KeyboardEvent) {
        if (event.key >= "0" && event.key <= "9") {
            const digit = Number(event.key) as Digit;
            this.pushKey(digit);
        }
        else if (event.key === COMMA) {
            this.pushKey("00");
        }
        else if (event.key === BACKSPACE) {
            this.backspace();
        }
    }

    backspace() {
        return this.setAmount(this.state.currentMiscOrderLine.total.div(10).round(2, RoundingMode.RoundDown));
    }

    pushKey(value: Digit | "00") {
        return value === "00"
            ? this.setAmount(this.state.currentMiscOrderLine.total.mul(100))
            : this.setAmount(this.state.currentMiscOrderLine.total.mul(10).add(new Big(value).div(100)));
    }

    pushLine() {
        return this.store.dispatch(addCurrentMiscOrderLine);
    }

    private setAmount(amount: Big) {
        return this.amount && this.amount.eq(amount)
            ? Promise.resolve()
            : this.store.dispatch(updateCurrentMisc, amount);
    }
}