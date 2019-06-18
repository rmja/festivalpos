import { Api } from "../api";
import { autoinject } from "aurelia-framework";

@autoinject()
export class Sumup {
    affiliates!: AffiliateViewModel[];
    newKey = "";
    newName = "";

    canSubmit() {
        return !!this.newKey.length;
    }

    constructor(private api: Api) {
    }

    async activate() {
        this.affiliates = await this.api.getAllSumupAffiliates().transfer();
    }

    delete(index: number) {
        const affiliate = this.affiliates[index];

        this.affiliates.splice(index, 1);

        return this.api.deleteSumupAffiliate(affiliate.key).send();
    }

    async addAffiliate() {
        const newAffiliate = await this.api.createSumupAffiliate({
            key: this.newKey,
            name: this.newName
        }).transfer();
        
        this.affiliates.push(newAffiliate);
    }
}

interface AffiliateViewModel {
    key: string;
    name?: string;
}