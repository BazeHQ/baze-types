import { IBase, IBazeEvent, ICloudinaryImage } from "../../generic";
import { IProductQuantityOption } from "./product.model";
import { IStoreFee, IStoreShippingFee } from "./store.model";

export enum CartStatus {
    shopping = 'shopping',
    addedCustomer = 'added-customer',
    clearedForCheckout = 'cleared-for-checkout',
    addedDeliveryDetails = 'added-delivery-details',
    initiatedPayment = 'initiated-payment',
    abandoned = 'abandoned',
    checkedOut = 'checked-out'
}

export type CartVariantAndOptionMetadata = {
	uuid: string;
	name: string;
	option: {
		uuid: string;
		name: string;
	};
}

export type CartProductQuantityAndPrice = {
	qnpConfigId?: string;
	variants?: Array<CartVariantAndOptionMetadata>;
	hasVariants: boolean;
    images: Array<ICloudinaryImage>;
    slug: string;
	qis: number;
	price: number;
}

export interface ICartItem extends IBase {
    product: string;
    quantity: number;
    variants?: Array<IProductQuantityOption>;
    metadata?: {
        errors?: Array<string>;
        snapshots: {
            qnp: CartProductQuantityAndPrice
        }
    }
}

export interface ICart extends IBase {
    store: string; //covered
    customer?: string; //covered
    items: Array<ICartItem>;
    shippingFee?: IStoreShippingFee; //covered
    note?: string; //covered
    deliveryAddress?: string; //covered
    fees?: Array<IStoreFee>; //covered
    status: CartStatus; //covered
    metadata: {
        totalAmount: number;
        totalItems: number;
        totalCharges: number;
        errors?: Array<string>;
        events: Array<IBazeEvent>;
        customer?: {
          name: string;
          email: string;
          phoneNumber: string;
        }
    }
}
