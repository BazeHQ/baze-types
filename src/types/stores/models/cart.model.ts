import { IBase, ICloudinaryImage } from "../../generic";
import { IWebstoreProductQuantityConfig } from "./product.model";

export interface ICartItem extends IBase {
    product: string;
    quantity: number;
    quantityInStock: number;
    variantOption?: IWebstoreProductQuantityConfig;


    metadata?: {
        name?: string;
        isVariantProduct?: boolean;
        price?: number;
        productImages?: ICloudinaryImage
    }
}

export interface ICart extends IBase {
    store?: string;
    customer?: string;
    items: Array<ICartItem>
}