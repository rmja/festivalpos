import { Http, HttpResponse } from "ur-http";
import { PointOfSale } from "./point-of-sale";
import { Terminal } from "./terminal";
import { Product } from "./product";
import { Payment } from "./payment";
import { Big } from "big.js";
import { DateTime } from "luxon";
import { Operation } from "ur-jsonpatch";
import { Order } from "./order";
import { OrderStats } from "./order-stats";
import { HttpBuilderOfT, QueryString } from "ur-http";
import { AlarmFeed, AlarmEvent } from "./alarms";
import { Account } from "./account";
import { autoinject } from "aurelia-framework";
import { CacheBuster } from "./cache-buster";

@autoinject()
export class Api {
    constructor(private buster: CacheBuster) {
        this.invalidate = this.invalidate.bind(this);
    }

    createPointOfSale(pos: { name: string }) {
        return Http.post("/PointOfSales").withJson(pos).expectJson(PointOfSale).onSent(this.invalidate());
    }

    getAllPointOfSales() {
        return Http.get("/PointOfSales").expectJsonArray(PointOfSale);
    }

    getPointOfSale(pointOfSaleId: number) {
        return Http.get(`/PointOfSales/${pointOfSaleId}`).expectJson(PointOfSale);
    }

    updatePointOfSale(pointOfSaleId: number, patch: Operation[]) {
        return Http.patch(`/PointOfSales/${pointOfSaleId}`).withJson(patch).expectJson(PointOfSale).onSent(this.invalidate());
    }

    deletePointOfSale(pointOfSaleId: number) {
        return Http.delete(`/PointOfSales/${pointOfSaleId}`).onSent(this.invalidate());
    }

    createTerminal(terminal: { name: string }) {
        return Http.post("/Terminals").withJson(terminal).expectJson(Terminal).onSent(this.invalidate());
    }

    getAllTerminals() {
        return Http.get("/Terminals").expectJsonArray(Terminal);
    }

    getTerminal(terminalId: number) {
        return Http.get(`/Terminals/${terminalId}`).expectJson(Terminal);
    }

    updateTerminal(terminalId: number, patch: Operation[]) {
        return Http.patch(`/Terminals/${terminalId}`).withJson(patch).expectJson(Terminal).onSent(this.invalidate());
    }

    deleteTerminal(terminalId: number) {
        return Http.delete(`/Terminals/${terminalId}`).onSent(this.invalidate());
    }

    createProduct(product: { name: string, price?: Big }) {
        return Http.post("/Products").withJson(product).expectJson(Product).onSent(this.invalidate());
    }

    getAllProducts() {
        return Http.get("/Products").expectJsonArray(Product);
    }

    getProduct(productId: number) {
        return Http.get(`/Products/${productId}`).expectJson(Product);
    }

    updateProduct(productId: number, patch: Operation[]) {
        return Http.patch(`/Products/${productId}`).withJson(patch).expectJson(Product).onSent(this.invalidate(
            /\/PointOfSales\/\d+\/Products/
        ));
    }

    uploadImage(productId: number, image: Blob, fileName: string) {
        const form = new FormData();
        form.append('file', image, fileName);

        return Http.put(`/Products/${productId}/Image`).withForm(form).expectJson(Product).onSent(this.invalidate(
            "/Products",
            `/Products/${productId}`,
            /\/PointOfSales\/\d+\/Products/
        ));
    }

    deleteProduct(productId: number) {
        return Http.delete(`/Products/${productId}`).onSent(this.invalidate(
            /\/PointOfSales\/\d+\/Products/
        ));
    }

    getProductsByPointOfSaleId(pointOfSaleId: number) {
        return Http.get(`/PointOfSales/${pointOfSaleId}/Products`).expectJsonArray(Product);
    }

    updateProductsByPointOfSaleId(pointOfSaleId: number, patch: Operation[]) {
        return Http.patch(`/PointOfSales/${pointOfSaleId}/Products`).withJson(patch).expectJsonArray(Product).onSent(this.invalidate());
    }

    createOrder(order: { pointOfSaleId: number, terminalId: number, lines: { name?: string, note?: string, quantity: number, total: Big, productId?: number }[] }) {
        return Http.post("/Orders").withJson(order).expectJson(Order).onSent(this.invalidate());
    }

    getOrderById(orderId: number) {
        return Http.get(`/Orders/${orderId}`).expectJson(Order);
    }

