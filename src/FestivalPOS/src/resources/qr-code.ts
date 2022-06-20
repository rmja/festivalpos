import { autoinject, bindable } from "aurelia-framework";

import QRCode from "qrcodejs2";

import "./qr-code.css";

@autoinject()
export class QrCodeCustomElement {
  private element: HTMLElement;
  private qrCode?: QRCode;
  private resizeObserver: ResizeObserver;

  @bindable({ changeHandler: nameof<QrCodeCustomElement>((x) => x.drawCode) })
  public value = "";

  constructor(element: Element) {
    this.element = <HTMLElement>element;
    this.resizeObserver = new ResizeObserver(() => this.drawCode());
  }

  attached() {
    this.drawCode();
    this.resizeObserver.observe(this.element);
  }

  detached() {
    this.resizeObserver.unobserve(this.element);
    this.qrCode?.clear();
  }

  private drawCode() {
    const size = this.element.clientWidth;
    if (size === 0) {
      this.qrCode?.clear();
      return;
    }
    this.qrCode ??= new QRCode(this.element, {
      width: size,
      height: size,
    });

    this.qrCode.makeCode(this.value);
  }
}
