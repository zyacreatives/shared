import z from "zod";
import {
  ProjectSocialGraphEntitySchema,
  UserSocialGraphEntitySchema,
} from "../schemas";

export type ProjectSocialGraphEntity = z.infer<
  typeof ProjectSocialGraphEntitySchema
>;
export type UserSocialGraphEntity = z.infer<typeof UserSocialGraphEntitySchema>;
