import { AlarmEvent, AlarmFeed } from "./alarms";
import { Http, HttpResponse, HttpResponseOfT } from "ur-http";
import { HttpBuilderOfT, QueryString } from "ur-http";

import { Account } from "./account";
import { Big } from "big.js";
import { CacheControl } from "./cache-control";
import { DateTime } from "luxon";
import { Operation } from "ur-jsonpatch";
import { Order } from "./order";
import { OrderStats } from "./order-stats";
import { Payment } from "./payment";
import { PointOfSale } from "./point-of-sale";
import { PointOfSaleProduct } from './point-of-sale-product';
import { Printer } from "./printer";
import { Product } from "./product";
import { Terminal } from "./terminal";
import { autoinject } from "aurelia-framework";

enum K {
    PointOfSales = "pos",
    Terminals = "term",
    Printers = "prn",
    Products = "prod",
    Orders = "ord",
    Payments = "pay",
    Accounts = "acc",
    Alarms = "alarm",
    AlarmEvents = "event",
}

@autoinject()
export class Api {
    constructor(private cache: CacheControl) {
        this.bust = this.bust.bind(this);
    }

    createPointOfSale(pos: { name: string, receiptPrinterId?: number, ticketPrinterId?: number, servingPrinterId?: number }) {
        return Http.post("/PointOfSales").withJson(pos).expectJson(PointOfSale).onSent(this.bust([
            K.PointOfSales
        ]));
    }

    getAllPointOfSales() {
        return Http.get("/PointOfSales").expectJsonArray(PointOfSale).onReceived(this.tag(result => [
            K.PointOfSales,
            ...result.map(x => `${K.PointOfSales}:${x.id}`)
        ]));
    }

    getPointOfSale(pointOfSaleId: number) {
        return Http.get(`/PointOfSales/${pointOfSaleId}`).expectJson(PointOfSale).onReceived(this.tag(result => [
            `${K.PointOfSales}:${result.id}`
        ]));
    }

    updatePointOfSale(pointOfSaleId: number, patch: Operation[]) {
        return Http.patch(`/PointOfSales/${pointOfSaleId}`).withJson(patch).expectJson(PointOfSale).onSent(this.bust([
            `${K.PointOfSales}:${pointOfSaleId}`
        ]));
    }

    deletePointOfSale(pointOfSaleId: number) {
        return Http.delete(`/PointOfSales/${pointOfSaleId}`).onSent(this.bust([
            `${K.PointOfSales}:${pointOfSaleId}`
        ]));
    }

    createTerminal(terminal: { name: string }) {
        return Http.post("/Terminals").withJson(terminal).expectJson(Terminal).onSent(this.bust([
            K.Terminals
        ]));
    }

    getAllTerminals() {
        return Http.get("/Terminals").expectJsonArray(Terminal).onReceived(this.tag(result => [
            K.Terminals,
            ...result.map(x => `${K.Terminals}:${x.id}`)
        ]));
    }

    getTerminal(terminalId: number) {
        return Http.get(`/Terminals/${terminalId}`).expectJson(Terminal).onReceived(this.tag(result => [
            `${K.Terminals}:${result.id}`
        ]));
    }

    updateTerminal(terminalId: number, patch: Operation[]) {
        return Http.patch(`/Terminals/${terminalId}`).withJson(patch).expectJson(Terminal).onSent(this.bust([
            `${K.Terminals}:${terminalId}`
        ]));
    }

    deleteTerminal(terminalId: number) {
        return Http.delete(`/Terminals/${terminalId}`).onSent(this.bust([
            `${K.Terminals}:${terminalId}`
        ]));
    }

    createPrinter(printer: { name: string, terminalId?: number }) {
        return Http.post("/Printers").withJson(printer).expectJson(Printer).onSent(this.bust([
            K.Printers
        ]));
    }

    getAllPrinters() {
        return Http.get("/Printers").expectJsonArray(Printer).onReceived(this.tag(result => [
            K.Printers,
            ...result.map(x => `${K.Printers}:${x.id}`)
        ]));
    }

