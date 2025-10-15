import type { z } from "@hono/zod-openapi";
import type {
  ProjectEntitySchema,
  ProjectFileEntitySchema,
  ProjectWithFilesEntitySchema,
  ProjectViewEntitySchema,
  ProjectLikeEntitySchema,
  ProjectCommentEntitySchema,
  ProjectBookmarkEntitySchema,
  ProjectUpdateOutputEntitySchema,
  CreateProjectInputSchema,
  CreateProjectOutputSchema,
  UpdateProjectInputSchema,
  UpdateProjectOutputSchema,
  ProjectIdSchema,
  CommentOnProjectParamsSchema,
  CommentOnProjectInputSchema,
  CommentOnProjectOutputSchema,
  DeleteProjectInputSchema,
  DeleteProjectCommentParamsSchema,
  DeleteProjectCommentOutputSchema,
  DeleteProjectOutputSchema,
  GetProjectParamsSchema,
  GetProjectOutputSchema,
  BookmarkProjectParamsSchema,
  BookmarkProjectOutputSchema,
  LikeProjectParamsSchema,
  UnlikeProjectParamsSchema,
  ViewProjectInputSchema,
  MinimalProjectSchema,
  ListProjectsInputSchema,
  ProjectWithProjectViewsEntitySchema,
  ProjectWithProjectCommentsEntitySchema,
  ProjectWithProjectLikesEntitySchema,
  ProjectWithProjectBookmarksEntitySchema,
} from "../schemas/project";

export type ProjectEntity = z.infer<typeof ProjectEntitySchema>;
export type ProjectFileEntity = z.infer<typeof ProjectFileEntitySchema>;

export type ProjectWithFilesEntity = z.infer<
  typeof ProjectWithFilesEntitySchema
>;
export type ProjectViewEntity = z.infer<typeof ProjectViewEntitySchema>;
export type ProjectLikeEntity = z.infer<typeof ProjectLikeEntitySchema>;
export type ProjectCommentEntity = z.infer<typeof ProjectCommentEntitySchema>;
export type ProjectBookmarkEntity = z.infer<typeof ProjectBookmarkEntitySchema>;
export type ProjectUpdateOutputEntity = z.infer<
  typeof ProjectUpdateOutputEntitySchema
>;

export type CreateProjectInput = z.infer<typeof CreateProjectInputSchema>;
export type CreateProjectOutput = z.infer<typeof CreateProjectOutputSchema>;
export type UpdateProjectInput = z.infer<typeof UpdateProjectInputSchema>;
export type UpdateProjectOutput = z.infer<typeof UpdateProjectOutputSchema>;

export type ProjectId = z.infer<typeof ProjectIdSchema>;
export type CommentOnProjectParams = z.infer<
  typeof CommentOnProjectParamsSchema
>;
export type CommentOnProjectInput = z.infer<typeof CommentOnProjectInputSchema>;
export type CommentOnProjectOutput = z.infer<
  typeof CommentOnProjectOutputSchema
>;
export type DeleteProjectInput = z.infer<typeof DeleteProjectInputSchema>;
export type DeleteProjectCommentParams = z.infer<
  typeof DeleteProjectCommentParamsSchema
>;
export type DeleteProjectCommentOutput = z.infer<
  typeof DeleteProjectCommentOutputSchema
>;
export type DeleteProjectOutput = z.infer<typeof DeleteProjectOutputSchema>;
export type GetProjectParams = z.infer<typeof GetProjectParamsSchema>;
export type GetProjectOutput = z.infer<typeof GetProjectOutputSchema>;
export type BookmarkProjectParams = z.infer<typeof BookmarkProjectParamsSchema>;
export type BookmarkProjectOutput = z.infer<typeof BookmarkProjectOutputSchema>;
export type LikeProjectParams = z.infer<typeof LikeProjectParamsSchema>;
export type UnlikeProjectParams = z.infer<typeof UnlikeProjectParamsSchema>;
export type ViewProjectInput = z.infer<typeof ViewProjectInputSchema>;

export type MinimalProject = z.infer<typeof MinimalProjectSchema>;
export type ListProjectsInput = z.infer<typeof ListProjectsInputSchema>;
export type ProjectWithProjectViewsEntity = z.infer<
  typeof ProjectWithProjectViewsEntitySchema
>;
export type ProjectWithProjectCommentsEntity = z.infer<
  typeof ProjectWithProjectCommentsEntitySchema
>;
export type ProjectWithProjectLikesEntity = z.infer<
  typeof ProjectWithProjectLikesEntitySchema
>;
export type ProjectWithProjectBookmarksEntity = z.infer<
  typeof ProjectWithProjectBookmarksEntitySchema
>;
