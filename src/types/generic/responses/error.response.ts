import { HttpStatusCode } from "axios";

export interface BazeError<T = unknown> {
	code?: string;
	statusCode: HttpStatusCode;
	message: string;
	recommendedActions?: Array<string>;
	description?: string;
	data?: T;
};