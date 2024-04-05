import {IBase} from "../../generic";
import {IProduct} from "./product.model";
import {IStore} from "./store.model";

export interface ICollection extends IBase {
  store: string | IStore;
  name: string
  slug: string;
  products: Array<string> | Array<IProduct>;
}
