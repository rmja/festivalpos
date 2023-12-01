import { autoinject } from "aurelia-framework";
import { Api } from "../../api";

@autoinject()
export class AccountsList {
  accounts!: AccountViewModel[];

  constructor(private api: Api) {}

  async activate() {
    this.accounts = await this.api.getAllAccounts().transfer();
  }

  async resetCredit() {
    if (
      prompt(
        "Skal resterende kredit sættes til maks kredit for alle konti? Skriv 'JA' for at bekræfte",
      ) === "JA"
    ) {
      await this.api.resetAllAccounts().send();
      this.accounts = await this.api.getAllAccounts().transfer();
    }
  }
}

interface AccountViewModel {
  id: number;
  number: number;
  name: string;
}
