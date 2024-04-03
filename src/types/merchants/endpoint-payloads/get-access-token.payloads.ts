import { Endpoint, HttpMethods } from "../../generic";

export const GetAccessTokenEndpoint: Endpoint = {
	path: '/auth/token',
	fullPath: '/merchants/auth/token',
	parentModule: '/merchants',
	method: HttpMethods.Get
};