import {IProduct, IProductVariant, IWebstoreProductQuantityConfig} from "../models";
import {IPagination} from "../../generic";

export interface IWebstoreProduct extends Omit<IProduct, 'variantConfig'> {
  minPrice: number;
  maxPrice: number;
  variantConfig: {
        quantityAndPrice: Array<IWebstoreProductQuantityConfig>;
        variants: IProductVariant
    }
}

export interface IWebstoreProducts {
  products: Array<IWebstoreProduct>;
  pagination: IPagination;
}

export interface IEditCartItemQuantityPayload {
  cart: string;
  item: string;
}
