import {IBase, ICloudinaryImage} from "../../generic";

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

export interface IStore extends IBase {
    merchantId: string;
    name: string;
    isLive: boolean;
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
}