import { HttpStatusCode } from "axios";
import { BazeError, Endpoint, HttpMethods } from "../../generic";
import { IMerchant } from "../models";
import { IStore } from "../../stores";

export interface IFetchProfileResponse {
  merchant: IMerchant,
	stores: Array<IStore>
}

export interface IChangePasswordPayload {
    password: string;
    confirmPassword: string;
}

export interface IUpdateProfilePayload {
	fullName?: string;
	phoneNumber?: string;
}

export const FetchProfileErrors: {
    invalidMerchant: BazeError
} = {
	invalidMerchant: {
		statusCode: HttpStatusCode.BadRequest,
		code: 'INVALID_MERCHANT',
		data: null,
		message: `Invalid merchant requested`,
		recommendedActions: [
			`Contact support`
		]
	}
};

export const ProfileEndpoint: Endpoint = {
	path: '/profile',
	fullPath: '/merchants/profile',
	parentModule: '/merchants',
	method: HttpMethods.Patch
};