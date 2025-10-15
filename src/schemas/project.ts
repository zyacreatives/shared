import { z } from "@hono/zod-openapi";
import { CLIENT_TYPES, ROLES } from "../constants";
import { CreateFileInputSchema, FileEntitySchema } from "./file";
export const ProjectEntitySchema = z
  .object({
    description: z.string().optional().openapi({
      description: "Detailed description of the project, max 1000 characters.",
      example:
        "A modern e-commerce mobile application built with React Native.",
    }),
    title: z.string().openapi({
      description: "Title of the project.",
      example: "E-commerce Mobile App",
    }),
    url: z.string().optional().openapi({
      description: "URL to the project or live demo.",
      example: "https://example.com/project",
    }),
    imagePlaceholderUrl: z.string().url().openapi({
      description: "URL for the placeholder image of the project.",
      example: "https://img.com",
    }),
    tags: z
      .array(z.string())
      .optional()
      .openapi({
        description: "Array of tags associated with the project.",
        example: ["react-native", "e-commerce", "mobile"],
      }),
    startDate: z.coerce
      .date()
      .optional()
      .openapi({
        description: "Start date of the project.",
        example: new Date("2024-01-01"),
      }),
    endDate: z.coerce
      .date()
      .optional()
      .openapi({
        description: "End date of the project.",
        example: new Date("2024-06-30"),
      }),
    overview: z.string().optional().openapi({
      description: "Brief overview of the project.",
      example: "A comprehensive e-commerce solution for mobile devices.",
    }),
    projectCreatorType: z.enum(ROLES).openapi({
      description: "Type of creator who made this project.",
      example: "CREATIVE",
    }),
    clientId: z.string().optional().openapi({
      description: "CUID2 of the client if this is a client project.",
      example: "ckl1y9xyz0000qv7a0h1efgh4",
    }),
    clientType: z.enum(CLIENT_TYPES).optional().openapi({
      description: "Type of client for this project.",
      example: "BRAND",
    }),
    clientName: z.string().optional().openapi({
      description: "Name of the client.",
      example: "Acme Corp",
    }),
    id: z.string().openapi({
      description: "CUID2 of the project.",
      example: "ckl1y9xyz0000qv7a0h1efgh4",
    }),
    isFeatured: z.boolean().optional().openapi({
      description: "Whether the project is featured.",
      example: true,
    }),
    createdAt: z.coerce.date().openapi({
      description: "Timestamp when the project was created.",
      example: new Date("2024-01-01T00:00:00.000Z"),
    }),
    updatedAt: z.coerce.date().openapi({
      description: "Timestamp when the project was last updated.",
      example: new Date("2024-06-30T00:00:00.000Z"),
    }),
    userId: z.string().openapi({
      description: "CUID2 of the user who created the project.",
      example: "ckl1y9xyz0000qv7a0h1efgh4",
    }),
    searchVector: z.string().openapi({
      description: "Search vector for full-text search indexing.",
      example: "ecommerce mobile app react native",
    }),
  })
  .openapi({
    title: "Project DB Entity",
    description: "Schema representing a project stored in the database.",
  });

export const ProjectFileEntitySchema = z
  .object({
    isPlaceholder: z.boolean().openapi({
      description: "Indicates whether the file is a placeholder.",
      example: false,
    }),
    order: z.number().int().openapi({
      description: "Order index of the file in the project.",
      example: 1,
    }),
    projectId: z.string().openapi({
      description: "CUID2 of the project this file belongs to.",
      example: "ckl1y9xyz0000qv7a0h1efgh4",
    }),
    id: z.string().openapi({
      description: "CUID2 of the project file record.",
      example: "ckl1y9xyz0000qv7a0h1efgh4",
    }),
    fileId: z.string().openapi({
      description: "CUID2 of the linked file.",
      example: "ckl1y9xyz0000qv7a0h1efgh4",
    }),
  })
  .openapi({
    title: "Project File Entity",
    description: "Schema representing a file associated with a project.",
  });

export const ProjectSocialGraphEntitySchema = z
  .object({
    noOfLikes: z.number().int().optional().openapi({ example: 150 }),
    noOfComments: z.number().int().optional().openapi({ example: 45 }),
    noOfBookmarks: z.number().int().optional().openapi({ example: 22 }),
    noOfViews: z.number().int().optional().openapi({ example: 1200 }),
  })
  .openapi("ProjectSocialGraphEntity");