    deleteOrder(orderId: number) {
        return Http.delete(`/Orders/${orderId}`).onSent(this.invalidate());
    }

    createPayment(orderId: number, payment: { method: "card" | "cash" | "account", amount: Big, transactionNumber?: string, accountId?: number }) {
        return Http.post(`/Orders/${orderId}/Payments`).withJson(payment).expectJson(Payment).onSent(this.invalidate(
            "/Payments",
            `/Orders/${orderId}`
        ));
    }

    getAllPayments(filter?: { terminalId?: number, pointOfSaleId?: number, accountId?: number, from?: DateTime, to?: DateTime }) {
        return Http.get("/Payments", filter).expectJsonArray(Payment);
    }

    getHourlyStats(filter: { year: number, terminalId?: number, pointOfSaleId?: number }) {
        return Http.get("/Stats/Hourly", filter).expectJsonArray(OrderStats);
    }

    createAlarmFeed(feed: { name: string, subscriberEmail?: string }) {
        return Http.post("/Alarms/Feeds").withJson(feed).expectJson(AlarmFeed).onSent(this.invalidate());
    }

    getAllAlarmFeeds() {
        return Http.get("/Alarms/Feeds").expectJsonArray(AlarmFeed);
    }

    getAlarmFeed(alarmFeedId: number) {
        return Http.get(`/Alarms/Feeds/${alarmFeedId}`).expectJson(AlarmFeed);
    }

    updateAlarmFeed(alarmFeedId: number, patch: Operation[]) {
        return Http.patch(`/Alarms/Feeds/${alarmFeedId}`).withJson(patch).expectJson(AlarmFeed).onSent(this.invalidate());
    }

    deleteAlarmFeed(alarmFeedId: number) {
        return Http.delete(`/Alarms/Feeds/${alarmFeedId}`).onSent(this.invalidate());
    }

    createAlarmEvent(alarmFeedId: number, event: { terminalId: number, pointOfSaleId: number, }) {
        return Http.post(`/Alarms/Feeds/${alarmFeedId}/Events`).withJson(event).expectJson(AlarmEvent).onSent(this.invalidate(
            "/Alarms/Events/Pending"
        ));
    }

    getAllPendingAlarmEvents(filter?: { terminalId?: number, pointOfSaleId?: number }) {
        return Http.get("/Alarms/Events/Pending", filter).expectJsonArray(AlarmEvent);
    }

    cancelAlarmEvent(alarmEventId: number) {
        return Http.delete(`/Alarms/Events/${alarmEventId}`).expectJson(AlarmEvent).onSent(this.invalidate(
            "/Alarms/Events/Pending"
        ));
    }

    createAccount(account: { number: number; name: string, maxCredit: Big }) {
        return Http.post("/Accounts").withJson(account).expectJson(Account).onSent(this.invalidate());
    }

    getAllAccounts() {
        return Http.get("/Accounts").expectJsonArray(Account);
    }

    getAccount(accountId: number) {
        return Http.get(`/Accounts/${accountId}`).expectJson(Account);
    }

    updateAccount(accountId: number, patch: Operation[]) {
        return Http.patch(`/Accounts/${accountId}`).withJson(patch).expectJson(Account).onSent(this.invalidate());
    }

    resetAllAccounts() {
        return Http.post("/Accounts/Reset").onSent(this.invalidate(
            /\/Accounts/
        ));
    }

    deleteAccount(accountId: number) {
        return Http.delete(`/Accounts/${accountId}`).onSent(this.invalidate());
    }

    private invalidate(...additionalFilters: (string | RegExp)[]) {
        return (response: HttpResponse) => {
            const url = response.rawResponse.url;
            const filters = [url, ...additionalFilters];

            const match = /(.*)\/\d+$/.exec(url);
            if (match) {
                filters.push(match[1]);
            }

            return this.buster.invalidate(filters);
        }
    }
}

declare module "ur-http" {
    interface HttpBuilderOfT<T> {
        bypassCache(): HttpBuilderOfT<T>;
    }
}

function bypassCache<T>(this: HttpBuilderOfT<T>) {
    this.message.url = QueryString.append(this.message.url, { bypassCache: null });
    this.addHeader("Cache-Control", "no-cache");
    return this;
}

HttpBuilderOfT.prototype.bypassCache = bypassCache;