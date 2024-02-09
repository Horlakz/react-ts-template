import { Client } from "@/services/api-client";
import {
  LoginRequestPayload,
  LoginResponsePayload,
  RegistrationRequestPayload,
  RegistrationResponsePayload,
  SocialAuthRequestPayload,
  SocialAuthResponsePayload,
} from "./auth.interface";

export class AuthService {
  private apiClient = new Client();

  login(data: LoginRequestPayload) {
    return this.apiClient.post<LoginRequestPayload, LoginResponsePayload>(
      "auth/login",
      data
    );
  }

  register(data: RegistrationRequestPayload) {
    return this.apiClient.post<
      RegistrationRequestPayload,
      RegistrationResponsePayload
    >("auth/register", data);
  }

  socialAuth(data: SocialAuthRequestPayload) {
    return this.apiClient.post<
      SocialAuthRequestPayload,
      SocialAuthResponsePayload
    >("auth/social-connection", data);
  }
}
