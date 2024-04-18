import {CartStatus, IProduct, IProductQuantityConfig, IProductVariant, IStoreFee, IStoreShippingFee } from "../models";
import {IBase, ICloudinaryImage, IPagination} from "../../generic";

export interface IWebstoreProduct extends Omit<IProduct, 'variantConfig'> {
  minPrice: number;
  maxPrice: number;
  variantConfig: {
        quantityAndPrice: Array<IWebstoreProductQuantityConfig>;
        variants: IProductVariant
    }
}

export type IWebstoreProductQuantityOption = IBase & {
  variant: string;
  variantName: string;
  option: string;
  optionName: string;
}

export interface IWebstoreProductQuantityConfig extends Partial<IProductQuantityConfig> {
  options: Array<IWebstoreProductQuantityOption>;
}

export interface IWebstoreProducts {
  products: Array<IWebstoreProduct>;
  pagination: IPagination;
}

export interface IEditCartItemQuantityPayload {
  item: string;
  quantity: number;
}

export interface IAddDeliveryToCartPayload {
  address: string;
  shippingFee: string;
  note?: string;
}

export interface ICheckoutResponse {
  transaction: {
    reference: string;
    url: string;
    transaction: string;
  }
}

export interface IWebstoreCartItem extends IBase {
  product: string;
  quantity: number;
  price: number;
  quantityInStock: number;
  variantOption?: IWebstoreProductQuantityConfig;
  hasErrors: boolean;
  errors: Array<string>

  metadata?: {
      name?: string;
      isVariantProduct?: boolean;
      productImages?: Array<ICloudinaryImage>;
      productSlug: string;
  }
}

export interface IWebstoreCart extends IBase {
  store?: string;
  items: Array<IWebstoreCartItem>
  customer?: {
      _id: string
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
  hasErrors: boolean;
  errors: Array<string>;
  metadata: {
      totalAmount: number;
      itemTotalWithoutCharges: number;
  }
}
