import { LogManager, autoinject, customAttribute } from "aurelia-framework";

@autoinject()
@customAttribute("fast-click")
export class FastClick {
  private element: HTMLButtonElement | HTMLAnchorElement | HTMLDivElement;
  private faked: boolean | "faking" = false;
  private timer = 0;
  private timerStarted?: number;
  private logger = LogManager.getLogger("fast-click");

  constructor(element: Element) {
    if (isSupportedElement(element)) {
      this.element = element;
    } else {
      throw new Error("Unsupported target element");
    }
    this.touchend = this.touchend.bind(this);
    this.click = this.click.bind(this);
  }

  bind() {
    this.element.addEventListener("touchend", this.touchend);
    this.element.addEventListener("click", this.click);
  }

  unbind() {
    this.element.removeEventListener("touchend", this.touchend);
    this.element.removeEventListener("click", this.click);
  }

  // This event is fired first
  private touchend(_event: Event) {
    // The target of the event is where the touch started, and not where the touch ended,
    // i.e. the event is only fired if the swipe orignated from the anchor/button.
    this.faked = false;
    if (this.timer) {
      // Multiple touchend events can be generated for example if more than one finger touches.
      window.clearTimeout(this.timer);
    }
    this.timer = window.setTimeout(() => {
      if (this.timer) {
        // It was not called between touchstart and touchend because the user "slided" on the button
        this.logger.debug("Fake click");
        this.timer = 0;
        this.faked = "faking";
        this.element.click();
        this.faked = true;
      }
    }, 10); // It seems that the click event in general is delayed less than 1ms
    this.timerStarted = performance.now();
  }

  // This event is fired second
  private click(event: Event) {
    if (this.faked === "faking") {
      return;
    } else if (this.faked) {
      const elapsed = performance.now() - this.timerStarted!;
      event.preventDefault();
      this.logger.warn(
        `Real click event was cancelled because it was already faked (touchend fired ${elapsed}ms ago)`,
      );
    } else {
      const elapsed = performance.now() - this.timerStarted!;
      this.logger.debug(`Real click after ${elapsed}ms`);
      if (this.timer) {
        // Do not send the fake click
        window.clearTimeout(this.timer);
        this.timer = 0;
      }
    }

    this.faked = false;
  }
}

function isSupportedElement(
  element: Element,
): element is HTMLButtonElement | HTMLAnchorElement {
  return (
    element.nodeName === "BUTTON" ||
    element.nodeName === "A" ||
    element.nodeName === "DIV"
  );
}
