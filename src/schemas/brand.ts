import { z } from "@hono/zod-openapi";
import { CuidSchema, ProfileIdentifierSchema } from "./common";
import { EXPERIENCE_LEVELS, ExperienceLevel } from "../constants";

export const BrandEntitySchema = z
  .object({
    id: z.cuid2().openapi({ example: "brd_cksd0v6q0000s9a5y8z7p3x9" }),
    userId: z.cuid2().openapi({ example: "user_owner_123" }),
    brandName: z.string().openapi({ example: "TechInnovate Inc." }),
    bio: z
      .string()
      .optional()
      .openapi({ example: "Leading software development firm focused on AI." }),
    tags: z
      .array(z.string())
      .optional()
      .openapi({ example: ["technology", "saas", "startup"] }),
    disciplines: z
      .array(z.string())
      .openapi({ example: ["Marketing", "Product Development"] }),
    createdAt: z.coerce
      .date()
      .optional()
      .openapi({ example: "2025-10-13T09:00:00.000Z" }),
    updatedAt: z.coerce
      .date()
      .optional()
      .openapi({ example: "2025-10-13T09:00:00.000Z" }),
  })
  .openapi("BrandEntity");

export const ListBrandsInputSchema = z
  .object({
    query: z.string().optional().openapi({ example: "AI software brand" }),
    disciplines: z
      .array(z.string())
      .optional()
      .openapi({ example: ["design", "marketing"] }),
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
      .openapi({
        description:
          "Filter based on the required experience level of partners.",
      }),
    location: z.string().optional().openapi({ example: "San Francisco" }),
    tags: z
      .array(z.string())
      .optional()
      .openapi({ example: ["fintech", "remote"] }),
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
  .openapi("ListBrandsInput");

export const CreateBrandProfileInputSchema = z
  .object({
    brandName: z
      .string()
      .min(1, "Brand name is required")
      .openapi({ example: "Acme Creative Studio" }),
    bio: z.string().max(210).optional().default("").openapi({
      example: "We help brands tell their stories through design.",
    }),
    tags: z
      .array(z.string())
      .optional()
      .default([])
      .openapi({ example: ["branding", "ux", "campaigns"] }),
    disciplineSlugs: z
      .array(z.string())
      .min(1, "At least one discipline is required")
      .default([])
      .openapi({ example: ["ui-ux", "frontend"] }),
  })
  .openapi({
    title: "create brand profile",
  });

export const UpdateBrandProfileInputSchema = z
  .object({
    brandName: z.string().min(1).optional().openapi({ example: "Acme Studio" }),
    bio: z.string().max(210).optional().openapi({
      example: "Updated bio for our creative agency.",
    }),
    tags: z
      .array(z.string())
      .optional()
      .openapi({ example: ["branding", "product", "illustration"] }),
  })
  .openapi({
    title: "update brand profile",
  });

export const GetBrandParamsSchema = z.object({
  value: CuidSchema,
});

export const GetBrandQuerySchema = ProfileIdentifierSchema;

export const CreateBrandOutputSchema = BrandEntitySchema;

export const GetBrandOutputSchema = BrandEntitySchema;

export const UpdateBrandOutputSchema = BrandEntitySchema;
