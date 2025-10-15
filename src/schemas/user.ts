import { z } from "@hono/zod-openapi";

import { ROLES, USER_STATUSES, ONBOARDING_PAGES } from "../constants";
import type { Role, UserStatus, OnboardingPage } from "../constants";
import { ProjectBookmarkEntitySchema, ProjectEntitySchema } from "./project";

export const UserSocialGraphEntitySchema = z
  .object({
    followerCount: z
      .number()
      .int()
      .nonnegative()
      .optional()
      .openapi({ example: 120 }),
    followingCount: z
      .number()
      .int()
      .nonnegative()
      .optional()
      .openapi({ example: 45 }),
  })
  .openapi("UserSocialGraphEntity");

export const BaseUserEntitySchema = z
  .object({
    id: z.cuid2().openapi({ example: "cksd0v6q0000s9a5y8z7p3x9" }),
    email: z.string().email().openapi({ example: "user@example.com" }),
    emailVerified: z.boolean().openapi({ example: true }),
    name: z.string().optional().openapi({ example: "John Doe" }),
    image: z
      .string()
      .optional()
      .openapi({ example: "https://example.com/avatar.png" }),
    username: z.string().optional().openapi({ example: "johndoe" }),
    displayUsername: z.string().optional().openapi({ example: "@johndoe" }),
    role: z.enum(Object.values(ROLES) as [Role, ...Role[]]).openapi({
      example: "CREATIVE",
    }),
    status: z
      .enum(Object.values(USER_STATUSES) as [UserStatus, ...UserStatus[]])
      .openapi({
        example: "ACTIVE",
      }),
    onboardingPage: z
      .enum(
        Object.values(ONBOARDING_PAGES) as [OnboardingPage, ...OnboardingPage[]]
      )
      .openapi({
        example: "DONE",
      }),
    createdAt: z.coerce.date().openapi({ example: "2025-10-13T09:00:00.000Z" }),
    updatedAt: z.coerce.date().openapi({ example: "2025-10-13T09:00:00.000Z" }),
  })
  .openapi("BaseUserEntity");

export const MinimalUserSchema = BaseUserEntitySchema.pick({
  id: true,
  name: true,
  email: true,
  image: true,
  username: true,
  role: true,
}).openapi("MinimalUser");

export const UserEntitySchema = BaseUserEntitySchema.extend(
  UserSocialGraphEntitySchema.shape
).openapi("UserEntity");

export const UserProfileEntitySchema = UserEntitySchema.extend({
  profileType: z.enum(["creative", "brand", "investor"]).optional(),
  bio: z.string().optional(),
  location: z.string().optional(),
  experienceLevel: z.string().optional(),
  disciplines: z.array(z.any()).optional(),
  tags: z.array(z.any()).optional(),
  brandName: z.string().optional(),
  websiteURL: z.string().url().optional(),
  investorType: z.string().optional(),
  investmentSize: z.string().optional(),
  geographicFocus: z.string().optional(),
}).openapi("UserProfileEntity");

export const UserWithProjectsEntitySchema = z
  .object({
    userId: z.cuid2(),
    projects: z.array(ProjectEntitySchema.omit({ overview: true })),
  })
  .openapi("UserWithProjectsEntity");

export const UserWithProjectBookmarksEntitySchema = z
  .object({
    userId: z.cuid2(),
    projectBookmarks: z.array(
      ProjectBookmarkEntitySchema.extend({
        project: ProjectEntitySchema.pick({
          id: true,
          title: true,
          description: true,
          tags: true,
          startDate: true,
          endDate: true,
          imagePlaceholderUrl: true,
        }),
      })
    ),
  })
  .openapi("UserWithProjectBookmarksEntity");
  
export const GetUserFollowingInputSchema = z.object({
  searchQuery: z.string().optional().openapi({ example: "design systems" }),
  offset: z.number().int().nonnegative().optional().openapi({ example: 20 }),
});

export const GetUserFollowersInputSchema = z.object({
  searchQuery: z.string().optional().openapi({ example: "design systems" }),
  offset: z.number().int().nonnegative().optional().openapi({ example: 20 }),
});
export const UserWithFollowingEntitySchema = MinimalUserSchema.extend({
  following: z
    .array(MinimalUserSchema)
    .openapi({ description: "List of users this user is following." }),
}).openapi("UserWithFollowingEntity");

export const UserWithFollowersEntitySchema = MinimalUserSchema.extend({
  followers: z
    .array(MinimalUserSchema)
    .openapi({ description: "List of users who follow this user." }),
}).openapi("UserWithFollowersEntity");

export const GetUserFollowingOutputSchema = z.object({
  results: UserWithFollowingEntitySchema,
});

export const GetUserFollowersOutputSchema = z.object({
  results: UserWithFollowersEntitySchema,
});



export const GetAuthenticatedUserOutputSchema = UserEntitySchema;

export const GetAuthenticatedUserProfileOutputSchema = UserProfileEntitySchema;

export const GetAuthenticatedUserWithProjectsOutputSchema =
  UserWithProjectsEntitySchema;

export const GetAuthenticatedUserWithProjectBookmarksOutputSchema =
  UserWithProjectBookmarksEntitySchema;

export const GetAuthenticatedUserWithUserFollowingOutputSchema =
  UserWithFollowingEntitySchema;

export const GetAuthenticatedUserWithUserFollowersOutputSchema =
  UserWithFollowersEntitySchema;
