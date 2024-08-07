import {IBase, ICloudinaryImage} from "../../generic";

export enum ProductStatus {
    published = 'published',
    drafted = 'drafted',
    shelved = 'shelved',
    archived = 'archived'
}

export enum ProductSource {
    internal = 'internal',
    bulkUpload = 'bulk-upload'
}

export type IProductQuantityOption = IBase & {
    variant: string;
    option: string;
}

export type IProductVariantOption = IBase & {
    name: string;
    uuid: string;
}

export interface IProductQuantityConfig extends IBase {
    options: Array<IProductQuantityOption>
    quantity: number;
    price: number;
    uuid: string;
}

export interface IProductVariantConfig extends IBase {
    uuid: string;
    name: string;
    options: Array<IProductVariantOption>
}

export interface IProductVariant extends IBase {
    hasDifferentPrices: boolean;
    config: Array<IProductVariantConfig>
}

export interface IProduct extends IBase {
    store: string;
    slug: string;
    name: string;
    price: number;
    copiesSold: number;
    status: ProductStatus;
    images: Array<ICloudinaryImage>;
    collections: Array<string>;
    quantity: number;
    description: string;
    variantConfig: {
        quantityAndPrice: Array<IProductQuantityConfig>;
        variants: IProductVariant
    },
    metadata: {
        source: ProductSource,
        job?: string;
    }
}

