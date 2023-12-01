import "./keypad-input.css";

import { bindable, bindingMode } from "aurelia-framework";

import { Big } from "big.js";
import { COMMA } from "../keys";

export class KeypadInput {
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

  pushKey(value: number | "00") {
    if (value === "00") {
      this.value = this.value.mul(100);
    } else {
      this.value = this.value.mul(10).add(new Big(value));
    }
  }

  private keyup(event: KeyboardEvent) {
    const target = event.target as HTMLElement;
    if (
      (target && target.tagName === "INPUT") ||
      target.tagName === "SELECT" ||
      target.tagName === "TEXTAREA"
    ) {
      return;
    }

    if (event.key >= "0" && event.key <= "9") {
      this.pushKey(Number(event.key));
    } else if (event.key === COMMA) {
      this.pushKey("00");
    }
  }
}
