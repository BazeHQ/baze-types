export interface ILoginPayload {
    email: string;
    passPhrase: string;
}

export interface ILoginResponse {
    token: string;
    refreshToken: string;
}