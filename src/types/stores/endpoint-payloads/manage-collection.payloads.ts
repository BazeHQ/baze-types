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

export interface ICollectionResponse {
    collection: ICollection
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

