import { Endpoint, HttpMethods } from "../../generic";
import { ICreateStorePayload } from "./create-store.payloads";

export interface IUpdateStorePayload extends Partial<ICreateStorePayload> {
  id: string;
}

export const UpdateStoreEndpoint: Endpoint = {
  path: '/stores',
  fullPath: '/stores',
  parentModule: '/stores',
  method: HttpMethods.Patch
}
