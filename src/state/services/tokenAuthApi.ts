import { baseApi as api } from './baseApi';

const injectedRtkApi = api.injectEndpoints({
  endpoints: (build) => ({
    apiTokenauthAuthenticatePost: build.mutation<
      ApiTokenauthAuthenticatePostApiResponse,
      ApiTokenauthAuthenticatePostApiArg
    >({
      query: (queryArg) => ({
        url: `/api/TokenAuth/Authenticate`,
        method: 'POST',
        body: queryArg.authenticateModel,
      }),
    }),
    apiTokenauthRefreshtokenPost: build.mutation<
      ApiTokenauthRefreshtokenPostApiResponse,
      ApiTokenauthRefreshtokenPostApiArg
    >({
      query: (queryArg) => ({
        url: `/api/TokenAuth/RefreshToken`,
        method: 'POST',
        params: { refreshToken: queryArg.refreshToken },
      }),
    }),
    apiTokenauthLogoutGet: build.query<
      ApiTokenauthLogoutGetApiResponse,
      ApiTokenauthLogoutGetApiArg
    >({
      query: () => ({ url: `/api/TokenAuth/LogOut` }),
    }),
    apiTokenauthSendtwofactorauthcodePost: build.mutation<
      ApiTokenauthSendtwofactorauthcodePostApiResponse,
      ApiTokenauthSendtwofactorauthcodePostApiArg
    >({
      query: (queryArg) => ({
        url: `/api/TokenAuth/SendTwoFactorAuthCode`,
        method: 'POST',
        body: queryArg.sendTwoFactorAuthCodeModel,
      }),
    }),
    apiTokenauthImpersonatedauthenticatePost: build.mutation<
      ApiTokenauthImpersonatedauthenticatePostApiResponse,
      ApiTokenauthImpersonatedauthenticatePostApiArg
    >({
      query: (queryArg) => ({
        url: `/api/TokenAuth/ImpersonatedAuthenticate`,
        method: 'POST',
        params: { impersonationToken: queryArg.impersonationToken },
      }),
    }),
    apiTokenauthDelegatedimpersonatedauthenticatePost: build.mutation<
      ApiTokenauthDelegatedimpersonatedauthenticatePostApiResponse,
      ApiTokenauthDelegatedimpersonatedauthenticatePostApiArg
    >({
      query: (queryArg) => ({
        url: `/api/TokenAuth/DelegatedImpersonatedAuthenticate`,
        method: 'POST',
        params: {
          userDelegationId: queryArg.userDelegationId,
          impersonationToken: queryArg.impersonationToken,
        },
      }),
    }),
    apiTokenauthLinkedaccountauthenticatePost: build.mutation<
      ApiTokenauthLinkedaccountauthenticatePostApiResponse,
      ApiTokenauthLinkedaccountauthenticatePostApiArg
    >({
      query: (queryArg) => ({
        url: `/api/TokenAuth/LinkedAccountAuthenticate`,
        method: 'POST',
        params: { switchAccountToken: queryArg.switchAccountToken },
      }),
    }),
    apiTokenauthGetexternalauthenticationprovidersGet: build.query<
      ApiTokenauthGetexternalauthenticationprovidersGetApiResponse,
      ApiTokenauthGetexternalauthenticationprovidersGetApiArg
    >({
      query: () => ({
        url: `/api/TokenAuth/GetExternalAuthenticationProviders`,
      }),
    }),
    apiTokenauthExternalauthenticatePost: build.mutation<
      ApiTokenauthExternalauthenticatePostApiResponse,
      ApiTokenauthExternalauthenticatePostApiArg
    >({
      query: (queryArg) => ({
        url: `/api/TokenAuth/ExternalAuthenticate`,
        method: 'POST',
        body: queryArg.externalAuthenticateModel,
      }),
    }),
    apiTokenauthTestnotificationGet: build.query<
      ApiTokenauthTestnotificationGetApiResponse,
      ApiTokenauthTestnotificationGetApiArg
    >({
      query: (queryArg) => ({
        url: `/api/TokenAuth/TestNotification`,
        params: { message: queryArg.message, severity: queryArg.severity },
      }),
    }),
  }),
  overrideExisting: false,
});
export { injectedRtkApi as tokenAuthApi };
export type ApiTokenauthAuthenticatePostApiResponse =
  /** status 200 Success */ AuthenticateResultModel;
export type ApiTokenauthAuthenticatePostApiArg = {
  authenticateModel: AuthenticateModel;
};
export type ApiTokenauthRefreshtokenPostApiResponse =
  /** status 200 Success */ RefreshTokenResult;
