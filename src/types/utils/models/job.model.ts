import {IBase} from "../../generic";

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

export enum JobClientType {
  merchant = 'merchant',
  customer = 'customer',
  store = 'store',
  admin = 'admin',
  system = 'system'
}

export interface IJob<T = unknown> extends IBase {
  status: JobStatus;
  client: {
    type: JobClientType;
    id?: string;
  }
  reports: Array<string>;
  description: string;
  type: JobType;
  metadata: T;
}
