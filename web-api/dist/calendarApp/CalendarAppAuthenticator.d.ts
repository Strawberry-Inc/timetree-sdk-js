import { AxiosInstance } from "axios";
export declare type CalendarAppAuthenticatorOptions = {
    readonly applicationId: string;
    readonly privateKey: string;
    readonly accessTokenLifetimeInSec?: number;
    /** you can overwrite for testing purposes */
    readonly baseURL?: string;
    readonly timeout?: number;
};
export declare type AccessToken = {
    readonly accessToken: string;
    readonly expireAt: number;
    readonly tokenType: "Bearer";
};
export declare class CalendarAppAuthenticator {
    readonly api: AxiosInstance;
    private readonly options;
    constructor(options: CalendarAppAuthenticatorOptions);
    getAccessToken(installationId: string): Promise<AccessToken>;
    private generateToken;
}
