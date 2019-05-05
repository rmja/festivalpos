import { Http } from "ur-http";
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

export class Api {
    createPointOfSale(terminal: { name: string }) {
        return Http.post("/PointOfSales").withJson(terminal).expectJson(PointOfSale);
    }

    getAllPointOfSales() {
        return Http.get("/PointOfSales").expectJsonArray(PointOfSale);
    }

    getPointOfSale(pointOfSaleId: number) {
        return Http.get(`/PointOfSales/${pointOfSaleId}`).expectJson(PointOfSale);
    }

    updatePointOfSale(pointOfSaleId: number, patch: Operation[]) {
        return Http.patch(`/PointOfSales/${pointOfSaleId}`).withJson(patch).expectJson(PointOfSale);
    }

    deletePointOfSale(pointOfSaleId: number) {
        return Http.delete(`/PointOfSales/${pointOfSaleId}`);
    }

    createTerminal(terminal: { name: string }) {
        return Http.post("/Terminals").withJson(terminal).expectJson(Terminal);
    }

    getAllTerminals() {
        return Http.get("/Terminals").expectJsonArray(Terminal);
    }

    getTerminal(terminalId: number) {
        return Http.get(`/Terminals/${terminalId}`).expectJson(Terminal);
    }

    updateTerminal(terminalId: number, patch: Operation[]) {
        return Http.patch(`/Terminals/${terminalId}`).withJson(patch).expectJson(Terminal);
    }

    deleteTerminal(terminalId: number) {
        return Http.delete(`/Terminals/${terminalId}`);
    }

    createProduct(product: { name: string, price?: Big }) {
        return Http.post("/Products").withJson(product).expectJson(Product);
    }

    getAllProducts() {
        return Http.get("/Products").expectJsonArray(Product);
    }

    getProduct(productId: number) {
        return Http.get(`/Products/${productId}`).expectJson(Product);
    }

    updateProduct(productId: number, patch: Operation[]) {
        return Http.patch(`/Products/${productId}`).withJson(patch).expectJson(Product);
    }

    deleteProduct(productId: number) {
        return Http.delete(`/Products/${productId}`);
    }

    getProductsByPointOfSaleId(pointOfSaleId: number) {
        return Http.get(`/PointOfSales/${pointOfSaleId}/Products`).expectJsonArray(Product);
    }

    updateProductsByPointOfSaleId(pointOfSaleId: number, patch: Operation[]) {
        return Http.patch(`/PointOfSales/${pointOfSaleId}/Products`).withJson(patch).expectJsonArray(Product);
    }

    createOrder(order: { pointOfSaleId: number, terminalId: number, lines: { name?: string, note?: string, quantity: number, total: Big, productId?: number }[] }) {
        return Http.post("/Orders").withJson(order).expectJson(Order);
    }

    getOrderById(orderId: number) {
        return Http.get(`/Orders/${orderId}`).expectJson(Order);
    }

    deleteOrder(orderId: number) {
        return Http.delete(`/Orders/${orderId}`);
    }

    createPayment(orderId: number, payment: { method: "card" | "cash" | "account", amount: Big, accountId?: number }) {
        return Http.post(`/Orders/${orderId}/Payments`).withJson(payment).expectJson(Payment);
    }

    getAllPayments(filter?: { terminalId?: number, pointOfSaleId?: number, accountId?: number, from?: DateTime, to?: DateTime }) {
        return Http.get("/Payments", filter).expectJsonArray(Payment);
    }

    getHourlyStats(filter: { year: number, terminalId?: number, pointOfSaleId?: number }) {
        return Http.get("/Stats/Hourly", filter).expectJsonArray(OrderStats);
    }

    createAlarmFeed(feed: { name: string, subscriberEmail?: string }) {
        return Http.post("/Alarms/Feeds").withJson(feed).expectJson(AlarmFeed);
    }

    getAllAlarmFeeds() {
        return Http.get("/Alarms/Feeds").expectJsonArray(AlarmFeed);
    }

    getAlarmFeed(alarmFeedId: number) {
        return Http.get(`/Alarms/Feeds/${alarmFeedId}`).expectJson(AlarmFeed);
    }

    updateAlarmFeed(alarmFeedId: number, patch: Operation[]) {
        return Http.patch(`/Alarms/Feeds/${alarmFeedId}`).withJson(patch).expectJson(AlarmFeed);
    }

    deleteAlarmFeed(alarmFeedId: number) {
        return Http.delete(`/Alarms/Feeds/${alarmFeedId}`);
    }

    createAlarmEvent(alarmFeedId: number, event: { terminalId: number, pointOfSaleId: number, }) {
        return Http.post(`/Alarms/Feeds/${alarmFeedId}/Events`).withJson(event).expectJson(AlarmEvent);
    }

    getAllPendingAlarmEvents(filter?: { terminalId?: number, pointOfSaleId?: number }) {
        return Http.get("/Alarms/Events/Pending", filter).expectJsonArray(AlarmEvent);
    }

    cancelAlarmEvent(alarmEventId: number) {
        return Http.delete(`/Alarms/Events/${alarmEventId}`).expectJson(AlarmEvent);
    }

    createAccount(account: { number: number; name: string, maxCredit: Big }) {
        return Http.post("/Accounts").withJson(account).expectJson(Account);
    }

    getAllAccounts() {
        return Http.get("/Accounts").expectJsonArray(Account);
    }

    getAccount(accountId: number) {
        return Http.get(`/Accounts/${accountId}`).expectJson(Account);
    }

    updateAccount(accountId: number, patch: Operation[]) {
        return Http.patch(`/Accounts/${accountId}`).withJson(patch).expectJson(Account);
    }

    resetAllAccounts() {
        return Http.post("/Accounts/Reset");
    }

    deleteAccount(accountId: number) {
        return Http.delete(`/Accounts/${accountId}`);
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