export type ApiTokenauthRefreshtokenPostApiArg = {
  refreshToken?: string;
};
export type ApiTokenauthLogoutGetApiResponse = unknown;
export type ApiTokenauthLogoutGetApiArg = void;
export type ApiTokenauthSendtwofactorauthcodePostApiResponse = unknown;
export type ApiTokenauthSendtwofactorauthcodePostApiArg = {
  sendTwoFactorAuthCodeModel: SendTwoFactorAuthCodeModel;
};
export type ApiTokenauthImpersonatedauthenticatePostApiResponse =
  /** status 200 Success */ ImpersonatedAuthenticateResultModel;
export type ApiTokenauthImpersonatedauthenticatePostApiArg = {
  impersonationToken?: string;
};
export type ApiTokenauthDelegatedimpersonatedauthenticatePostApiResponse =
  /** status 200 Success */ ImpersonatedAuthenticateResultModel;
export type ApiTokenauthDelegatedimpersonatedauthenticatePostApiArg = {
  userDelegationId?: number;
  impersonationToken?: string;
};
export type ApiTokenauthLinkedaccountauthenticatePostApiResponse =
  /** status 200 Success */ SwitchedAccountAuthenticateResultModel;
export type ApiTokenauthLinkedaccountauthenticatePostApiArg = {
  switchAccountToken?: string;
};
export type ApiTokenauthGetexternalauthenticationprovidersGetApiResponse =
  /** status 200 Success */ ExternalLoginProviderInfoModel[];
export type ApiTokenauthGetexternalauthenticationprovidersGetApiArg = void;
export type ApiTokenauthExternalauthenticatePostApiResponse =
  /** status 200 Success */ ExternalAuthenticateResultModel;
export type ApiTokenauthExternalauthenticatePostApiArg = {
  externalAuthenticateModel: ExternalAuthenticateModel;
};
export type ApiTokenauthTestnotificationGetApiResponse = unknown;
export type ApiTokenauthTestnotificationGetApiArg = {
  message?: string;
  severity?: string;
};
export type AuthenticateResultModel = {
  accessToken?: string | null;
  encryptedAccessToken?: string | null;
  expireInSeconds?: number;
  shouldResetPassword?: boolean;
  passwordResetCode?: string | null;
  userId?: number;
  requiresTwoFactorVerification?: boolean;
  twoFactorAuthProviders?: string[] | null;
  twoFactorRememberClientToken?: string | null;
  returnUrl?: string | null;
  refreshToken?: string | null;
  refreshTokenExpireInSeconds?: number;
};
export type AuthenticateModel = {
  userNameOrEmailAddress: string;
  password: string;
  twoFactorVerificationCode?: string | null;
  rememberClient?: boolean;
  twoFactorRememberClientToken?: string | null;
  singleSignIn?: boolean | null;
  returnUrl?: string | null;
  captchaResponse?: string | null;
};
export type RefreshTokenResult = {
  accessToken?: string | null;
  encryptedAccessToken?: string | null;
  expireInSeconds?: number;
};
export type SendTwoFactorAuthCodeModel = {
  userId?: number;
  provider: string;
};
export type ImpersonatedAuthenticateResultModel = {
  accessToken?: string | null;
  encryptedAccessToken?: string | null;
  expireInSeconds?: number;
};
export type SwitchedAccountAuthenticateResultModel = {
  accessToken?: string | null;
  encryptedAccessToken?: string | null;
  expireInSeconds?: number;
};
export type ExternalLoginProviderInfoModel = {
  name?: string | null;
  clientId?: string | null;
  additionalParams?: {
    [key: string]: string | null;
  } | null;
};
export type ExternalAuthenticateResultModel = {
  accessToken?: string | null;
  encryptedAccessToken?: string | null;
  expireInSeconds?: number;
  waitingForActivation?: boolean;
  returnUrl?: string | null;
  refreshToken?: string | null;
  refreshTokenExpireInSeconds?: number;
};
export type ExternalAuthenticateModel = {
  authProvider: string;
  providerKey: string;
  providerAccessCode: string;
  returnUrl?: string | null;
  singleSignIn?: boolean | null;
};
export const {
  useApiTokenauthAuthenticatePostMutation,
  useApiTokenauthRefreshtokenPostMutation,
  useApiTokenauthLogoutGetQuery,
  useApiTokenauthSendtwofactorauthcodePostMutation,
  useApiTokenauthImpersonatedauthenticatePostMutation,
  useApiTokenauthDelegatedimpersonatedauthenticatePostMutation,
  useApiTokenauthLinkedaccountauthenticatePostMutation,
  useApiTokenauthGetexternalauthenticationprovidersGetQuery,
  useApiTokenauthExternalauthenticatePostMutation,
  useApiTokenauthTestnotificationGetQuery,
} = injectedRtkApi;
