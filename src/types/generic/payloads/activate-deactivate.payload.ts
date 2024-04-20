export enum ActivateOrDeactivate {
    activate = 'activate',
    deactivate = 'deactivate'
}

export interface IActivateOrDeactivatePayload {
    action: ActivateOrDeactivate
}