import {BazeError, Endpoint, HttpMethods} from "../../generic";
import {HttpStatusCode} from "axios";
import { IStore, IStoreConfig } from "../models";

export type IRawStoreConfig = Omit<IStoreConfig, "createdAt" | "_id" | "updatedAt" | "_deletedAt">

export interface ICreateStorePayload {
    name: string;
    email: string;
    contactNumber: string;
    logo: string;
    heroBg: string;
    allowsMessaging: boolean;
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
    requiredAttributeNotProvided: BazeError;
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
    },
    requiredAttributeNotProvided: {
        statusCode: HttpStatusCode.BadRequest,
        code: "REQUIRED_ATTRIBUTE_NOT_PROVIDED",
        message: 'Required attribute(s) not provided',
        recommendedActions: [
            'Please provide all required attributes'
        ]
    }
};

export const CreateStoreEndpoint: Endpoint = {
    path: '/stores',
    fullPath: '/stores',
    parentModule: '/stores',
    method: HttpMethods.Post
}