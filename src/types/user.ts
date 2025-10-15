// user.types.ts
import {
  UserSocialGraphEntitySchema,
  BaseUserEntitySchema,
  MinimalUserSchema,
  UserEntitySchema,
  UserProfileEntitySchema,
  UserWithProjectsEntitySchema,
  UserWithProjectBookmarksEntitySchema,
  GetUserFollowingInputSchema,
  GetUserFollowersInputSchema,
  UserWithFollowingEntitySchema,
  UserWithFollowersEntitySchema,
  GetUserFollowingOutputSchema,
  GetUserFollowersOutputSchema,
  GetAuthenticatedUserOutputSchema,
  GetAuthenticatedUserProfileOutputSchema,
  GetAuthenticatedUserWithProjectsOutputSchema,
  GetAuthenticatedUserWithProjectBookmarksOutputSchema,
  GetAuthenticatedUserWithUserFollowingOutputSchema,
  GetAuthenticatedUserWithUserFollowersOutputSchema,
} from "../schemas/user";

import { z } from "@hono/zod-openapi";

export type BaseUserEntity = z.infer<typeof BaseUserEntitySchema>;
export type MinimalUser = z.infer<typeof MinimalUserSchema>;
export type UserEntity = z.infer<typeof UserEntitySchema>;
export type UserProfileEntity = z.infer<typeof UserProfileEntitySchema>;
export type UserWithProjectsEntity = z.infer<
  typeof UserWithProjectsEntitySchema
>;
export type UserWithProjectBookmarksEntity = z.infer<
  typeof UserWithProjectBookmarksEntitySchema
>;
export type GetUserFollowingInput = z.infer<typeof GetUserFollowingInputSchema>;
export type GetUserFollowersInput = z.infer<typeof GetUserFollowersInputSchema>;
export type UserWithFollowingEntity = z.infer<
  typeof UserWithFollowingEntitySchema
>;
export type UserWithFollowersEntity = z.infer<
  typeof UserWithFollowersEntitySchema
>;
export type GetUserFollowingOutput = z.infer<
  typeof GetUserFollowingOutputSchema
>;
export type GetUserFollowersOutput = z.infer<
  typeof GetUserFollowersOutputSchema
>;
export type GetAuthenticatedUserOutput = z.infer<
  typeof GetAuthenticatedUserOutputSchema
>;
export type GetAuthenticatedUserProfileOutput = z.infer<
  typeof GetAuthenticatedUserProfileOutputSchema
>;
export type GetAuthenticatedUserWithProjectsOutput = z.infer<
  typeof GetAuthenticatedUserWithProjectsOutputSchema
>;
export type GetAuthenticatedUserWithProjectBookmarksOutput = z.infer<
  typeof GetAuthenticatedUserWithProjectBookmarksOutputSchema
>;
export type GetAuthenticatedUserWithUserFollowingOutput = z.infer<
  typeof GetAuthenticatedUserWithUserFollowingOutputSchema
>;
export type GetAuthenticatedUserWithUserFollowersOutput = z.infer<
  typeof GetAuthenticatedUserWithUserFollowersOutputSchema
>;
