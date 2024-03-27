import { ISystemPreference } from "../models";

export interface ICreateSystemPreference<T> {
    name: string;
    slug: string;
    value: T;
}

export type IEditSystemPreference<T> = Partial<ICreateSystemPreference<T>>

export interface ISystemPreferenceResponse<T> {
    preference: ISystemPreference<T>
}