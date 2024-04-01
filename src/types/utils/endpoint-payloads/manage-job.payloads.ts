import { IBase } from "../../generic";

export enum JobStatus {
    initiated = 'initiated',
    pending = 'pending',
    completed = 'completed',
    failed = 'failed'
}

export enum JobType {
    bulkCustomerUpload = 'bulk-customer-upload',
    bulkProductUpload = 'bulk-product-upload'
}

export interface IJobResponse<T = unknown> extends IBase {
    status: JobStatus;
    reports: Array<string>;
    description: string;
    type: JobType;
    metadata: T;
}
