import { bindable, bindingMode } from "aurelia-framework";

import { BACKSPACE } from "../keys";
import { Big } from "big.js";

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
    this.value = this.value.div(10).round(0, Big.roundDown);
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

    if (event.key === BACKSPACE) {
      this.backspace();
    }
  }
}