export const ProjectWithFilesEntitySchema = ProjectEntitySchema.extend({
  projectFiles: z
    .array(
      ProjectFileEntitySchema.extend({
        file: FileEntitySchema,
      })
    )
    .optional()
    .openapi({ description: "Files associated with the project." }),
}).openapi({
  title: "ProjectWithFilesEntity",
});

export const ProjectViewEntitySchema = z
  .object({
    id: z.cuid2().openapi({ example: "view_cksd0v6q0000s9a5y8z7p3x9" }),
    userId: z.cuid2().optional().openapi({ example: "user_view_xyz" }),
    ipAddress: z.ipv4().optional().openapi({ example: "192.168.1.1" }),
    userAgent: z
      .string()
      .optional()
      .openapi({ example: "Mozilla/5.0 (Windows NT 10.0; Win64)" }),
    projectId: z.cuid2().openapi({ example: "proj_abc456" }),
    sessionId: z.string().optional().openapi({ example: "sess_xyz789" }),
    viewedAt: z.coerce.date().openapi({ example: "2025-10-14T10:30:00.000Z" }),
    viewDate: z.coerce.date().openapi({ example: "2025-10-14T00:00:00.000Z" }),
  })
  .openapi("ProjectViewEntity");

export const ProjectLikeEntitySchema = z
  .object({
    createdAt: z.coerce
      .date()
      .optional()
      .openapi({ example: "2025-10-13T11:00:00.000Z" }),
    userId: z.cuid2().openapi({ example: "user_liker_123" }),
    projectId: z.cuid2().openapi({ example: "proj_abc456" }),
  })
  .openapi("ProjectLikeEntity");

export const ProjectCommentEntitySchema = z
  .object({
    id: z.cuid2().openapi({ example: "comment_id_1" }),
    createdAt: z.coerce
      .date()
      .optional()
      .openapi({ example: "2025-10-13T12:00:00.000Z" }),
    userId: z.cuid2().openapi({ example: "user_commenter_456" }),
    projectId: z.cuid2().openapi({ example: "proj_abc456" }),
    parentCommentId: z
      .cuid2()
      .optional()
      .openapi({ example: "comment_id_parent_1" }),
    content: z
      .string()
      .min(1)
      .openapi({ example: "Amazing work on the color palette!" }),
  })
  .openapi("ProjectCommentEntity");

export const ProjectBookmarkEntitySchema = z
  .object({
    createdAt: z.coerce
      .date()
      .optional()
      .openapi({ example: "2025-10-13T13:00:00.000Z" }),
    userId: z.cuid2().openapi({ example: "user_bookmark_789" }),
    projectId: z.cuid2().openapi({ example: "proj_abc456" }),
  })
  .openapi("ProjectBookmarkEntity");

export const ProjectUpdateOutputEntitySchema = z
  .object({
    id: z.cuid2().openapi({ example: "cksd0v6q0000s9a5y8z7p3x9" }),
  })
  .openapi("ProjectUpdateOutputEntity");

export const CreateProjectInputSchema = z
  .object({
    title: z.string().min(1).max(100).openapi({
      description: "Title of the project, 1-100 characters.",
      example: "E-commerce Mobile App",
    }),
    description: z.string().max(1000).optional().default("").openapi({
      description: "Detailed description of the project, max 1000 characters.",
      example:
        "A modern e-commerce mobile application built with React Native.",
    }),
    url: z.string().openapi({
      description: "URL to the project or live demo.",
      example: "https://example.com/project",
    }),
    imagePlaceholderUrl: z.url().openapi({ example: "https://img.com" }),
    tags: z
      .array(z.string())
      .default([])
      .openapi({
        description: "Array of tags associated with the project.",
        example: ["react-native", "e-commerce", "mobile"],
      }),
    startDate: z.coerce.date().openapi({
      description: "Start date of the project.",
      example: new Date("2024-01-01"),
    }),
    endDate: z.coerce
      .date()
      .optional()
      .openapi({
        description: "End date of the project.",
        example: new Date("2024-06-30"),
      }),
    overview: z.string().optional().openapi({
      description: "Brief overview of the project.",
      example: "A comprehensive e-commerce solution for mobile devices.",
    }),
    projectCreatorType: z.enum(ROLES).default(ROLES.CREATIVE).openapi({
      description: "Type of creator who made this project.",
      example: "CREATIVE",
    }),
    clientId: z.string().optional().openapi({
      description: "CUID2 of the client if this is a client project.",
      example: "ckl1y9xyz0000qv7a0h1efgh4",
    }),
    clientType: z.enum(CLIENT_TYPES).default(CLIENT_TYPES.NONE).openapi({
      description: "Type of client for this project.",
      example: "BRAND",
    }),
    clientName: z.string().optional().default("").openapi({
      description: "Name of the client.",
      example: "Acme Corp",
    }),
    files: z
      .array(
        CreateFileInputSchema.extend({
          isPlaceholder: z.boolean().default(false),
          order: z.int().default(1),
        })
      )
      .openapi({
        description: "Array of files/images for the project.",
        example: [],
      }),
  })
  .openapi({
    title: "Create Project",
    description: "Schema for creating a new project.",
  });

