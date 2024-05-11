import { InferType } from "yup";

import { userSchema } from "./user.schema";
import { AxiosResponse } from "axios";

export interface UserData extends InferType<typeof userSchema> {}

export interface UserResponsePayload {
  id: string;
  createdAt: string;
  updatedAt: string;
  firstName: string;
  lastName: string;
  email: string;
  roles: string[];
}

export interface UserResponse
  extends AxiosResponse<UserResponsePayload, UserResponsePayload> {}
