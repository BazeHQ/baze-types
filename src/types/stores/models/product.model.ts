import {IBase} from "../../generic";

export interface IProductQuantityConfig extends IBase {
    options: Array<{
        _id: string;
        variant: string;
    }>
    quantity: number;
}

export interface IProductVariantConfig extends IBase {
    hasDifferentPrices: boolean;
    options: Array<{
        _id: string;
        name: string;
        price: number;
    }>
}

export interface IProduct extends IBase {
    store: string;
    name: string;
    price: number;
    quantity: number;
    variantConfig: {
        quantity: Array<IProductQuantityConfig>;
        variants: Array<IProductVariantConfig>
    }
}