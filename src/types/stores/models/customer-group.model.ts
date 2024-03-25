import { IBase } from "../../generic";
import { ICustomer } from "./customer.model";

export interface ICustomerGroup extends IBase {
    name: string;
    customers: Array<string> | Array<ICustomer>;
}