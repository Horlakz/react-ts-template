import { InferType } from "yup";

import { MessageResponse } from "@/interface";
import { loginSchema, registerSchema } from "./auth.schema";

export interface LoginRequestPayload extends InferType<typeof loginSchema> {}

export interface LoginResponsePayload {
  accessToken: string;
  refreshToken: string;
}

export interface RegistrationRequestPayload
  extends InferType<typeof registerSchema> {}

export type RegistrationResponsePayload = MessageResponse;
