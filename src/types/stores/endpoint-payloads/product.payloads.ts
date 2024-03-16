import {IProduct, IProductQuantityConfig, IProductVariant, ProductStatus} from "../models";
import {BazeError, Endpoint, HttpMethods, ICloudinaryImage} from "../../generic";
import {HttpStatusCode} from "axios";

export const CreateProductErrors: {
    noSuchStoreForCustomer: BazeError,
} = {
    noSuchStoreForCustomer: {
        statusCode: HttpStatusCode.BadRequest,
        code: "NO_SUCH_STORE_FOR_CUSTOMER",
        message: "This store does not exist for this customer"
    }
}

export const UpdateProductErrors: {
    noSuchStoreForCustomer: BazeError,
    noSuchProductInStore: BazeError
} = {
    ...CreateProductErrors,
    noSuchProductInStore: {
        statusCode: HttpStatusCode.BadRequest,
        code: "NO_SUCH_PRODUCT_IN_STORE",
        message: "This product does not exist in this store"
    }
}

export interface ICreateProductPayload {
    store: string;
    name: string;
    price: number;
    status: ProductStatus;
    images?: Array<ICloudinaryImage>;
    quantity: number;
    description: string;
    variantConfig?: {
        quantityAndPrice: Array<IProductQuantityConfig>;
        variants: IProductVariant
    }
}

export interface ICreateProductResponse {
    product: IProduct;
}

export interface IListProductsResponse {
    products: Array<IProduct>;
}

export interface IUpdateProductPayload extends Partial<ICreateProductPayload> { }
export interface IViewOneProductPayload extends Partial<ICreateProductPayload> { }

export interface IUpdateProductResponse extends ICreateProductResponse {}
export interface IViewOneProductResponse extends ICreateProductResponse {}

export const CreateProductEndpoint: Endpoint = {
    path: '/products',
    fullPath: '/products',
    parentModule: '/products',
    method: HttpMethods.Post
}

export const ListProductsForStoreEndpoint: Endpoint = {
    path: '/products/list-for-store',
    fullPath: '/products/list-for-store',
    parentModule: '/products',
    method: HttpMethods.Get
}

export const ViewOneProductEndpoint: Endpoint = {
    path: '/products/view-one',
    fullPath: '/products/view-one',
    parentModule: '/products',
    method: HttpMethods.Get
}

export const UpdateProductEndpoint: Endpoint = {
    path: '/products',
    fullPath: '/products',
    parentModule: '/products',
    method: HttpMethods.Patch
}
