import { IBase } from "../../generic";

export interface ISystemPreference<T, AddOnType = T> extends IBase {
    name: string;
    slug: string;
    addOns: Array<AddOnType>;
    value: T;
}