import { Api } from "../api";
import { autoinject } from "aurelia-framework";

@autoinject()
export class Vibrant {
  accounts!: AccountViewModel[];
  newId = "";
  newName = "";
  newSandbox = false;
  newApiKey = "";

  canSubmit() {
    return (
      !!this.newId.length && !!this.newName.length && !!this.newApiKey.length
    );
  }

  constructor(private api: Api) {}

  async activate() {
    this.accounts = await this.api.getAllVibrantAccounts().transfer();
  }

  delete(index: number) {
    const account = this.accounts[index];
    this.accounts.splice(index, 1);
    return this.api.deleteVibrantAccount(account.id).send();
  }

  async addAccount() {
    const newAccount = await this.api
      .createVibrantAccount({
        id: this.newId,
        name: this.newName,
        sandbox: this.newSandbox,
        apiKey: this.newApiKey,
      })
      .transfer();

    this.accounts.push(newAccount);
  }
}

interface AccountViewModel {
  id: string;
  name: string;
  sandbox: boolean;
  apiKey: string;
}
