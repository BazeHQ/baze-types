import { IBase, ICloudinaryImage } from "../../generic";
import { IProductQuantityConfig } from "./product.model";

export interface ICartItem extends IBase {
    product: string;
    quantity: number;
    variantOption?: IProductQuantityConfig;

    metadata?: {
        name?: string;
        isVariantProduct?: boolean;
        price?: string;
        productImages?: ICloudinaryImage
    }
}

export interface ICart extends IBase {
    store?: string;
    customer?: string;
    items: Array<ICartItem>
}