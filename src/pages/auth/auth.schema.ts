import { userSchema } from "@/pages/users/user.schema";

export const loginSchema = userSchema.omit(["firstName", "lastName"]);
export const registerSchema = userSchema;
