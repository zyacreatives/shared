import { z } from "@hono/zod-openapi";
import {
  CreateCreativeOutputSchema,
  CreateCreativeProfileInputSchema,
  CreativeEntitySchema,
  GetCreativeOutputSchema,
  GetCreativeParamsSchema,
  GetCreativeQuerySchema,
  ListCreativesInputSchema,
  UpdateCreativeOutputSchema,
  UpdateCreativeProfileInputSchema,
} from "../schemas";

export type CreativeEntity = z.infer<typeof CreativeEntitySchema>;

export type ListCreativesInput = z.infer<typeof ListCreativesInputSchema>;

export type CreateCreativeInput = z.infer<
  typeof CreateCreativeProfileInputSchema
>;
export type UpdateCreativeInput = z.infer<
  typeof UpdateCreativeProfileInputSchema
>;

export type GetCreativeParams = z.infer<typeof GetCreativeParamsSchema>;

export type GetCreativeQuery = z.infer<typeof GetCreativeQuerySchema>;

export type CreateCreativeOutput = z.infer<typeof CreateCreativeOutputSchema>;

export type GetCreativeOutput = z.infer<typeof GetCreativeOutputSchema>;

export type UpdateCreativeOutput = z.infer<typeof UpdateCreativeOutputSchema>;
