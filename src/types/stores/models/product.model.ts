import {IBase, ICloudinaryImage} from "../../generic";

export type IProductQuantityOption = IBase & {
    variant: string;
    option: string;
}

export interface IProductQuantityConfig extends IBase {
    options: Array<IProductQuantityOption>
    quantity: number;
    price: number;
}

export interface IProductVariantConfig extends IBase {
    hasDifferentPrices: boolean;
    config: Array<{
        _id: string;
        name: string;
        options: Array<{
            _id: string;
            name: string;
        }>
    }>
}

export interface IProduct extends IBase {
    store: string;
    name: string;
    price: number;
    images: Array<ICloudinaryImage>;
    quantity: number;
    description: string;
    variantConfig: {
        quantityAndPrice: Array<IProductQuantityConfig>;
        variants: IProductVariantConfig
    }
}
