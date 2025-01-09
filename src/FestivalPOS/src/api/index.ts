import { AlarmEvent, AlarmFeed } from "./alarms";
import { DateTime, Duration } from "luxon";
import {
  VibrantAccount,
  VibrantPaymentIntent,
  VibrantTerminal,
} from "./vibrant";

import { Account } from "./account";
import { Big } from "big.js";
import { CacheControl } from "aurelia-workbox-cachecontrol";
import { HttpResponseOfT } from "@utiliread/http";
import { Operation } from "@utiliread/jsonpatch";
import { Order } from "./order";
import { OrderStats } from "./order-stats";
import { Payment } from "./payment";
import { PointOfSale } from "./point-of-sale";
import { PointOfSaleProduct } from "./point-of-sale-product";
import { Printer } from "./printer";
import { Product } from "./product";
import { Serving } from "./serving";
import { SumUpAffiliate } from "./sumup-affiliate";
import { Terminal } from "./terminal";
import { autoinject } from "aurelia-framework";
import { http } from "./http";

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
  SumupAffiliates = "suaff",
  VibrantAccounts = "vacc",
}

@autoinject()
export class Api {
  constructor(private cache: CacheControl) {
    this.bust = this.bust.bind(this);
  }

  createPointOfSale(pos: {
    name: string;
    servingStaff?: { name?: string }[];
    receiptPrinterId?: number;
  }) {
    return http
      .post("/PointOfSales")
      .withJson(pos)
      .expectJson(PointOfSale)
      .onSent(this.bust([K.PointOfSales]));
  }

  getAllPointOfSales() {
    return http
      .get("/PointOfSales")
      .expectJsonArray(PointOfSale)
      .onReceived(
        this.tag((result) => [
          K.PointOfSales,
          ...result.map((x) => `${K.PointOfSales}:${x.id}`),
        ]),
      );
  }

  getPointOfSale(pointOfSaleId: number) {
    return http
      .get(`/PointOfSales/${pointOfSaleId}`)
      .expectJson(PointOfSale)
      .onReceived(this.tag((result) => [`${K.PointOfSales}:${result.id}`]));
  }

  updatePointOfSale(pointOfSaleId: number, patch: Operation[]) {
    return http
      .patch(`/PointOfSales/${pointOfSaleId}`)
      .withJsonPatch(patch)
      .expectJson(PointOfSale)
      .onSent(this.bust([`${K.PointOfSales}:${pointOfSaleId}`]));
  }

  deletePointOfSale(pointOfSaleId: number) {
    return http
      .delete(`/PointOfSales/${pointOfSaleId}`)
      .onSent(this.bust([`${K.PointOfSales}:${pointOfSaleId}`]));
  }

  createTerminal(terminal: { name: string }) {
    return http
      .post("/Terminals")
      .withJson(terminal)
      .expectJson(Terminal)
      .onSent(this.bust([K.Terminals]));
  }

  getAllTerminals() {
    return http
      .get("/Terminals")
      .expectJsonArray(Terminal)
      .onReceived(
        this.tag((result) => [
          K.Terminals,
          ...result.map((x) => `${K.Terminals}:${x.id}`),
        ]),
      );
  }

  getTerminal(terminalId: number) {
    return http
      .get(`/Terminals/${terminalId}`)
      .expectJson(Terminal)
      .onReceived(this.tag((result) => [`${K.Terminals}:${result.id}`]));
  }

  updateTerminal(terminalId: number, patch: Operation[]) {
    return http
      .patch(`/Terminals/${terminalId}`)
      .withJsonPatch(patch)
      .expectJson(Terminal)
      .onSent(this.bust([`${K.Terminals}:${terminalId}`]));
  }

  deleteTerminal(terminalId: number) {
    return http
      .delete(`/Terminals/${terminalId}`)
      .onSent(this.bust([`${K.Terminals}:${terminalId}`]));
  }

  createPrinter(printer: {
    name: string;
    terminalId: number;
    restPrintPrinterName?: string;
  }) {
    return http
      .post("/Printers")
      .withJson(printer)
      .expectJson(Printer)
      .onSent(this.bust([K.Printers]));
  }

  getAllPrinters() {
    return http
      .get("/Printers")
      .expectJsonArray(Printer)
      .onReceived(
        this.tag((result) => [
          K.Printers,
          ...result.map((x) => `${K.Printers}:${x.id}`),
        ]),
      );
  }

