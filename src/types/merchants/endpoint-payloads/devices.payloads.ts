export interface IRegisterDevicePayload {
    uniqueId: string;
    manufacturer: string;
    modelName?: string;
    os: string;
    pushNotificationToken?: string;
}

export interface IRegisterPushNotificationTokenPayload {
    token: string;
}