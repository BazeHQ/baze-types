import {IStore, IStoreConfig} from "../models";
import {BazeError, Endpoint, HttpMethods} from "../../generic";
import {HttpStatusCode} from "axios";

export type IRawStoreConfig = Omit<IStoreConfig, "createdAt" | "_id" | "updatedAt" | "_deletedAt">

export interface ICreateStorePayload {
    name: string;
    email: string;
    contactNumber: string;
    logo: string;
    heroBg: string;
    allowsMessaging: string;
    heroSectionText: string;
    shippingAndRefundPolicy: string;
    address: string;
    config: Array<IRawStoreConfig>;
}

export interface ICreateStoreResponse {
    store: IStore;
}

export const CreateStoreErrors: {
    noSuchAttribute: BazeError;
    attributeHasNoSuchOption: ( attrName: string ) => BazeError;
} = {
    noSuchAttribute: {
        statusCode: HttpStatusCode.BadRequest,
        code: "NO_SUCH_ATTRIBUTE",
        message: `This attribute does not exist`
    },
    attributeHasNoSuchOption: ( attrName: string ) => {
        return {
            statusCode: HttpStatusCode.BadRequest,
            code: "ATTRIBUTE_HAS_NO_SUCH_OPTION",
            message: `Attribute ${ attrName } does not accommodate some options provided for it`
        };
    }
};

export const CreateStoreEndpoint: Endpoint = {
    path: '/stores',
    fullPath: '/stores',
    parentModule: '/stores',
    method: HttpMethods.Post
}