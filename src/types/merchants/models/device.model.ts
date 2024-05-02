import { ActiveOrInactive, IBase } from "../../generic";

export interface IMerchantDevice extends IBase {
    uniqueId: string;
    manufacturer: string;
    modelName?: string;
    os: string;
    pushNotificationToken?: string;
    pushNotificationStatus: ActiveOrInactive;
    merchant?: string;
}