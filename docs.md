# BAZE API docs version 1

## BASE URL: https://api.baze.com/v1

#### NOTE: *All italized values in the table are types or interfaces that can be found in

the [bazehq/types](https://github.com) package.*

<details>
  <summary>
    <code>MERCHANTS</code>
  </summary>

The table below lists the actions that can be taken on the merchant resources on the Baze API service.

> | Action |  Endpoint | Headers (Authorization)  | Body | Param | Query | Response | Errors|
  > |--------|-----------|----------|------|-------|-------|----------|-------|
> | Reserve Merchant Email | *ReserveEmailEndpoint* | N/A | *IReserveEmailPayload* | N/A | N/A | *IReserveEmailResponse* | *ReserveEmailErrors* |
> | Login Merchant | *LoginEndpoint* | N/A | *ILoginPayload* | N/A | N/A | *ILoginResponse* | *LoginErrors* |
> | Create Access Token From Refresh Token | *GetAccessTokenEndpoint* | Bearer {{refresh_token}} | N/A | N/A | N/A | *ILoginResponse* | *LoginErrors* |
> | Fetch A Merchant Profile | *ProfileEndpoint* | Bearer {{jwt_token}} | N/A | N/A | N/A | *IFetchProfileResponse* | *FetchProfileErrors* |
> | Request Password Reset (Forgot Password) | *ForgotPasswordEndpoint* | N/A | *IRequestPasswordResetPayload* | N/A | N/A | N/A | N/A |
> | Reset Merchant Password | *ResetPasswordEndpoint* | N/A | *IResetPasswordPayload* | N/A | N/A | N/A | *ResetPasswordErrors* |
</details>
<br/>
<details>
  <summary>
    <code>COMMUNICATIONS</code>
  </summary>

The table below lists the actions that can be taken on the communications resources on the Baze API service.

> | Action |  Endpoint | Headers (Authorization)  | Body | Param | Query | Response | Errors|
  > |--------|-----------|----------|------|-------|-------|----------|-------|
> | Verify OTP | *VerifyOtpEndpoint* | Bearer {{jwt_token}} | *IVerifyOtpPayload* | N/A | N/A | *IVerifyOtpResponse* | *OtpVerificationErrors* |
> | Resend Phone Verification OTP | *ResendOtpForPhoneVerificationEndpoint* | Bearer {{jwt_token}} | N/A | N/A | N/A | N/A | N/A |
> | Resend Password Reset OTP | *ResendOtpForPasswordResetEndpoint* | Bearer {{jwt_token}} | N/A | N/A | N/A | N/A | N/A |
</details>
<br/>
<details>
  <summary>
    <code>STORES</code>
  </summary>

The table below lists the actions that can be taken on the stores resources on the Baze API service.

> | Action                         | Endpoint                         | Headers (Authorization)  | Body                  | Param | Query          | Response                       | Errors|
  > |------------------------------|----------------------------------|----------|---------------|---------------|-------|--------------------------------|-------|
> | List Active Store Attributes   | *ListStoreAttributesEndpoint*    | N/A | N/A                | N/A                   | N/A   | *IListStoreAttributesResponse* | N/A |
> | Create Store                   | *CreateStoreEndpoint*            | Bearer {{jwt_token}}     | *ICreateStorePayload* | N/A   | N/A | *ICreateStoreResponse*         | N/A |
> | Suggest Store Subdomain        | *SuggestStoreSubdomainsEndpoint* | Bearer {{jwt_token}}     | N/A                   | N/A   | *IHasQueryPayload* | *IFetchStoreSubdomainSuggestionRes*         | N/A |
> | Publish Store                  | *PublishStoreEndpoint*           | Bearer {{jwt_token}}     | *IPublishStorePayload* | N/A   | *IHasQueryPayload* | *IPublishStoreRes*         | N/A |
> | Create Store Attributes        | N/A                              | N/A | N/A                | N/A                   | N/A   | N/A                            | N/A |
> | Edit Store Attributes          | N/A                              | N/A | N/A                | N/A                   | N/A   | N/A                            | N/A |
> | Delete Store Attributes        | N/A                              | N/A | N/A                | N/A                   | N/A   | N/A                            | N/A |
> | Fetch Store Attributes         | N/A                              | N/A | N/A                | N/A                   | N/A   | N/A                            | N/A |
> | List Store Attribute Options   | N/A                              | N/A | N/A                | N/A                   | N/A   | N/A                            | N/A |
> | Create Store Attribute Options | N/A                              | N/A | N/A                | N/A                   | N/A   | N/A                            | N/A |
> | Edit Store Attribute Options   | N/A                              | N/A | N/A                | N/A                   | N/A   | N/A                            | N/A |
> | Delete Store Attribute Options | N/A                              | N/A | N/A                | N/A                   | N/A   | N/A                            | N/A |
</details>
