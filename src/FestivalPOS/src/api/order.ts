import { Big } from "big.js";
import { DateTime } from "luxon";
import { Payment } from "./payment";
import { bigConverter } from "./converters/big-converter";
import { dateTimeConverter } from "./converters/date-time-converter";
import { jsonProperty } from "ur-json";

export class OrderLine {
    @jsonProperty()
    id!: number;

    @jsonProperty()
    orderId!: number;

    @jsonProperty()
    name?: string;

    @jsonProperty()
    note?: string;

    @jsonProperty()
    productId?: number;

    @jsonProperty()
    receiveable!: number;

    @jsonProperty()
    quantity!: number;

    @jsonProperty({ converter: bigConverter })
    total!: Big;
}

export class Order {
    @jsonProperty()
    id!: number;

    @jsonProperty()
    pointOfSaleId!: number;

    @jsonProperty()
    terminalId!: number;

    @jsonProperty({ type: OrderLine })
    lines: OrderLine[] = [];

    @jsonProperty({ type: Payment })
    payments: Payment[] = [];

    @jsonProperty({ converter: dateTimeConverter })
    created!: DateTime;

    get totalQuantity() {
        return this.lines.reduce((current, line) => current + line.quantity, 0);
    }

    get total() {
        return this.lines.reduce((current, line) => current.add(line.total), new Big(0));
    }

    get totalPaid() {
        return this.payments.reduce((current, payment) => current.add(payment.amount), new Big(0));
    }

    get amountDue() {
        return this.total.sub(this.totalPaid);
    }
}