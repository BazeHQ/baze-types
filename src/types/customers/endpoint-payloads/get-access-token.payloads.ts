import { Endpoint, HttpMethods } from "../../generic";

export const GetAccessTokenEndpoint: Endpoint = {
    path: '/auth/token',
    fullPath: '/customers/auth/token',
    parentModule: '/customers',
    method: HttpMethods.Get
}