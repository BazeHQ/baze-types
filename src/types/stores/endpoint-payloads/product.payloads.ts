import {IProduct} from "../models";
import {BazeError, Endpoint, HttpMethods} from "../../generic";
import {HttpStatusCode} from "axios";

export const CreateProductErrors: {
    default: BazeError
} = {
    default: {
        statusCode: HttpStatusCode.BadRequest,
        code: "DEFAULT_CREATE_PRODUCT_ERROR",
        message: `This is an example error`
    }
}

export interface ICreateProductPayload {
    store: string;
}

export interface ICreateProductResponse {
    product: IProduct
}

export const createProductEndpoint: Endpoint = {
    path: '/products',
    fullPath: '/products',
    parentModule: '/products',
    method: HttpMethods.Post
}