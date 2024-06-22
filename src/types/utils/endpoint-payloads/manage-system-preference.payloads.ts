import { ISystemPreference } from "../models";

export interface ICreateSystemPreferencePayload<T> {
    name: string;
    slug: string;
    value: T;
    addOns: Array<T>;
}

export type IEditSystemPreferencePayload<T> = Partial<ICreateSystemPreferencePayload<T>>

export interface ISystemPreferenceResponse<T> {
    preference: ISystemPreference<T>
}