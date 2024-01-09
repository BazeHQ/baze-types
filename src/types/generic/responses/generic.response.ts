
import { BazeError } from "./error.response";

export interface ApiResponse<T> {
	code: number;
	error?: BazeError;
	message: string;
	data: T
}