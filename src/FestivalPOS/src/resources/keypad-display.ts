import { Big, RoundingMode } from "big.js";
import { bindable, bindingMode } from "aurelia-framework";

import { BACKSPACE } from "../keys";

export class KeypadDisplay {
    @bindable() title?: string;
    @bindable() money?: boolean | "true" | "false";
    @bindable({ defaultBindingMode: bindingMode.twoWay }) value!: Big;

    constructor() {
        this.keyup = this.keyup.bind(this);
    }

    bind() {
        document.addEventListener("keyup", this.keyup);
    }

    unbind() {
        document.removeEventListener("keyup", this.keyup);
    }

    backspace() {
        this.value = this.value.div(10).round(0, RoundingMode.RoundDown);
    }

    private keyup(event: KeyboardEvent) {
        const target = event.target as HTMLElement;
        if (!target || target.tagName !== "BODY") {
            return;
        }

        if (event.key === BACKSPACE) {
            this.backspace();
        }
    }
}