export enum HttpMethods {
	Post = 'POST',
	Put = 'PUT',
	Get = 'GET',
	Patch = 'PATCH'
}

export interface Endpoint {
	path: string;
	fullPath?: string;
    parentModule?: string;
	method: HttpMethods;
}