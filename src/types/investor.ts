import { z } from "@hono/zod-openapi";
import {
  CreateInvestorOutputSchema,
  CreateInvestorProfileInputSchema,
  GetInvestorOutputSchema,
  GetInvestorParamsSchema,
  GetInvestorQuerySchema,
  InvestorEntitySchema,
  ListInvestorsInputSchema,
  UpdateInvestorOutputSchema,
  UpdateInvestorProfileInputSchema,
} from "../schemas/investor";

export type InvestorEntity = z.infer<typeof InvestorEntitySchema>;

export type ListInvestorsInput = z.infer<typeof ListInvestorsInputSchema>;

export type CreateInvestorInput = z.infer<
  typeof CreateInvestorProfileInputSchema
>;

export type UpdateInvestorInput = z.infer<
  typeof UpdateInvestorProfileInputSchema
>;

export type GetInvestorParams = z.infer<typeof GetInvestorParamsSchema>;

export type GetInvestorQuery = z.infer<typeof GetInvestorQuerySchema>;

export type CreateInvestorOutput = z.infer<typeof CreateInvestorOutputSchema>;

export type GetInvestorOutput = z.infer<typeof GetInvestorOutputSchema>;

export type UpdateInvestorOutput = z.infer<typeof UpdateInvestorOutputSchema>;
