import Joi from "joi";
import { User } from "@/protocols";

export const userSchema = Joi.object<User>({
  name: Joi.string().required(),
  email: Joi.string().email().required(),
  password: Joi.string().min(6).required(),
  confirmPassword: Joi.string().valid(Joi.ref("password")).required(),
});