export const CreateProjectOutputSchema = ProjectEntitySchema;

export const UpdateProjectInputSchema = z
  .object({
    id: z.cuid2().openapi({
      description: "CUID2 identifier of the project to update.",
      example: "ckl1z0abc0000qv7a0h1abcd2",
    }),
    title: z.string().optional().openapi({
      description: "Updated title of the project.",
      example: "Updated E-commerce Mobile App",
    }),
    description: z.string().optional().openapi({
      description: "Updated description of the project.",
      example: "An updated description of the project.",
    }),
    imagePlaceholderUrl: z.url().optional().openapi({
      example: "https://img.com",
    }),
    overview: z.string().optional().openapi({
      description: "Updated overview of the project.",
      example: "Updated project overview.",
    }),
    url: z.url().optional().openapi({
      description: "Updated URL to the project or live demo.",
      example: "https://updated-example.com/project",
    }),
    clientId: z.cuid2().optional().openapi({
      description: "Updated client ID.",
      example: "ckl1y9xyz0000qv7a0h1efgh5",
    }),
    clientType: z.enum(["CREATIVE", "BRAND", "NONE"]).optional().openapi({
      description: "Updated client type.",
      example: "BRAND",
    }),
    clientName: z.string().optional().openapi({
      description: "Updated client name.",
      example: "Updated Acme Corp",
    }),
    projectCreatorType: z
      .enum(["CREATIVE", "BRAND", "INVESTOR", "ADMIN"])
      .optional()
      .openapi({
        description: "Updated project creator type.",
        example: "CREATIVE",
      }),
    tags: z
      .array(z.string())
      .optional()
      .openapi({
        description: "Updated array of tags.",
        example: ["react-native", "e-commerce", "mobile", "updated"],
      }),
    isFeatured: z.boolean().optional().openapi({
      description: "Whether the project should be featured.",
      example: true,
    }),
    startDate: z
      .date()
      .optional()
      .openapi({
        description: "Updated start date of the project.",
        example: new Date("2024-02-01"),
      }),
    endDate: z
      .date()
      .optional()
      .openapi({
        description: "Updated end date of the project.",
        example: new Date("2024-07-30"),
      }),
    createdAt: z
      .date()
      .optional()
      .openapi({
        description: "Creation date (read-only).",
        example: new Date("2024-01-01T12:00:00Z"),
      }),
    updatedAt: z
      .date()
      .optional()
      .openapi({
        description: "Last update date (read-only).",
        example: new Date("2024-06-30T18:00:00Z"),
      }),
  })
  .openapi({
    title: "Update Project",
    description: "Schema for updating an existing project.",
  });

export const UpdateProjectOutputSchema = ProjectEntitySchema;
export const ProjectIdSchema = z.object({
  projectId: z.cuid2(),
});
export const CommentOnProjectParamsSchema = ProjectIdSchema;
export const CommentOnProjectInputSchema = z
  .object({
    content: z.string().openapi({
      description: "Content of the comment.",
      example: "This is a great project!",
    }),
    parentCommentId: z.cuid2().optional().openapi({
      description: "CUID2 of the parent comment if this is a reply.",
      example: "ckl1z0abc0000qv7a0h1abcd4",
    }),
  })
  .openapi({
    title: "Comment on Project",
    description: "Schema for commenting on a project.",
  });
export const CommentOnProjectOutputSchema = ProjectCommentEntitySchema;

export const DeleteProjectInputSchema = ProjectIdSchema;

export const DeleteProjectCommentParamsSchema = z.object({
  commentId: z.cuid2(),
});

export const DeleteProjectCommentOutputSchema = ProjectCommentEntitySchema;

export const DeleteProjectOutputSchema = ProjectEntitySchema;

