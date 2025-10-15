import { z } from "@hono/zod-openapi";

export const DisciplineEntitySchema = z
  .object({
    slug: z.string().openapi({ example: "digital-art" }),
    name: z.string().openapi({ example: "Digital Art" }),
    tags: z
      .array(z.string().openapi({ example: "illustration" }))
      .optional()
      .openapi({
        example: ["illustration", "concept-art"],
      }),
  })
  .openapi({ title: "DisciplineEntity" });

export const DisciplineUpdateOutputEntitySchema = z
  .object({
    slug: z.string().openapi({ example: "digital-art" }),
  })
  .openapi({ title: "DisciplineUpdateOutputEntity" });

export const CreateDisciplinesInputSchema = z
  .object({
    disciplines: z
      .array(
        z.object({
          name: z.string().max(128).openapi({
            example: "Mathematics",
          }),
          tags: z
            .array(
              z.string().openapi({
                example: "algebra",
              })
            )
            .default([])
            .openapi({
              example: ["algebra", "geometry"],
            }),
        })
      )
      .openapi({
        description: "Array of disciplines to upsert.",
        example: [
          {
            name: "Mathematics",
            tags: ["algebra", "geometry"],
          },
          {
            name: "Physics",
            tags: ["mechanics", "optics"],
          },
        ],
      }),
  })
  .openapi({
    description: "Schema for upserting multiple disciplines.",
  });

export const SlugSchema = z.object({
  slug: z.string().max(128).openapi({
    example: "mathematics",
  }),
});

export const GetDisciplinesQuerySchema = z
  .object({
    withTags: z
      .union([z.literal("true"), z.literal("false")])
      .optional()
      .default("false")
      .openapi({
        description: "Whether to include tags in the response.",
        example: "true",
      }),
    getDefault: z
      .union([z.literal("true"), z.literal("false")])
      .optional()
      .default("false")
      .openapi({
        description:
          "Fetch the default list of disciplines (non user-added disciplines)",
      }),
    slugs: z.string().optional().openapi({
      description: "Comma-separated list of discipline slugs to filter by.",
      example: "mathematics,physics",
    }),
  })
  .openapi({
    description: "Query parameters for fetching multiple disciplines.",
  });


export const CreateDisciplinesOutputSchema = z.object({
  disciplines: z.array(z.string()),
});

export const GetDisciplinesOutputSchema = z.object({
  disciplines: z.array(DisciplineEntitySchema),
});

