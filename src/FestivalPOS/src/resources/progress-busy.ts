import { IconDefinition } from "@fortawesome/fontawesome-common-types";
import { useView } from "aurelia-framework";

@useView("resources/progress-busy.html")
export class ProgressBusy {
  icon?: IconDefinition;
  title?: string;

  activate(model: { icon?: IconDefinition; title?: string }) {
    this.icon = model.icon;
    this.title = model.title;
  }
}
