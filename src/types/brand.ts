import { z } from "@hono/zod-openapi";
import {
  BrandEntitySchema,
  CreateBrandOutputSchema,
  CreateBrandProfileInputSchema,
  GetBrandOutputSchema,
  GetBrandParamsSchema,
  GetBrandQuerySchema,
  ListBrandsInputSchema,
  UpdateBrandOutputSchema,
  UpdateBrandProfileInputSchema,
} from "../schemas";

export type BrandEntity = z.infer<typeof BrandEntitySchema>;

export type ListBrandsInput = z.infer<typeof ListBrandsInputSchema>;

export type CreateBrandInput = z.infer<typeof CreateBrandProfileInputSchema> 

export type UpdateBrandInput = z.infer<typeof UpdateBrandProfileInputSchema> 
export type GetBrandParams = z.infer<typeof GetBrandParamsSchema>;

export type GetBrandQuery = z.infer<typeof GetBrandQuerySchema>;

export type CreateBrandOutput = z.infer<
  typeof CreateBrandOutputSchema
>;

export type GetBrandOutput = z.infer<
  typeof GetBrandOutputSchema
>;

export type UpdateBrandOutput = z.infer<
  typeof UpdateBrandOutputSchema
>;
