import { AppRouter } from "aurelia-router";
import { autoinject } from "aurelia-framework";

@autoinject()
export class TopNavbar {
    constructor(protected router: AppRouter) {
    }
}