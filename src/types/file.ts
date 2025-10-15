import { z } from "@hono/zod-openapi";
import {
  CreateFileInputSchema,
  CreateFileOutputSchema,
  DeleteFileInputParams,
  DeleteFileOutputSchema,
  FileEntitySchema,
  FileUpdateEntitySchema,
  GetFilePresignedDownloadUrlParams,
  GetFilePresignedUploadUrlInputSchema,
  GetFilePresignedUploadUrlOutputSchema,
} from "../schemas/file";

export type FileEntity = z.infer<typeof FileEntitySchema>;

export type FileUpdateEntity = z.infer<typeof FileUpdateEntitySchema>;

export type GetPresignedUploadUrlInput = z.infer<
  typeof GetFilePresignedUploadUrlInputSchema
>;
export type FileKeyInput = {
  key: string;
};

export type GetPresignedUploadUrlOutput = z.infer<
  typeof GetFilePresignedUploadUrlOutputSchema
>;

export type GetPresignedDownloadUrlInput = z.infer<
  typeof GetFilePresignedDownloadUrlParams
>;

export type GetPresignedDownloadUrlOutput = GetPresignedUploadUrlOutput;

export type CreateFileInput = z.infer<typeof CreateFileInputSchema>;
export type CreateFileOutput = z.infer<typeof CreateFileOutputSchema>;
export type DeleteFileInput = z.infer<typeof DeleteFileInputParams>;
export type DeleteFileOutput = z.infer<typeof DeleteFileOutputSchema>;
