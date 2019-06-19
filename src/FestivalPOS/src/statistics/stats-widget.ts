import { IconDefinition, faCreditCard, faFileInvoiceDollar, faMoneyBillAlt } from "@fortawesome/free-solid-svg-icons";
import { bindable, bindingMode } from "aurelia-framework";

import { PaymentMethod } from "../api/payment";
import { StatsViewModel } from "./dashboard";

const icons: {[id in PaymentMethod]: IconDefinition} = {
    "card": faCreditCard,
    "cash": faMoneyBillAlt,
    "account": faFileInvoiceDollar
}

export class StatsWidget {
    @bindable({ defaultBindingMode: bindingMode.oneTime }) title?: string;
    @bindable() value!: StatsViewModel;

    getPaymentMethodIcon(method: PaymentMethod) {
        return icons[method];
    }
}