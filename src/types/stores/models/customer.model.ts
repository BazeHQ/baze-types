import { IBase } from "../../generic";

export interface ICustomerNote extends IBase {
    note: string;
    creator: string;
}

export enum CustomerStatus {
  engaged = 'engaged',
  dormant = 'dormant'
}

export enum CustomerSource {
  internal = 'internal',
  webstoreOrder = 'webstore-order',
  webstoreEmailSubscription = 'webstore-email-subscription'
}

export interface ICustomer extends IBase {
    store: string;
    name: string;
    phoneNumber: string;
    email: string;
    address: {
        state: string;
        address: string;
    };
    notes: Array<ICustomerNote>;
    otherContacts?: Array<string>;
    metadata?: {
      status?: CustomerStatus;
      source?: CustomerSource;
    }
}
