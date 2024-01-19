import { HttpStatusCode } from "axios";
import { BazeError, Endpoint, HttpMethods } from "../../generic";
import { ICustomer } from "../models";

export interface IFetchProfileResponse {
    customer: ICustomer
}

export const FetchProfileErrors: {
    invalidCustomer: BazeError
} = {
	invalidCustomer: {
		statusCode: HttpStatusCode.BadRequest,
        code: 'INVALID_CUSTOMER',
		data: null,
		message: `Invalid customer requested`,
		recommendedActions: [
			`Contact support`
		]
	}
};

export const ProfileEndpoint: Endpoint = {
    path: '/profile',
    fullPath: '/customers/profile',
    parentModule: '/customers',
    method: HttpMethods.Patch
}