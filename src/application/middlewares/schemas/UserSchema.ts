import Joi from "joi";
import { User } from "@/protocols";

export const userSchema = Joi.object<User>({
  name: Joi.string().min(2).required(),
  email: Joi.string().email().required(),
  password: Joi.string().min(6).required(),
});
