import { autoinject, noView } from "aurelia-framework";

import { Api } from "../api";
import { ProgressService } from "../resources/progress-service";
import { State } from "../state";
import { connectTo } from "aurelia-store";
import { faCreditCard } from "@fortawesome/free-solid-svg-icons";

@noView()
@autoinject()
@connectTo({
  setup: "canActivate",
  selector: (store) => store.state,
})
export class CardPayment {
  private state!: State;

  constructor(
    private api: Api,
    private progress: ProgressService,
  ) {}

  async canActivate(params: { orderId: string; tagNumber?: string }) {
    const orderId = Number(params.orderId);

    if (!this.state.sumupAffiliateKey) {
      return false;
    }

    return this.redirectToSumUpApp(orderId, params.tagNumber);
  }

  private async redirectToSumUpApp(orderId: number, tagNumber?: string) {
    try {
      this.progress.setBusy("Viderestiller til kortbetaling", faCreditCard);

      const order = await this.api.getOrderById(orderId).transfer();

      const pos = await this.api.getPointOfSale(order.pointOfSaleId).transfer();

      // Example: <a href="sumupmerchant://pay/1.0?affiliate-key=7ca84f17-84a5-4140-8df6-6ebeed8540fc&app-id=com.example.myapp&total=1.23&currency=EUR&title=Taxi Ride&receipt-mobilephone=+3531234567890&receipt-email=customer@mail.com&callback=http://example.com/myapp/mycallback">Start SumUp Payment</a>

      const affiliateKey = this.state.sumupAffiliateKey;
      const receiptEmail = this.state.sumupReceiptEmail;
      const appId = "com.rmja.festivalpos";
      const total = order.amountDue.toFixed(2); // Has "." as decimal separator
      const title = `Kajfest ${pos.name}`;

      let callbackUrl = `${window.location.origin}/#/checkout/orders/${order.id}/pay/card-callback?amount=${order.amountDue}`;

      if (tagNumber) {
        callbackUrl += `&tagNumber=${tagNumber}`;
      }

      await this.progress.done();

      let apiUrl = `sumupmerchant://pay/1.0?affiliate-key=${affiliateKey}&app-id=${appId}&total=${total}&currency=DKK&title=${encodeURIComponent(
        title,
      )}&skip-screen-success=true&callback=${encodeURIComponent(callbackUrl)}`;
      if (receiptEmail) {
        apiUrl += `&receipt-email=${encodeURIComponent(receiptEmail)}`;
      }

      window.location.href = apiUrl;
    } catch (error) {
      await this.progress.error("Kortbetaling kunne ikke gennemføres", error);
    }
  }
}
