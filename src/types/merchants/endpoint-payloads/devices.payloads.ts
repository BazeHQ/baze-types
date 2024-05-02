export interface RegisterDevicePayload {
    uniqueId: string;
    manufacturer: string;
    modelName?: string;
    os: string;
    pushNotificationToken?: string;
}

export interface RegisterPushNotificationTokenPayload {
    token: string;
}