    getPrinter(printerId: number) {
        return Http.get(`/Printers/${printerId}`).expectJson(Printer).onReceived(this.tag(result => [
            `${K.Printers}:${result.id}`
        ]));
    }

    updatePrinter(printerId: number, patch: Operation[]) {
        return Http.patch(`/Printers/${printerId}`).withJson(patch).expectJson(Printer).onSent(this.bust([
            `${K.Printers}:${printerId}`
        ]));
    }

    deletePrinter(printerId: number) {
        return Http.delete(`/Printers/${printerId}`).onSent(this.bust([
            `${K.Printers}:${printerId}`
        ]));
    }

    createProduct(product: { name: string, price?: Big }) {
        return Http.post("/Products").withJson(product).expectJson(Product).onSent(this.bust([
            K.Products
        ]));
    }

    getAllProducts() {
        return Http.get("/Products").expectJsonArray(Product).onReceived(this.tag(result => [
            K.Products,
            ...result.map(x => `${K.Products}:${x.id}`)
        ]));
    }

    getProduct(productId: number) {
        return Http.get(`/Products/${productId}`).expectJson(Product).onReceived(this.tag(result => [
            `${K.Products}:${result.id}`
        ]));
    }

    updateProduct(productId: number, patch: Operation[]) {
        return Http.patch(`/Products/${productId}`).withJson(patch).expectJson(Product).onSent(this.bust([
            `${K.Products}:${productId}`
        ]));
    }

    uploadImage(productId: number, image: Blob, fileName: string) {
        const form = new FormData();
        form.append('file', image, fileName);

        return Http.put(`/Products/${productId}/Image`).withForm(form).expectJson(Product).onSent(this.bust([
            `${K.Products}:${productId}`
        ]));
    }

    deleteProduct(productId: number) {
        return Http.delete(`/Products/${productId}`).onSent(this.bust([
            `${K.Products}:${productId}`
        ]));
    }

    getProductsByPointOfSaleId(pointOfSaleId: number) {
        return Http.get(`/PointOfSales/${pointOfSaleId}/Products`).expectJsonArray(PointOfSaleProduct).onReceived(this.tag(result => [
            K.Products,
            ...result.map(x => `${K.Products}:${x.product.id}`)
        ]));
    }

    updateProductsByPointOfSaleId(pointOfSaleId: number, patch: Operation[]) {
        return Http.patch(`/PointOfSales/${pointOfSaleId}/Products`).withJson(patch).expectJsonArray(PointOfSaleProduct).onSent(this.bust([
            K.Products
        ]));
    }

    createOrder(order: { pointOfSaleId: number, terminalId: number, lines: { name?: string, note?: string, quantity: number, total: Big, productId?: number, receiveable: number }[] }) {
        return Http.post("/Orders").withJson(order).expectJson(Order).onSent(this.bust([
            K.Orders
        ]));
    }

    getOrderById(orderId: number) {
        return Http.get(`/Orders/${orderId}`).expectJson(Order).onReceived(this.tag(result => [
            K.Orders
        ]));
    }

    printReceipt(orderId: number, pointOfSaleId?: number) {
        return Http.post(`/Orders/${orderId}/PrintReceipt`, { pointOfSaleId });
    }

    processPresale(orderId: number, pointOfSaleId: number, redeem: number[]) {
        return Http.post(`/Orders/${orderId}/ProcessPresale`, { pointOfSaleId, redeem })
    }

    deleteOrder(orderId: number) {
        return Http.delete(`/Orders/${orderId}`).onSent(this.bust([
            K.Orders
        ]));
    }

    createPayment(orderId: number, payment: { method: "card" | "cash" | "account", amount: Big, transactionNumber?: string, accountId?: number }) {
        return Http.post(`/Orders/${orderId}/Payments`).withJson(payment).expectJson(Payment).onSent(this.bust([
            K.Payments,
            K.Orders
        ]));
    }

