import {IStoreAttribute, IStoreAttributeOption} from "../models";
import {Endpoint, HttpMethods} from "../../generic";

export interface IListStoreAttributesResponse {
    attributes: Array<IStoreAttribute & {
        options: Array<IStoreAttributeOption>
    }>
}

export const IListStoreAttributesEndpoint: Endpoint = {
    path: '/store-mgt',
    fullPath: '/store-mgt/active-attributes',
    parentModule: '/stores',
    method: HttpMethods.Get
}