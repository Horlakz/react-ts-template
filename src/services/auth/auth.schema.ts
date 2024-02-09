import { userSchema } from "@/services/user/user.schema";

export const loginSchema = userSchema.omit(["firstName", "lastName"]);
export const registerSchema = userSchema;
