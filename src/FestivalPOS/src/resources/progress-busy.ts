import { IconDefinition } from "@fortawesome/fontawesome-common-types";
import { useView } from "aurelia-framework";

@useView("resources/progress-busy.html")
export class ProgressBusy {
  model!: { icon?: IconDefinition; title?: string };

  activate(model: { icon?: IconDefinition; title?: string }) {
    this.model = model;
  }
}
