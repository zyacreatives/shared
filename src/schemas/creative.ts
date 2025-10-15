import { z } from "@hono/zod-openapi";
import { EXPERIENCE_LEVELS, ExperienceLevel } from "../constants";
import { CuidSchema, ProfileIdentifierSchema } from "./common";

export const CreativeEntitySchema = z
  .object({
    id: z.cuid2().openapi({ example: "cre_cksd0v6q0000s9a5y8z7p3x9" }),
    userId: z.cuid2().openapi({ example: "user_abc123" }),
    bio: z.string().optional().openapi({
      example: "A multi-disciplinary designer specializing in brand identity.",
    }),
    location: z.string().optional().openapi({ example: "London, UK" }),
    experienceLevel: z
      .enum(
        Object.values(EXPERIENCE_LEVELS) as [
          ExperienceLevel,
          ...ExperienceLevel[]
        ]
      )
      .optional()
      .openapi({ example: "YEAR_0_1" }),
    tags: z
      .array(z.string())
      .optional()
      .openapi({ example: ["branding", "typography", "UX"] }),
    disciplines: z
      .array(z.string())
      .optional()
      .openapi({ example: ["Design", "Art Direction"] }),
    createdAt: z.coerce
      .date()
      .optional()
      .openapi({ example: "2025-10-13T09:00:00.000Z" }),
    updatedAt: z.coerce.date().openapi({ example: "2025-10-13T09:00:00.000Z" }),
  })
  .openapi("CreativeEntitySchema");

export const ListCreativesInputSchema = z
  .object({
    query: z.string().optional().openapi({ example: "logo designer" }),
    disciplines: z
      .array(z.string())
      .optional()
      .openapi({ example: ["branding", "web design"] }),
    experienceLevels: z
      .array(
        z.enum(
          Object.values(EXPERIENCE_LEVELS) as [
            ExperienceLevel,
            ...ExperienceLevel[]
          ]
        )
      )
      .optional()
      .openapi({ example: ["SENIOR", "EXPERT"] }),
    location: z.string().optional().openapi({ example: "Los Angeles" }),
    tags: z
      .array(z.string())
      .optional()
      .openapi({ example: ["Figma", "AI"] }),
    page: z.number().int().min(1).default(1).optional().openapi({ example: 1 }),
    perPage: z
      .number()
      .int()
      .min(1)
      .max(100)
      .default(20)
      .optional()
      .openapi({ example: 20 }),
  })
  .openapi("ListCreativesInput");

export const CreateCreativeProfileInputSchema = z
  .object({
    experienceLevel: z
      .enum(EXPERIENCE_LEVELS)
      .default(EXPERIENCE_LEVELS.YEAR_0_1)
      .openapi({ example: EXPERIENCE_LEVELS.YEAR_1_3 }),
    bio: z
      .string()
      .max(210)
      .optional()
      .openapi({ example: "I am a freelance UI/UX designer." }),
    location: z
      .string()
      .max(100)
      .optional()
      .openapi({ example: "Lagos, Nigeria" }),
    disciplineSlugs: z
      .array(z.string())
      .min(1, "At least one discipline is required")
      .default([])
      .openapi({ example: ["ui-ux", "frontend"] }),
  })
  .openapi({
    title: "create creative profile",
  });

export const UpdateCreativeProfileInputSchema = z
  .object({
    experienceLevel: z
      .enum(EXPERIENCE_LEVELS)
      .optional()
      .openapi({ example: EXPERIENCE_LEVELS.YEAR_3_5 }),
    tags: z
      .array(z.string())
      .optional()
      .openapi({ example: ["react", "design", "product"] }),
    bio: z
      .string()
      .max(210)
      .optional()
      .openapi({ example: "I am a freelance UI/UX designer." }),
    location: z
      .string()
      .max(100)
      .optional()
      .openapi({ example: "Lagos, Nigeria" }),
    disciplineSlugs: z
      .array(z.string())
      .min(1, "At least one discipline is required")
      .optional()
      .openapi({ example: ["frontend", "ui-ux"] }),
  })
  .openapi({
    title: "update creative profile",
  });

export const GetCreativeParamsSchema = z.object({
  value: CuidSchema,
});

export const GetCreativeQuerySchema = ProfileIdentifierSchema;

export const CreateCreativeOutputSchema = CreativeEntitySchema;

export const GetCreativeOutputSchema = CreativeEntitySchema;

export const UpdateCreativeOutputSchema = CreativeEntitySchema;
