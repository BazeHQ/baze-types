export enum HttpMethods {
	Post = 'POST',
	Put = 'PUT',
	Get = 'GET',
	Patch = 'PATCH',
	Delete = 'DELETE'
}

export interface Endpoint {
	path: string;
	fullPath?: string;
    parentModule?: string;
	method: HttpMethods;
}