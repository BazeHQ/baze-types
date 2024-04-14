export interface IBank {
    code: string;
    name: string;
    slug: string;
}

export interface IResolvedBankAccountResponse {
    canBeUsed: boolean;
    nameOnAccount: string;
}

export interface IResolveBankAccountPayload {
    bankCode: string;
    accountNumber: string;
}

export interface IValidateMerchantDto extends IResolveBankAccountPayload {
    bvn: string;
}