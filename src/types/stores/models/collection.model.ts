import { IBase } from "../../generic";
import { IProduct } from "./product.model";

export interface ICollection extends IBase {
    name: string
    products: Array<string> | Array<IProduct>;
}