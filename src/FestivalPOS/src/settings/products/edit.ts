import "croppie/croppie.css";

import * as Croppie from "croppie";

import { Api } from "../../api";
import { Big } from "big.js";
import { Patch } from "@utiliread/jsonpatch";
import { Product } from "../../api/product";
import { Router } from "aurelia-router";
import { autoinject } from "aurelia-framework";

@autoinject()
export class EditProduct {
    private productId!: number;
    name!: string;
    price!: string;
    imageUrl?: string;

    get canSubmit() {
        return !!this.name.length;
    }

    constructor(private api: Api, private router: Router) {
    }

    async activate(params: { productId: string }) {
        this.productId = Number(params.productId);
        const product = await this.api.getProduct(this.productId).transfer();
        this.name = product.name;
        this.price = product.price.toFixed(2);
        this.imageUrl = product.previewImageUrl;
    }

    deactivate() {
        if (this.croppie) {
            this.croppie.destroy();
        }
    }

    private croppie?: Croppie;
    protected croppieElement!: HTMLDivElement;
    protected file!: HTMLInputElement;

    async fileSelected() {
        if (!this.file.files || this.file.files.length !== 1) {
            return;
        }

        this.croppie = new Croppie(this.croppieElement, {
            boundary: {
                width: 330,
                height: 300
            },
            enableExif: true,
            viewport: {
                width: 300,
                height: 240,
                type: "square"
            }
        });

        const file = this.file.files[0];
        const url = await readAsDataURL(file);
        this.croppie.bind({
            url: url
        });
    }

    async delete() {
        if (confirm("Skal produktet slettes?")) {
            await this.api.deleteProduct(this.productId).send();
            this.router.navigateToRoute("list");
        }
    }

    deleteImage() {
        if (this.croppie) {
            this.croppie.destroy();
            delete this.croppie;
            this.file.files = null;
            this.file.value = "";
        }
        delete this.imageUrl;
    }

    async submit() {
        let patch = new Patch<Product>()
            .replace(x => x.name, this.name)
            .replace(x => x.price, new Big(this.price));

        if (!this.imageUrl) {
            patch = patch.replace(nameof<Product>(x => x.previewImageName), null);
            patch = patch.replace(nameof<Product>(x => x.thumbnailImageName), null);
        }

        await this.api.updateProduct(this.productId, patch.operations).transfer();

        if (this.croppie && this.file.files) {
            const filename = this.file.files[0].name;
            const image = await this.croppie.result({ type: "blob" });
            
            await this.api.uploadImage(this.productId, image, filename).transfer();
        }

        this.router.navigateToRoute("list");
    }
}

function readAsDataURL(file: File): Promise<string> {
    const reader = new FileReader();
    return new Promise((resolve, reject) => {
        reader.onloadend = () => resolve(<string>reader.result);
        reader.onerror = () => {
            reader.abort();
            reject(new Error('Unable to read'));
        };

        reader.readAsDataURL(file);
    });
}