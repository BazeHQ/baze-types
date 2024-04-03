import { HttpStatusCode } from "axios";
import { BazeError, Endpoint, HttpMethods } from "../../generic";
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
