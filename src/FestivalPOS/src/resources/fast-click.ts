import { autoinject, customAttribute } from "aurelia-framework";

@autoinject()
@customAttribute("fast-click")
export class FastClick {
    private element: HTMLButtonElement | HTMLAnchorElement | HTMLDivElement;

    constructor(element: Element) {
        if (isSupportedElement(element)) {
            this.element = element;
        } else {
            throw new Error("Unsupported target element");
        }
        this.touchstart = this.touchstart.bind(this);
    }

    bind() {
        this.element.addEventListener("touchstart", this.touchstart, {
            passive: false, // We do call event.preventDefault() so the listener is not passive
        });
    }

    unbind() {
        this.element.removeEventListener("touchstart", this.touchstart);
    }

    private touchstart(event: Event) {
        event.preventDefault();
        this.element.click();
    }
}

function isSupportedElement(element: Element): element is HTMLButtonElement | HTMLAnchorElement {
    return element.nodeName === "BUTTON" || element.nodeName === "A" || element.nodeName === "DIV";
}
