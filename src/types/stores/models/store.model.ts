import {ActiveOrInactive, FeeType, IBase, ICloudinaryImage} from "../../generic";

export interface IStoreSocials {
    whatsapp?: string;
    instagram?: string;
    x?: string;
}
export interface IStoreAttribute extends IBase {
    name: string;
    slug: string;
    isMandatoryForActivation: boolean;
    isActive: boolean;
}

export interface IStoreAttributeOption extends IBase {
    attribute: string;
    slug: string;
    value: string;
    isActive: boolean;
}

export interface IStoreConfig extends IBase {
    attribute: string;
    options?: Array<string>;
    rawChoices?: Array<unknown>;
}

export interface IWebstoreConfig extends IBase {
    attribute: IStoreAttribute;
    options?: Array<IStoreAttributeOption>;
    rawChoices?: Array<unknown>;
}

export interface IStoreShippingFee extends IBase {
    name: string;
    description: string;
    status: ActiveOrInactive;
    amount: number;
}

export interface IStoreFee extends IBase {
    name: string;
    type: FeeType;
    status: ActiveOrInactive;
    amount: number;
}

export enum StoreStatus {
    live = 'live',
    maintenance = 'maintenance'
}

export interface IStore extends IBase {
    merchantId: string;
    name: string;
    isLive: boolean;
    status: StoreStatus;
    contactEmails: Array<string>;
    logo: ICloudinaryImage;
    heroBg: ICloudinaryImage;
    allowsMessaging: boolean;
    heroSectionText: string;
    contactNumbers: Array<string>;
    subdomains: [
        {
            name: string;
            isActive: boolean;
        }
    ]
    policies: Array<{
        name: string;
        content: string;
    }>;
    addresses: Array<{
        name: string;
        location: unknown;
    }>;
    config: Array<IStoreConfig>;
    shippingFees: Array<IStoreShippingFee>;
    fees: Array<IStoreFee>;
    socials: IStoreSocials;
}

export interface IWebStore extends Omit<IStore, 'config'> {
    config: Array<IWebstoreConfig>;
}