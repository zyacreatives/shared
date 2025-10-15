import { z } from "@hono/zod-openapi";
import {
  CreateDisciplinesInputSchema,
  CreateDisciplinesOutputSchema,
  DisciplineEntitySchema,
  DisciplineUpdateOutputEntitySchema,
  GetDisciplinesQuerySchema,
  GetDisciplinesOutputSchema,
  SlugSchema,
} from "../schemas/discipline";

export type DisciplineEntity = z.infer<typeof DisciplineEntitySchema>;

export type DisciplineUpdateOutputEntity = z.infer<
  typeof DisciplineUpdateOutputEntitySchema
>;

export type CreateDisciplinesInput = z.infer<
  typeof CreateDisciplinesInputSchema
>;

export type SlugInput = z.infer<typeof SlugSchema>;

export type GetMultipleDisciplinesQuery = z.infer<
  typeof GetDisciplinesQuerySchema
>;

export type DeleteDisciplineInput = SlugInput;

export type DeleteDisciplineOutput = SlugInput;

export type CreateDisciplinesOutput = z.infer<
  typeof CreateDisciplinesOutputSchema
>;

export type GetDisciplinesOutput = z.infer<typeof GetDisciplinesOutputSchema>;