export const GetProjectParamsSchema = ProjectIdSchema;

export const GetProjectOutputSchema = ProjectWithFilesEntitySchema;

export const BookmarkProjectParamsSchema = ProjectIdSchema;

export const BookmarkProjectOutputSchema = ProjectBookmarkEntitySchema;

export const LikeProjectParamsSchema = ProjectIdSchema;

export const UnlikeProjectParamsSchema = ProjectIdSchema;

export const ViewProjectInputSchema = z
  .object({
    projectId: z.cuid2().openapi({
      description: "CUID2 identifier of the project being viewed.",
      example: "ckl1z0abc0000qv7a0h1abcd2",
    }),
    id: z.cuid2().optional().openapi({
      description: "CUID2 identifier of the view record (auto-generated).",
      example: "ckl1z0abc0000qv7a0h1abcd5",
    }),
    userId: z.cuid2().optional().openapi({
      description: "CUID2 of the user who viewed the project.",
      example: "ckl1y9xyz0000qv7a0h1efgh3",
    }),
    sessionId: z.string().optional().openapi({
      description: "Session ID for anonymous users.",
      example: "sess_123456789",
    }),
    ipAddress: z.string().optional().openapi({
      description: "IP address of the viewer.",
      example: "192.168.1.1",
    }),
    userAgent: z.string().optional().openapi({
      description: "User agent string of the viewer.",
      example: "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36",
    }),
    viewedAt: z
      .date()
      .optional()
      .openapi({
        description: "Date and time when the project was viewed.",
        example: new Date("2024-01-15T14:30:00Z"),
      }),
    viewDate: z
      .date()
      .optional()
      .openapi({
        description: "Date when the project was viewed.",
        example: new Date("2024-01-15"),
      }),
  })
  .openapi({
    title: "View Project",
    description: "Schema for recording a project view.",
  });

export const MinimalProjectSchema = ProjectEntitySchema.pick({
  id: true,
  title: true,
  description: true,
  tags: true,
  startDate: true,
  endDate: true,
  imagePlaceholderUrl: true,
}).openapi({
  title: "MinimalProject",
  description: "Subset of project fields for lightweight listings.",
});

export const ListProjectsInputSchema = z
  .object({
    query: z.string().optional().openapi({
      description: "Search query for projects.",
      example: "ecommerce app",
    }),
    tags: z
      .array(z.string())
      .optional()
      .openapi({
        description: "Tags to filter projects by.",
        example: ["react", "design"],
      }),
    clientName: z.string().optional().openapi({
      description: "Client name to filter projects by.",
      example: "Acme Corp",
    }),
    userId: z.string().optional().openapi({
      description: "Filter projects by user ID.",
      example: "ckl1y9xyz0000qv7a0h1efgh4",
    }),
    page: z.number().int().optional().default(1).openapi({
      description: "Page number for pagination.",
      example: 1,
    }),
    perPage: z.number().int().optional().default(10).openapi({
      description: "Number of items per page.",
      example: 10,
    }),
  })
  .openapi({
    title: "ListProjectsInput",
    description: "Parameters for listing or searching projects.",
  });

export const ProjectWithProjectViewsEntitySchema = MinimalProjectSchema.extend({
  views: z.array(ProjectViewEntitySchema).openapi({
    description: "Array of project view records.",
  }),
}).openapi({
  title: "ProjectWithProjectViewsEntity",
  description: "Project entity with associated views.",
});

export const ProjectWithProjectCommentsEntitySchema =
  MinimalProjectSchema.extend({
    comments: z.array(ProjectCommentEntitySchema).openapi({
      description: "Array of comments on the project.",
    }),
  }).openapi({
    title: "ProjectWithProjectCommentsEntity",
    description: "Project entity with associated comments.",
  });

export const ProjectWithProjectLikesEntitySchema = MinimalProjectSchema.extend({
  likes: z.array(ProjectLikeEntitySchema).openapi({
    description: "Array of likes on the project.",
  }),
}).openapi({
  title: "ProjectWithProjectLikesEntity",
  description: "Project entity with associated likes.",
});

export const ProjectWithProjectBookmarksEntitySchema =
  MinimalProjectSchema.extend({
    bookmarks: z.array(ProjectBookmarkEntitySchema).openapi({
      description: "Array of bookmarks for the project.",
    }),
  }).openapi({
    title: "ProjectWithProjectBookmarksEntity",
    description: "Project entity with associated bookmarks.",
  });
