import { HttpStatusCode } from "axios";
import { BazeError, Endpoint, FeeType, HttpMethods } from "../../generic";
import { CreateStoreErrors } from "./create-store.payloads";

export const UpdateStoreErrors: {
  noSuchStore: BazeError;
  noSuchAttribute: BazeError;
  attributeHasNoSuchOption: ( attrName: string ) => BazeError;
} = {
	noSuchStore: {
		statusCode: HttpStatusCode.BadRequest,
		code: "NO_SUCH_STORE",
		message: `This store does not exist`
	},
	noSuchAttribute: CreateStoreErrors.noSuchAttribute,
	attributeHasNoSuchOption: CreateStoreErrors.attributeHasNoSuchOption
};

export const UpdateStoreEndpoint: Endpoint = {
	path: '/stores',
	fullPath: '/stores',
	parentModule: '/stores',
	method: HttpMethods.Patch
};

export interface ICreateShippingFeePayload {
	name: string;
	amount: number;
	description: string;
}

export interface ICreateStoreFeePayload {
	name: string;
	type: FeeType;
	amount: number;
}
