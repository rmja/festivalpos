import { jsonProperty } from "@utiliread/json";

export class VibrantAccount {
  @jsonProperty()
  id!: string;

  @jsonProperty()
  name!: string;

  @jsonProperty()
  sandbox!: boolean;

  @jsonProperty()
  apiKey!: string;
}

export class VibrantTerminal {
  @jsonProperty()
  id!: string;

  @jsonProperty()
  name!: string;

  @jsonProperty()
  accountId!: string;
}

export class VibrantPaymentIntent {
  @jsonProperty()
  id!: string;

  @jsonProperty()
  amount!: number;

  @jsonProperty()
  status!: "requires_payment_method" | "processing" | "succeeded" | "canceled";

  @jsonProperty()
  cancelationReason!: string;
}
