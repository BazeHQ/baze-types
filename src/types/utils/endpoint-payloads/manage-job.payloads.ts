import { IJob } from "../models";

export interface IViewJobPayload {
  jobId: string;
}

export interface IJobResponse {
  job: IJob
}
