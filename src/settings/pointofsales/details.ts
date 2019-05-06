import { autoinject } from "aurelia-framework";
import { Api } from "../../api";
import { DialogService } from "aurelia-dialog";
import { Product } from "../../api/product";
import { diff } from "ur-jsonpatch";
import { PointOfSale } from "../../api/point-of-sale";
import { moveBefore } from "../../move-before";
import { Router } from "aurelia-router";
import { AddProductDialog } from "./add-product-dialog";

@autoinject()
export class PointOfSaleDetails {
    private pointOfSale!: PointOfSale;
    pointOfSaleId!: number;
    name!: string;
    private currentProducts!: Product[];
    products!: ProductViewModel[];

    constructor(private api: Api, private router: Router, private dialog: DialogService) {
    }

    async activate(params: { pointOfSaleId: string }) {
        this.pointOfSaleId = Number(params.pointOfSaleId);

        this.pointOfSale = await this.api.getPointOfSale(this.pointOfSaleId).transfer();
        this.name = this.pointOfSale.name;
        this.currentProducts = await this.api.getProductsByPointOfSaleId(this.pointOfSaleId).transfer();
        this.products = [...this.currentProducts];
    }

    async delete() {
        if (confirm("Skal salgsstedet slettes?")) {
            await this.api.deletePointOfSale(this.pointOfSale.id).send();
            this.router.navigateToRoute("list");
        }
    }

    async addProduct() {
        const result = await this.dialog.open({ viewModel: AddProductDialog }).whenClosed();

        if (!result.wasCancelled) {
            const product = result.output as Product;
            this.products.push(product);
        }
    }

    removeProduct(index: number) {
        this.products.splice(index, 1);
    }

    itemDropped(itemElement: HTMLElement, siblingElement: HTMLElement) {
        const item = this.products[Number(itemElement.dataset.index)];
        const sibling = siblingElement ? this.products[Number(siblingElement.dataset.index)] : undefined;
        moveBefore(this.products, x => x === item, x => x === sibling);
    }

    async submit() {
        const operations = diff(this.currentProducts, this.products);
        await this.api.updateProductsByPointOfSaleId(this.pointOfSale.id, operations).transfer();
        this.currentProducts = this.products;
        this.router.navigateToRoute("list");
    }
}

interface ProductViewModel extends Product {
    id: number;
    name: string;
}