  getPrinter(printerId: number) {
    return http
      .get(`/Printers/${printerId}`)
      .expectJson(Printer)
      .onReceived(this.tag((result) => [`${K.Printers}:${result.id}`]));
  }

  updatePrinter(printerId: number, patch: Operation[]) {
    return http
      .patch(`/Printers/${printerId}`)
      .withJsonPatch(patch)
      .expectJson(Printer)
      .onSent(this.bust([`${K.Printers}:${printerId}`]));
  }

  deletePrinter(printerId: number) {
    return http
      .delete(`/Printers/${printerId}`)
      .onSent(this.bust([`${K.Printers}:${printerId}`]));
  }

  createProduct(product: { name: string; price?: Big }) {
    return http
      .post("/Products")
      .withJson(product)
      .expectJson(Product)
      .onSent(this.bust([K.Products]));
  }

  getAllProducts() {
    return http
      .get("/Products")
      .expectJsonArray(Product)
      .onReceived(
        this.tag((result) => [
          K.Products,
          ...result.map((x) => `${K.Products}:${x.id}`),
        ]),
      );
  }

  getProduct(productId: number) {
    return http
      .get(`/Products/${productId}`)
      .expectJson(Product)
      .onReceived(this.tag((result) => [`${K.Products}:${result.id}`]));
  }

  updateProduct(productId: number, patch: Operation[]) {
    return http
      .patch(`/Products/${productId}`)
      .withJsonPatch(patch)
      .expectJson(Product)
      .onSent(this.bust([`${K.Products}:${productId}`]));
  }

  getImage(productId: number, kind: "thumbnail" | "preview") {
    return http.get(`/Products/${productId}/Image`, { kind });
  }

  uploadImage(productId: number, image: Blob, fileName: string) {
    const form = new FormData();
    form.append("file", image, fileName);

    return http
      .put(`/Products/${productId}/Image`)
      .withForm(form)
      .expectJson(Product)
      .onSent(this.bust([`${K.Products}:${productId}`]));
  }

  deleteProduct(productId: number) {
    return http
      .delete(`/Products/${productId}`)
      .onSent(this.bust([`${K.Products}:${productId}`]));
  }

  getProductsByPointOfSaleId(pointOfSaleId: number) {
    return http
      .get(`/PointOfSales/${pointOfSaleId}/Products`)
      .expectJsonArray(PointOfSaleProduct)
      .onReceived(
        this.tag((result) => [
          K.Products,
          ...result.map((x) => `${K.Products}:${x.product.id}`),
        ]),
      );
  }

  updateProductsByPointOfSaleId(pointOfSaleId: number, patch: Operation[]) {
    return http
      .patch(`/PointOfSales/${pointOfSaleId}/Products`)
      .withJsonPatch(patch)
      .expectJsonArray(PointOfSaleProduct)
      .onSent(this.bust([K.Products]));
  }

  createOrder(order: {
    pointOfSaleId: number;
    terminalId: number;
    lines: {
      name?: string;
      note?: string;
      quantity: number;
      total: Big;
      productId?: number;
      receiveable: number;
    }[];
  }) {
    return http
      .post("/Orders")
      .withJson(order)
      .expectJson(Order)
      .onSent(this.bust([K.Orders]));
  }

  getAllOrders(filter: { terminalId?: number; pointOfSaleId?: number }) {
    return http
      .get("/Orders", filter)
      .expectJsonArray(Order)
      .onReceived(this.tag((result) => [K.Orders]));
  }

  getOrderById(orderId: number) {
    return http
      .get(`/Orders/${orderId}`)
      .expectJson(Order)
      .onReceived(this.tag((result) => [K.Orders]));
  }

  getCurrentOrderByTag(tagNumber: number) {
    return http
      .get(`/Tags/${tagNumber}/CurrentOrder`)
      .expectJson(Order)
      .onReceived(this.tag((result) => [K.Orders]));
  }

  assignOrderTag(orderId: number, tagNumber: number, force?: boolean) {
    return http.put(`/Orders/${orderId}/Tags/${tagNumber}`, { force });
  }

  unassignOrderTag(orderId: number, tagNumber: number) {
    return http.delete(`/Orders/${orderId}/Tags/${tagNumber}`);
  }

  printReceipt(orderId: number, pointOfSaleId?: number) {
    return http.post(`/Orders/${orderId}/Receipt`, { pointOfSaleId });
  }

