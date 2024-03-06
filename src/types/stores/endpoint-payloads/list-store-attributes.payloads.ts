import {Endpoint, HttpMethods} from "../../generic";
import { IStoreAttribute, IStoreAttributeOption } from "../models";

export interface IListStoreAttributesResponse {
    attributes: Array<IStoreAttribute & {
        options: Array<IStoreAttributeOption>
    }>
}

export const ListStoreAttributesEndpoint: Endpoint = {
    path: '/active-attributes',
    fullPath: '/store-mgt/active-attributes',
    parentModule: '/stores',
    method: HttpMethods.Get
}