    getAllPayments(filter?: { terminalId?: number, pointOfSaleId?: number, accountId?: number, from?: DateTime, to?: DateTime }) {
        return Http.get("/Payments", filter).expectJsonArray(Payment).onReceived(this.tag(result => [
            K.Payments,
        ]));
    }

    getHourlyStats(filter: { year: number, terminalId?: number, pointOfSaleId?: number }) {
        return Http.get("/Stats/Hourly", filter).expectJsonArray(OrderStats);
    }

    createAlarmFeed(feed: { name: string, subscriberEmail?: string }) {
        return Http.post("/Alarms/Feeds").withJson(feed).expectJson(AlarmFeed).onSent(this.bust([
            K.Alarms
        ]));
    }

    getAllAlarmFeeds() {
        return Http.get("/Alarms/Feeds").expectJsonArray(AlarmFeed).onReceived(this.tag(result => [
            K.Alarms
        ]));
    }

    getAlarmFeed(alarmFeedId: number) {
        return Http.get(`/Alarms/Feeds/${alarmFeedId}`).expectJson(AlarmFeed).onReceived(this.tag(result => [
            K.Alarms
        ]));
    }

    updateAlarmFeed(alarmFeedId: number, patch: Operation[]) {
        return Http.patch(`/Alarms/Feeds/${alarmFeedId}`).withJson(patch).expectJson(AlarmFeed).onSent(this.bust([
            K.Alarms
        ]));
    }

    deleteAlarmFeed(alarmFeedId: number) {
        return Http.delete(`/Alarms/Feeds/${alarmFeedId}`).onSent(this.bust([
            K.Alarms
        ]));
    }

    createAlarmEvent(alarmFeedId: number, event: { terminalId: number, pointOfSaleId: number, }) {
        return Http.post(`/Alarms/Feeds/${alarmFeedId}/Events`).withJson(event).expectJson(AlarmEvent).onSent(this.bust([
            K.AlarmEvents
        ]));
    }

    getAllPendingAlarmEvents(filter?: { terminalId?: number, pointOfSaleId?: number }) {
        return Http.get("/Alarms/Events/Pending", filter).expectJsonArray(AlarmEvent).onReceived(this.tag(result => [
            K.AlarmEvents
        ]));
    }

    cancelAlarmEvent(alarmEventId: number) {
        return Http.delete(`/Alarms/Events/${alarmEventId}`).expectJson(AlarmEvent).onSent(this.bust([
            K.AlarmEvents
        ]));
    }

    createAccount(account: { number: number; name: string, maxCredit: Big }) {
        return Http.post("/Accounts").withJson(account).expectJson(Account).onSent(this.bust([
            K.Accounts
        ]));
    }

    getAllAccounts() {
        return Http.get("/Accounts").expectJsonArray(Account).onReceived(this.tag(result => [
            K.Accounts,
            K.Payments,
            ...result.map(x => `${K.Accounts}:${x.id}`)
        ]));
    }

    getAccount(accountId: number) {
        return Http.get(`/Accounts/${accountId}`).expectJson(Account).onReceived(this.tag(result => [
            K.Payments,
            `${K.Accounts}:${result.id}`
        ]));
    }

    updateAccount(accountId: number, patch: Operation[]) {
        return Http.patch(`/Accounts/${accountId}`).withJson(patch).expectJson(Account).onSent(this.bust([
            `${K.Accounts}:${accountId}`
        ]));
    }

    resetAllAccounts() {
        return Http.post("/Accounts/Reset").onSent(this.bust([
            K.Payments
        ]));
    }

    deleteAccount(accountId: number) {
        return Http.delete(`/Accounts/${accountId}`).onSent(this.bust([
            `${K.Accounts}:${accountId}`
        ]));
    }

    private bust(tags: string[]) {
        return () => {
            return this.cache.bust(tags);
        }
    }

    private tag<T>(getTags: (body: T) => string[]) {
        return async (received: T, response: HttpResponseOfT<T>) => {
            const tags = getTags(received);
            await this.cache.tag(response.rawResponse.url, tags);
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