import axios, {
  AxiosError,
  AxiosInstance,
  AxiosRequestConfig,
  AxiosResponse,
} from "axios";

import { ACCESS_TOKEN_KEY, REFRESH_TOKEN_KEY } from "@/constants/auth";
import { API_BASE_URL } from "@/constants/env-vars";
import { Storage } from "@/utilities/storage";
import { LoginResponsePayload } from "../pages/auth/auth.interface";

export class Client {
  private axiosClient: AxiosInstance;
  private readonly storageClass = new Storage();

  constructor() {
    this.axiosClient = this.createAxiosClient();
  }

  private createAxiosClient() {
    const apiClient = axios.create({
      baseURL: API_BASE_URL,
      headers: { "Content-Type": "application/json" },
    });

    // if request status is 401, add token to header
    apiClient.interceptors.request.use((config) => {
      config.headers.Authorization = `Bearer ${this.storageClass.getItem(
        ACCESS_TOKEN_KEY
      )}`;

      return config;
    });

    // if reponse status is 401, call referesh token api and retry
    apiClient.interceptors.response.use(
      (response) => response,
      async (error: AxiosError<Error>) => {
        if (error.config && error?.response?.status === 401) {
          const data = await this.refreshToken();

          this.storageClass.setItem(ACCESS_TOKEN_KEY, data.accessToken);
          this.storageClass.setItem(REFRESH_TOKEN_KEY, data.refreshToken);

          this.axiosClient.defaults.headers.common[
            "Authorization"
          ] = `Bearer ${data.accessToken}`;

          return this.axiosClient(error.config);
          // this.redirectToLogin();
        }
        return Promise.reject(error);
      }
    );

    return apiClient;
  }

  private async refreshToken() {
    const refreshToken = this.storageClass.getItem(REFRESH_TOKEN_KEY) as string;

    const { data } = await this.post<
      { refreshToken: string },
      LoginResponsePayload
    >("/auth/token/refresh/", { refreshToken });

    return data;
  }

  // private async redirectToLogin() {
  //   window.location.href = "/login";
  //   this.storageClass.deleteItem(ACCESS_TOKEN_KEY);
  //   this.storageClass.deleteItem(REFRESH_TOKEN_KEY);
  // }

  custom(config: AxiosRequestConfig) {
    return this.axiosClient(config);
  }

  get<R = unknown>(
    url: string,
    config?: AxiosRequestConfig
  ): Promise<AxiosResponse<R, R>> {
    return this.custom({ method: "get", url, ...config });
  }

  post<T, R = unknown>(
    url: string,
    data?: T,
    config?: AxiosRequestConfig
  ): Promise<AxiosResponse<R, R>> {
    return this.custom({ method: "post", url, data, ...config });
  }

  put<T, R = unknown>(
    url: string,
    data?: T,
    config?: AxiosRequestConfig
  ): Promise<AxiosResponse<R, R>> {
    return this.custom({ method: "put", url, data, ...config });
  }

  patch<T, R = unknown>(
    url: string,
    data?: T,
    config?: AxiosRequestConfig
  ): Promise<AxiosResponse<R, R>> {
    return this.custom({ method: "patch", url, data, ...config });
  }

  delete<R = unknown>(
    url: string,
    config?: AxiosRequestConfig
  ): Promise<AxiosResponse<R, R>> {
    return this.custom({ method: "delete", url, ...config });
  }
}
