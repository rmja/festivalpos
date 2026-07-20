import { autoinject, customAttribute } from "aurelia-framework";

// Makes an overflow container scrollable by dragging/swiping anywhere inside it.
// Uses Pointer Events so it behaves identically for real touch, mouse-emulated
// touch (common on Linux touch monitors) and a plain mouse. When a drag occurs
// it also swallows the trailing click so swiping over items does not toggle them.
@autoinject()
@customAttribute("drag-scroll")
export class DragScroll {
  private element: HTMLElement;
  private pointerId?: number;
  private startY = 0;
  private startScrollTop = 0;
  private dragging = false;
  private moved = false;

  private static readonly threshold = 8;

  constructor(element: Element) {
    this.element = element as HTMLElement;
    this.pointerdown = this.pointerdown.bind(this);
    this.pointermove = this.pointermove.bind(this);
    this.pointerup = this.pointerup.bind(this);
    this.clickCapture = this.clickCapture.bind(this);
  }

  bind() {
    this.element.addEventListener("pointerdown", this.pointerdown);
    this.element.addEventListener("pointermove", this.pointermove);
    this.element.addEventListener("pointerup", this.pointerup);
    this.element.addEventListener("pointercancel", this.pointerup);
    // Capture phase so we can cancel the click before it reaches the items.
    this.element.addEventListener("click", this.clickCapture, true);
  }

  unbind() {
    this.element.removeEventListener("pointerdown", this.pointerdown);
    this.element.removeEventListener("pointermove", this.pointermove);
    this.element.removeEventListener("pointerup", this.pointerup);
    this.element.removeEventListener("pointercancel", this.pointerup);
    this.element.removeEventListener("click", this.clickCapture, true);
  }

  private pointerdown(event: PointerEvent) {
    // Ignore secondary mouse buttons; touch/pen always report button 0.
    if (event.pointerType === "mouse" && event.button !== 0) return;
    this.pointerId = event.pointerId;
    this.startY = event.clientY;
    this.startScrollTop = this.element.scrollTop;
    this.dragging = true;
    this.moved = false;
  }

  private pointermove(event: PointerEvent) {
    if (!this.dragging || event.pointerId !== this.pointerId) return;
    const dy = event.clientY - this.startY;
    if (!this.moved && Math.abs(dy) > DragScroll.threshold) {
      this.moved = true;
      // Keep receiving moves even if the pointer leaves a child element.
      try {
        this.element.setPointerCapture(this.pointerId);
      } catch {
        // Ignore — capture is a best-effort optimisation.
      }
    }
    if (this.moved) {
      this.element.scrollTop = this.startScrollTop - dy;
      event.preventDefault();
    }
  }

  private pointerup(event: PointerEvent) {
    if (event.pointerId !== this.pointerId) return;
    this.dragging = false;
    this.pointerId = undefined;
    // `moved` is left set so the trailing click can be swallowed by clickCapture.
  }

  private clickCapture(event: Event) {
    if (this.moved) {
      // This click is the tail end of a drag — cancel it so the swipe does not
      // also toggle an item.
      event.stopPropagation();
      event.preventDefault();
      this.moved = false;
    }
  }
}
