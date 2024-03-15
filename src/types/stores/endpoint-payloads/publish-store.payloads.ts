import { BazeError, Endpoint, HttpMethods } from "../../generic";
import { HttpStatusCode } from "axios";
import { IStore, } from "../models";

export interface IPublishStorePayload {
	subdomain: string;
}

export interface IFetchStoreSubdomainSuggestionPayload {
	store: string;
}

export interface IFetchStoreSubdomainSuggestionRes {
	suggestedSubdomain: string;
}

export interface IPublishStoreRes {
	store: IStore;
}


export const PublishStoreErrors: {
	usedSubdomain: BazeError;
	storeAlreadyPublished: BazeError;
} = {
	usedSubdomain: {
		statusCode: HttpStatusCode.BadRequest,
		message: 'This subdomain is already in use by another store',
		code: 'USED_SUBDOMAIN',
		recommendedActions: [
			`Try setting another subdomain`
		]
	},
	storeAlreadyPublished: {
		statusCode: HttpStatusCode.BadRequest,
		message: `This store is already published`,
		code: 'STORE_ALREADY_PUBLISHED',
	}
};

export const PublishStoreEndpoint: Endpoint = {
    path: '/publish',
    fullPath: '/stores/publish',
    parentModule: '/stores',
    method: HttpMethods.Patch
}

export const SuggestStoreSubdomainsEndpoint: Endpoint = {
    path: '/subdomain-suggestions',
    fullPath: '/stores/subdomain-suggestions',
    parentModule: '/stores',
    method: HttpMethods.Get
}
