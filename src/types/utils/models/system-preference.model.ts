import { IBase } from "../../generic";

export interface ISystemPreference<T> extends IBase {
    name: string;
    slug: string;
    value: T
}