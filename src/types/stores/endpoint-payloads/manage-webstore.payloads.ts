import {IProduct} from "../models";
import {IPagination} from "../../generic";

export interface IWebstoreProduct extends IProduct {
  minPrice: number;
  maxPrice: number;
}

export interface IWebstoreProducts {
  products: Array<IWebstoreProduct>;
  pagination: IPagination;
}
