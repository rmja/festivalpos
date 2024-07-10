import { State, setup } from "./state";
import { Store, connectTo } from "aurelia-store";

import { Api } from "./api";
import { Router } from "aurelia-router";
import { autoinject } from "aurelia-framework";

@connectTo({
  setup: "activate",
  selector: (store) => store.state,
})
@autoinject()
export class Setup {
  private state!: State;
  terminal?: TerminalViewModel;
  terminals!: TerminalViewModel[];

  pointOfSale?: PointOfSaleViewModel;
  pointOfSales!: PointOfSaleViewModel[];

  affiliate?: SumUpAffiliateViewModel;
  affiliates!: SumUpAffiliateViewModel[];
  receiptEmail?: string;

  vibrantTerminal?: VibrantTerminalViewModel;
  vibrantTerminals!: VibrantTerminalViewModel[];

  mobilepayNumber?: number;

  version = __VERSION__;

  get canSubmit() {
    return this.terminal && this.pointOfSale;
  }

  constructor(
    private api: Api,
    private store: Store<State>,
    private router: Router,
  ) {}

  async activate() {
    this.terminals = await this.api.getAllTerminals().transfer();
    this.pointOfSales = await this.api.getAllPointOfSales().transfer();
    this.affiliates = await this.api.getAllSumupAffiliates().transfer();
    const vibrantAccounts = await this.api.getAllVibrantAccounts().transfer();

    this.vibrantTerminals = [];
    for (const account of vibrantAccounts) {
      const accountTerminals = await this.api
        .getAllVibrantTerminals(account.id)
        .transfer();
      this.vibrantTerminals.push(
        ...accountTerminals.map((x) =>
          Object.assign(x, { accountName: account.name }),
        ),
      );
    }

    this.terminal = this.terminals.find((x) => x.id === this.state.terminalId);
    this.pointOfSale = this.pointOfSales.find(
      (x) => x.id === this.state.pointOfSaleId,
    );
    this.affiliate = this.affiliates.find(
      (x) => x.key === this.state.sumupAffiliateKey,
    );
    this.receiptEmail = this.state.sumupReceiptEmail;
    this.vibrantTerminal = this.vibrantTerminals.find(
      (x) =>
        x.accountId === this.state.vibrantAccountId &&
        x.id === this.state.vibrantTerminalId,
    );
    this.mobilepayNumber = this.state.mobilepayNumber;
  }

  async createDefaults() {
    this.terminals.push(
      await this.api.createTerminal({ name: "Terminal 1" }).transfer(),
    );
    this.pointOfSales.push(
      await this.api.createPointOfSale({ name: "Salgssted 1" }).transfer(),
    );
  }

  async submit() {
    if (!this.terminal || !this.pointOfSale) {
      throw new Error();
    }

    await this.store.dispatch(setup, {
      terminalId: this.terminal.id,
      pointOfSaleId: this.pointOfSale.id,
      sumupAffiliateKey: this.affiliate?.key,
      sumupReceiptEmail: this.receiptEmail || undefined,
      vibrantAccountId: this.vibrantTerminal?.accountId,
      vibrantTerminalId: this.vibrantTerminal?.id,
      mobilepayNumber: this.mobilepayNumber && this.mobilepayNumber,
    });

    this.router.navigateToRoute("sale");
  }
}

interface TerminalViewModel {
  id: number;
  name: string;
}

interface PointOfSaleViewModel {
  id: number;
  name: string;
}

interface SumUpAffiliateViewModel {
  key: string;
  name?: string;
}

interface VibrantTerminalViewModel {
  id: string;
  name: string;
  accountName: string;
  accountId: string;
}
