import { IBase, IBazeEvent, ICloudinaryImage } from "../../generic";
import { IProductQuantityConfig, IProductVariantConfig, IWebstoreProductQuantityConfig } from "./product.model";
import { IStoreFee, IStoreShippingFee } from "./store.model";

export enum CartStatus {
    shopping = 'shopping',
    addedCustomer = 'added-customer',
    addedDeliveryDetails = 'added-delivery-details',
    initiatedPayment = 'initiated-payment',
    abandoned = 'abandoned',
    checkedOut = 'checked-out'
}

export interface IWebstoreCartItem extends IBase {
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

export interface IWebstoreCart extends IBase {
    store?: string;
    customer?: string;
    items: Array<IWebstoreCartItem>
}

export interface IVariantAndOption {
    variant: string;
    option: string;
}

export interface ICartItem extends IBase {
    product: string;
    quantity: number;
    variants: Array<IVariantAndOption>;
    metadata: {
        snapshots: {
            price?: number;
            productVariant?: IProductVariantConfig;
            productQuantityConfig?: IProductQuantityConfig;
        }
    }
}

export interface ICart extends IBase {
    store: string;
    customer?: string;
    items: ICartItem;
    shippingFee?: IStoreShippingFee;
    fees?: Array<IStoreFee>;
    status: CartStatus;
    metadata: {
        totalAmount: number;
        events: Array<IBazeEvent>;
    }
}