  deleteOrder(orderId: number) {
    return http.delete(`/Orders/${orderId}`).onSent(this.bust([K.Orders]));
  }

  deleteOrderRange(notBefore: DateTime) {
    return http.delete(`/Orders`, { notBefore });
  }

  createPayment(
    orderId: number,
    payment: {
      method: "card" | "cash" | "account" | "mobilePay";
      amount: Big;
      provider?: "sumup" | "vibrant";
      transactionNumber?: string;
      accountId?: number;
    },
  ) {
    return http
      .post(`/Orders/${orderId}/Payments`)
      .withJson(payment)
      .expectJson(Payment)
      .onSent(this.bust([K.Payments, K.Orders]));
  }

  depositAccount(accountId: number, amount: Big) {
    return http
      .post(`/Accounts/${accountId}/Deposit`, { amount: amount.toFixed() })
      .expectJson(Payment)
      .onSent(this.bust([K.Payments]));
  }

  getAllPayments(filter?: {
    terminalId?: number;
    pointOfSaleId?: number;
    accountId?: number;
    from?: DateTime;
    to?: DateTime;
  }) {
    return http
      .get("/Payments", filter)
      .expectJsonArray(Payment)
      .onReceived(this.tag((result) => [K.Payments]));
  }

  createServing(
    orderId: number,
    serving: {
      pointOfSaleId: number;
      highPriorityServing?: boolean;
      lines: { orderLineId: number; quantity: number }[];
    },
  ) {
    return http
      .post(`/Orders/${orderId}/Servings`)
      .withJson(serving)
      .expectJson(Serving)
      .onSent(this.bust([K.Orders]));
  }

  getServingById(servingId: number) {
    return http.get(`/Servings/${servingId}`).expectJson(Serving);
  }

  updateServing(servingId: number, patch: Operation[]) {
    return http
      .patch(`/Servings/${servingId}`)
      .withJsonPatch(patch)
      .expectJson(Serving)
      .onSent(this.bust([K.Orders]));
  }

  getStats(
    periodStart: DateTime,
    periodEnd: DateTime,
    kind: "yearly" | "monthly" | "daily" | "hourly",
    offset: Duration,
    filter: { terminalId?: number; pointOfSaleId?: number },
  ) {
    const shifted = offset.shiftTo("hours", "minutes");
    return http
      .get(
        `/Stats/${periodStart}/${periodEnd}/${kind}${
          shifted.valueOf() !== 0 ? shifted.toFormat("hh:mm") : ""
        }`,
        filter,
      )
      .expectJsonArray(OrderStats);
  }

  createAlarmFeed(feed: { name: string; subscriberEmail?: string }) {
    return http
      .post("/Alarms/Feeds")
      .withJson(feed)
      .expectJson(AlarmFeed)
      .onSent(this.bust([K.Alarms]));
  }

  getAllAlarmFeeds() {
    return http
      .get("/Alarms/Feeds")
      .expectJsonArray(AlarmFeed)
      .onReceived(this.tag((result) => [K.Alarms]));
  }

  getAlarmFeed(alarmFeedId: number) {
    return http
      .get(`/Alarms/Feeds/${alarmFeedId}`)
      .expectJson(AlarmFeed)
      .onReceived(this.tag((result) => [K.Alarms]));
  }

  updateAlarmFeed(alarmFeedId: number, patch: Operation[]) {
    return http
      .patch(`/Alarms/Feeds/${alarmFeedId}`)
      .withJsonPatch(patch)
      .expectJson(AlarmFeed)
      .onSent(this.bust([K.Alarms]));
  }

  deleteAlarmFeed(alarmFeedId: number) {
    return http
      .delete(`/Alarms/Feeds/${alarmFeedId}`)
      .onSent(this.bust([K.Alarms]));
  }

  createAlarmEvent(
    alarmFeedId: number,
    event: { terminalId: number; pointOfSaleId: number },
  ) {
    return http
      .post(`/Alarms/Feeds/${alarmFeedId}/Events`)
      .withJson(event)
      .expectJson(AlarmEvent)
      .onSent(this.bust([K.AlarmEvents]));
  }

  getAllPendingAlarmEvents(filter?: {
    terminalId?: number;
    pointOfSaleId?: number;
  }) {
    return http
      .get("/Alarms/Events/Pending", filter)
      .expectJsonArray(AlarmEvent)
      .onReceived(this.tag((result) => [K.AlarmEvents]));
  }

