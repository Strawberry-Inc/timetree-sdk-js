import { AxiosRequestConfig, AxiosResponse, AxiosError } from "axios";
export declare type RetryOptions = {
    readonly retry?: number;
    readonly validateRetryable?: (e: AxiosError) => boolean;
    readonly onRetry?: (e: Error, count: number) => void;
};
export declare class APIClient {
    private readonly api;
    private readonly retryOptions;
    constructor(options: AxiosRequestConfig, { retry, validateRetryable, onRetry }?: RetryOptions);
    get<Response>(url: string, options?: AxiosRequestConfig): Promise<Response>;
    post<Response>(url: string, json: object, options?: AxiosRequestConfig): Promise<Response>;
    put<Response>(url: string, json: object, options?: AxiosRequestConfig): Promise<Response>;
    delete(url: string, options?: AxiosRequestConfig): Promise<AxiosResponse<object>>;
    private wrapRequest;
}
