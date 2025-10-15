import { z } from "@hono/zod-openapi";

export const FileEntitySchema = z
  .object({
    key: z.string().openapi({ example: "profile-pic-12345" }),
    id: z.cuid2().openapi({ example: "f123e4567-e89b-12d3-a456-426614174000" }),
    url: z
      .url()
      .optional()
      .openapi({ example: "https://example.com/file.jpg" }),
    createdAt: z.coerce.date().openapi({ example: "2025-10-14T08:00:00.000Z" }),
    updatedAt: z.coerce.date().openapi({ example: "2025-10-14T09:00:00.000Z" }),
    userId: z
      .cuid2()
      .openapi({ example: "u123e4567-e89b-12d3-a456-426614174000" }),
    mimeType: z.string().openapi({ example: "image/jpeg" }),
  })
  .openapi({ title: "FileEntity" });

export const FileUpdateEntitySchema = z
  .object({
    id: z
      .string()
      .openapi({ example: "f123e4567-e89b-12d3-a456-426614174000" }),
  })
  .openapi({ title: "FileUpdateEntity" });

export const GetFilePresignedUploadUrlInputSchema = z.object({
  key: z.string().openapi({ example: "/users/123/pfp" }),
});

export const GetFilePresignedUploadUrlOutputSchema = z.object({
  url: z.url().openapi({ example: "https//www.cloudflare.img" }),
});

export const GetFilePresignedDownloadUrlParams = z.object({
  fileId: z.cuid2().openapi({ example: "0irjif0qur09481u90r1u" }),
});
export const GetFilePresignedDownloadUrlOutputSchema =
  GetFilePresignedUploadUrlOutputSchema;

export const CreateFileInputSchema = z.object({
  key: z.string().openapi({ example: "uploads/audio/podcast789.mp3" }),
  mimeType: z.string().openapi({
    example: "audio/mpeg",
  }),
});

export const CreateFileOutputSchema = FileEntitySchema;

export const DeleteFileInputParams = z.object({
  fileId: z.cuid2().openapi({ example: "0irjif0qur09481u90r1u" }),
});

export const DeleteFileOutputSchema = z.object({
  id: z.cuid2().openapi({ example: "r90rjnaneifijhi31" }),
});