  cancelAlarmEvent(alarmEventId: number) {
    return http
      .delete(`/Alarms/Events/${alarmEventId}`)
      .expectJson(AlarmEvent)
      .onSent(this.bust([K.AlarmEvents]));
  }

  createAccount(account: {
    number: number;
    name: string;
    maxCredit: Big;
    highPriorityServing?: boolean;
  }) {
    return http
      .post("/Accounts")
      .withJson(account)
      .expectJson(Account)
      .onSent(this.bust([K.Accounts]));
  }

  getAllAccounts() {
    return http
      .get("/Accounts")
      .expectJsonArray(Account)
      .onReceived(
        this.tag((result) => [
          K.Accounts,
          K.Payments,
          ...result.map((x) => `${K.Accounts}:${x.id}`),
        ]),
      );
  }

  getAccount(accountId: number) {
    return http
      .get(`/Accounts/${accountId}`)
      .expectJson(Account)
      .onReceived(
        this.tag((result) => [K.Payments, `${K.Accounts}:${result.id}`]),
      );
  }

  updateAccount(accountId: number, patch: Operation[]) {
    return http
      .patch(`/Accounts/${accountId}`)
      .withJsonPatch(patch)
      .expectJson(Account)
      .onSent(this.bust([`${K.Accounts}:${accountId}`]));
  }

  resetAllAccounts() {
    return http.post("/Accounts/Reset").onSent(this.bust([K.Payments]));
  }

  deleteAccount(accountId: number) {
    return http
      .delete(`/Accounts/${accountId}`)
      .onSent(this.bust([`${K.Accounts}:${accountId}`]));
  }

  getAllServingsByPointOfSaleId(pointOfSaleId: number) {
    return http
      .get(`/PointsOfSale/${pointOfSaleId}/Servings`)
      .expectJsonArray(Serving);
  }

  createSumupAffiliate(affiliate: { key: string; name?: string }) {
    return http
      .post("/SumUp/Affiliates")
      .withJson(affiliate)
      .expectJson(SumUpAffiliate)
      .onSent(this.bust([K.SumupAffiliates]));
  }

  getAllSumupAffiliates() {
    return http
      .get("/SumUp/Affiliates")
      .expectJsonArray(SumUpAffiliate)
      .onReceived(this.tag((result) => [K.SumupAffiliates]));
  }

  deleteSumupAffiliate(key: string) {
    return http
      .delete(`/SumUp/Affiliates/${key}`)
      .onSent(this.bust([K.SumupAffiliates]));
  }

  createVibrantAccount(account: {
    id: string;
    name: string;
    sandbox: boolean;
    apiKey: string;
  }) {
    return http
      .post("/Vibrant/Accounts")
      .withJson(account)
      .expectJson(VibrantAccount)
      .onSent(this.bust([K.VibrantAccounts]));
  }

  getAllVibrantAccounts() {
    return http
      .get("/Vibrant/Accounts")
      .expectJsonArray(VibrantAccount)
      .onReceived(this.tag((result) => [K.VibrantAccounts]));
  }

  deleteVibrantAccount(key: string) {
    return http
      .delete(`/Vibrant/Accounts/${key}`)
      .onSent(this.bust([K.VibrantAccounts]));
  }

  getAllVibrantTerminals(accountId: string) {
    return http
      .get(`/Vibrant/Accounts/${accountId}/Terminals`)
      .expectJsonArray(VibrantTerminal);
  }

  createVibrantPaymentIntent(
    accountId: string,
    terminalId: string,
    paymentIntent: { amount: number; description: string },
  ) {
    return http
      .post(
        `/Vibrant/Accounts/${accountId}/Terminals/${terminalId}/PaymentIntents`,
      )
      .withJson(paymentIntent)
      .expectJson<string>();
  }

  getVibrantPaymentIntent(accountId: string, paymentIntentId: string) {
    return http
      .get(`/Vibrant/Accounts/${accountId}/PaymentIntents/${paymentIntentId}`)
      .expectJson(VibrantPaymentIntent);
  }

  private bust(tags: string[]) {
    return () => {
      return this.cache.bustTags(...tags);
    };
  }

  private tag<T, U>(getTags: (body: T) => string[]) {
    return async (response: HttpResponseOfT<T>, request: U, value: T) => {
      const tags = getTags(value);
      await this.cache.handle(response).hasTags(...tags);
    };
  }
}
