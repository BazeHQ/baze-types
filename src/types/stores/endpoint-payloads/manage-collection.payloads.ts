import { Endpoint, HttpMethods } from "../../generic"
import { ICollection } from "../models"

export enum AddOrRemove {
    add = 'add',
    remove = 'remove'
}

export interface ICreateCollectionPayload {
    name: string
}

export interface IEditCollectionPayload {
    name: string
}

export interface IManageCollectionProducts {
    action: AddOrRemove,
    products: Array<string>
}

export interface IChangeCollectionProducts {
    products: Array<string>
}

export interface ICollectionResponse {
    collection: ICollection
}

export interface IListCollectionsResponse {
    collections: Array<ICollection>
}

export const CreateCollectionEndpoint: Endpoint = {
    path: '/collections',
    fullPath: '/stores/collections',
    method: HttpMethods.Post
}

export const EditCollectionEndpoint: Endpoint = {
    path: '/collections',
    fullPath: '/stores/collections',
    method: HttpMethods.Patch
}

export const ListCollectionsEndpoint: Endpoint = {
    path: '/collections/list-for-store',
    fullPath: '/stores/collections/list-for-store',
    method: HttpMethods.Get
}

export const ViewOneCollectionEndpoint: Endpoint = {
    path: '/collections/view-one',
    fullPath: '/stores/collections/view-one',
    method: HttpMethods.Get
}

export const DeleteCollectionEndpoint: Endpoint = {
    path: '/collections',
    fullPath: '/stores/collections',
    method: HttpMethods.Delete
}

export const ManageCollectionEndpoint: Endpoint = {
    path: '/collections/products',
    fullPath: '/stores/collections/products',
    method: HttpMethods.Patch
}

export const ChangeCollectionProductsEndpoint: Endpoint = {
    path: '/collections/mutations',
    fullPath: '/stores/collections/mutations',
    method: HttpMethods.Patch
}

