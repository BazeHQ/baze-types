import { IBase, IBazeEvent, ICloudinaryImage } from "../../generic";
import { IProductVariantConfig, IWebstoreProductQuantityConfig } from "./product.model";
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
    price: number;
    quantityInStock: number;
    variantOption?: IWebstoreProductQuantityConfig;

    metadata?: {
        name?: string;
        isVariantProduct?: boolean;
        productImages?: ICloudinaryImage
    }
}

export interface IWebstoreCart extends IBase {
    store?: string;
    items: Array<IWebstoreCartItem> //Add error object in each cart item; add error if it's low in stock/out of stock
    customer: {
        firstName: string
        lastName: string
        email: string
        phone: string,
        deliveryAddress: string,
        orderNote?: string
    };
    shippingFee?: IStoreShippingFee;
    fees?: Array<IStoreFee>;
    status: CartStatus;
    metadata: {
        totalAmount: number;
        itemTotalWithoutCharges: number;
    }
}

export interface IVariantAndOption {
    variant: string;
    option: string;
}

export interface ICartItem extends IBase {
    product: string;
    quantity: number;
    variants?: Array<IVariantAndOption>;
    metadata: {
        snapshots: {
            price?: number;
            chosenVariants?: Array<IProductVariantConfig>;
            quantityInStock?: number;
        }
    }
}

export interface ICart extends IBase {
    store: string;
    customer?: string;
    items: Array<ICartItem>;
    shippingFee?: IStoreShippingFee;
    fees?: Array<IStoreFee>;
    status: CartStatus;
    metadata: {
        totalAmount: number;
        events: Array<IBazeEvent>;
    }
}