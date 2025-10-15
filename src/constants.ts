export const ROLES = {
  CREATIVE: "CREATIVE",
  BRAND: "BRAND",
  INVESTOR: "INVESTOR",
  ADMIN: "ADMIN",
} as const;

export const USER_STATUSES = {
  ACTIVE: "ACTIVE",
  SUSPENDED: "SUSPENDED",
  DELETED: "DELETED",
} as const;

export const CLIENT_TYPES = {
  CREATIVE: "CREATIVE",
  BRAND: "BRAND",
  NONE: "NONE",
} as const;

export const EXPERIENCE_LEVELS = {
  YEAR_0_1: "0-1 year",
  YEAR_1_3: "1-3 years",
  YEAR_3_5: "3-5 years",
  YEAR_5_PLUS: "5+ years",
} as const;

export const ONBOARDING_PAGES = {
  EMAIL_VERIFICATION: "EMAIL_VERIFICATION",
  USERNAME_SELECTION: "USERNAME_SELECTION",
  ACCOUNT_TYPE_SELECTION: "ACCOUNT_TYPE_SELECTION",
  CREATIVE_PROFILE_DETAILS: "CREATIVE_PROFILE_DETAILS",
  CREATIVE_PROFILE_CUSTOMIZE_FEED: "CREATIVE_PROFILE_CUSTOMIZE_FEED",
  CREATIVE_PROFILE_PORTFOLIO: "CREATIVE_PROFILE_PORTFOLIO",
  BRAND_PROFILE_DETAILS: "BRAND_PROFILE_DETAILS",
  BRAND_PROFILE_CUSTOMIZE_FEED: "BRAND_PROFILE_CUSTOMIZE_FEED",
  BRAND_PROFILE_PORTFOLIO: "BRAND_PROFILE_PORTFOLIO",
  INVESTOR_PROFILE_DETAILS: "INVESTOR_PROFILE_DETAILS",
  INVESTOR_INVESTMENT_FOCUS: "INVESTOR_INVESTMENT_FOCUS",
  INVESTOR_VERIFICATION: "INVESTOR_VERIFICATION",
  DONE: "DONE",
} as const;

export const INVESTOR_TYPES = {
  ANGEL_INVESTOR: "Angel Investor",
  VENTURE_CAPITALIST: "Venture Capitalist",
  PRIVATE_EQUITY_FIRM: "Private Equity Firm",
  VENTURE_DEBT_PROVIDER: "Venture Debt Provider",
  BANK: "Bank",
  CONVERTIBLE_NOTE_INVESTOR: "Convertible Note Investor",
  REVENUE_BASED_FINANCING_INVESTOR: "Revenue Based Financing Investor",
  CORPORATE_VENTURE_CAPITALIST: "Corporate Venture Capitalist",
  GOVERNMENT: "Government",
  SOCIAL_IMPACT_INVESTOR: "Social Impact Investor",
} as const;

export const INVESTMENT_SIZES = {
  UNDER_5K: "Under 5k USD",
  BETWEEN_5K_25K: "5k - 25k USD",
  BETWEEN_25K_100K: "25k - 100k USD",
  BETWEEN_100K_500K: "100k - 500k USD",
  BETWEEN_500K_1M: "500k - 1M USD",
  OVER_1M: "1M+ USD",
} as const;

export const GEOGRAPHIC_FOCUS = {
  AFRICA: "Africa",
  ASIA: "Asia",
  EUROPE: "Europe",
  NORTH_AMERICA: "North America",
  SOUTH_AMERICA: "South America",
  MIDDLE_EAST: "Middle East",
  OCEANIA: "Oceania",
  UK: "United Kingdom (UK)",
  US: "United States (US)",
  GLOBAL: "Global",
  OTHER: "Other",
} as const;

export const INVESTOR_VERIFICATION_DOCUMENT_STATUSES = {
  PENDING: "PENDING",
  APPROVED: "APPROVED",
  REJECTED: "REJECTED",
} as const;

export const INVESTOR_VERIFICATION_DOCUMENT_TYPES = {
  ID_PROOF: "ID_PROOF",
  BANK_STATEMENT: "BANK_STATEMENT",
  TAX_DOCUMENT: "TAX_DOCUMENT",
  BUSINESS_REGISTRATION: "BUSINESS_REGISTRATION",
  OTHER_CERTIFICATE: "OTHER_CERTIFICATE",
} as const;

export type Role = (typeof ROLES)[keyof typeof ROLES];
export type UserStatus = (typeof USER_STATUSES)[keyof typeof USER_STATUSES];
export type ClientType = (typeof CLIENT_TYPES)[keyof typeof CLIENT_TYPES];
export type ExperienceLevel =
  (typeof EXPERIENCE_LEVELS)[keyof typeof EXPERIENCE_LEVELS];
export type OnboardingPage =
  (typeof ONBOARDING_PAGES)[keyof typeof ONBOARDING_PAGES];
export type InvestorType = (typeof INVESTOR_TYPES)[keyof typeof INVESTOR_TYPES];
export type InvestmentSize =
  (typeof INVESTMENT_SIZES)[keyof typeof INVESTMENT_SIZES];
export type GeographicFocus =
  (typeof GEOGRAPHIC_FOCUS)[keyof typeof GEOGRAPHIC_FOCUS];
export type InvestorVerificationDocumentStatus =
  (typeof INVESTOR_VERIFICATION_DOCUMENT_STATUSES)[keyof typeof INVESTOR_VERIFICATION_DOCUMENT_STATUSES];
export type InvestorVerificationDocumentType =
  (typeof INVESTOR_VERIFICATION_DOCUMENT_TYPES)[keyof typeof INVESTOR_VERIFICATION_DOCUMENT_TYPES];

export const API_ROUTES = {
  healthCheck: "/health",
  username: {
    base: "/usernames",
    checkAvailability: "/:username/availability",
  },
  personal: {
    base: "/me",
    getUser: "",
    getProfile: "/profile",
    getProjects: "/projects",
    getProjectBookmarks: "/project-bookmarks",
    getFollowers: "/followers",
    getFollowing: "/following",
  },
  user: {
    base: "/users",
    getUser: "/:value",
    getProfile: "/:value/profile",
    getProjects: "/:value/projects",
    getFollowers: "/:userId/followers",
    getFollowing: "/:userId/following",
    followUser: "/:userId/follow",
    unfollowUser: "/:userId/unfollow",
    reserveUsername: "/reserve-username",
  },
  redirect: {
    base: "/redirect",
    passwordReset: "/password-reset",
    verifiedUser: "/verified-user",
    googleProfile: "/google-profile",
    newGoogleProfile: "/new-google-profile",
  },
  file: {
    base: "/files",
    getPresignedUploadUrl: "/get-upload-url",
    getPresignedDownloadUrl: "/:fileId/download-url",
    getPublicUrl: "/:fileId/public-url",
    createFile: "",
    deleteFile: "/:fileId",
  },
  disciplines: {
    base: "/disciplines",
    getDisciplines: "",
    getSingleDiscipline: "/:slug",
    addDisciplines: "",
    deleteDiscipline: "/:slug",
  },
  creatives: {
    base: "/creatives",
    createCreative: "",
    getCreative: "/:value",
    updateCreative: "",
  },
  brands: {
    base: "/brands",
    createBrand: "",
    getBrand: "/:value",
    updateBrand: "",
  },
  investors: {
    base: "/investors",
    createInvestor: "",
    getInvestor: "/:value",
    updateInvestor: "",
  },
  projects: {
    base: "/projects",
    createProject: "",
    updateProject: "",
    listProjects: "",
    getProject: "/:projectId",
    deleteProject: "/:projectId",
    commentOnProject: "/:projectId/comment",
    deleteCommentOnProject: "/:projectId/comments/:commentId",
    bookmarkProject: "/:projectId/bookmark",
    unbookmarkProject: "/:projectId/unbookmark",
    likeProject: "/:projectId/like",
    unlikeProject: "/:projectId/unlike",
    viewProject: "/:projectId/view",
    getProjectComments: "/:projectId/comments",
    getProjectLikes: "/:projectId/likes",
    getProjectBookmarks: "/:projectId/bookmarks",
    getProjectViews: "/:projectId/views",
    getProjectUser: "/:projectId/user",
  },
} as const;

export const FRONTEND_API_ROUTES = {
  healthCheck: "health",
  username: {
    base: "usernames",
    checkAvailability: (username: string) => `${username}/availability`,
  },
  personal: {
    base: "me",
    getUser: "",
    getProfile: "profile",
    getProjects: "projects",
    getProjectBookmarks: "project-bookmarks",
    getFollowers: "followers",
    getFollowing: "following",
  },
  user: {
    base: "users",
    getUser: (value: string) => `${value}`,
    getProfile: (value: string) => `${value}/profile`,
    getProjects: (value: string) => `${value}/projects`,
    getFollowers: (userId: string) => `${userId}/followers`,
    getFollowing: (userId: string) => `${userId}/following`,
    followUser: (userId: string) => `${userId}/follow`,
    unfollowUser: (userId: string) => `${userId}/unfollow`,
    reserveUsername: "reserve-username",
  },
  redirect: {
    base: "redirect",
    passwordReset: "password-reset",
    verifiedUser: "verified-user",
    googleProfile: "google-profile",
    newGoogleProfile: "new-google-profile",
  },
  file: {
    base: "files",
    getPresignedUploadUrl: "get-upload-url",
    getPresignedDownloadUrl: (fileId: string) => `${fileId}/download-url`,
    getPublicUrl: (fileId: string) => `${fileId}/public-url`,
    createFile: "",
    deleteFile: (fileId: string) => `${fileId}`,
  },
  disciplines: {
    base: "disciplines",
    getDisciplines: "",
    getSingleDiscipline: (slug: string) => `${slug}`,
    addDisciplines: "",
    deleteDiscipline: (slug: string) => `${slug}`,
  },
  creatives: {
    base: "creatives",
    createCreative: "",
    getCreative: (value: string) => `${value}`,
    updateCreative: "",
  },
  brands: {
    base: "brands",
    createBrand: "",
    getBrand: (value: string) => `${value}`,
    updateBrand: "",
  },
  investors: {
    base: "investors",
    createInvestor: "",
    getInvestor: (value: string) => `${value}`,
    updateInvestor: "",
  },
  projects: {
    base: "projects",
    createProject: "",
    updateProject: "",
    listProjects: "",
    getProject: (projectId: string) => `${projectId}`,
    deleteProject: (projectId: string) => `${projectId}`,
    commentOnProject: (projectId: string) => `${projectId}/comment`,
    deleteCommentOnProject: (projectId: string, commentId: string) =>
      `${projectId}/comments/${commentId}`,
    bookmarkProject: (projectId: string) => `${projectId}/bookmark`,
    unbookmarkProject: (projectId: string) => `${projectId}/unbookmark`,
    likeProject: (projectId: string) => `${projectId}/like`,
    unlikeProject: (projectId: string) => `${projectId}/unlike`,
    viewProject: (projectId: string) => `${projectId}/view`,
    getProjectComments: (projectId: string) => `${projectId}/comments`,
    getProjectLikes: (projectId: string) => `${projectId}/likes`,
    getProjectBookmarks: (projectId: string) => `${projectId}/bookmarks`,
    getProjectViews: (projectId: string) => `${projectId}/views`,
    getProjectUser: (projectId: string) => `${projectId}/user`,
  },
} as const;

export const DEFAULT_DISCIPLINES = [
  { name: "Painting", slug: "painting" },
  { name: "Drawing", slug: "drawing" },
  { name: "Sculpture", slug: "sculpture" },
  { name: "Printmaking", slug: "printmaking" },
  { name: "Photography", slug: "photography" },
  { name: "Illustration", slug: "illustration" },
  { name: "Installation Art", slug: "installation_art" },
  { name: "Mixed Media Art", slug: "mixed_media_art" },
  { name: "Conceptual Art", slug: "conceptual_art" },
  { name: "Graphic Design", slug: "graphic_design" },
  { name: "Fashion Design", slug: "fashion_design" },
  { name: "Interior Design", slug: "interior_design" },
  { name: "Industrial / Product Design", slug: "industrial_product_design" },
  { name: "UX Design", slug: "ux_design" },
  { name: "UI Design", slug: "ui_design" },
  { name: "Motion Design", slug: "motion_design" },
  { name: "Textile Design", slug: "textile_design" },
  { name: "Jewelry Design", slug: "jewelry_design" },
  { name: "Furniture Design", slug: "furniture_design" },
  { name: "Architecture", slug: "architecture" },
  { name: "Web Design", slug: "web_design" },
  { name: "Exhibition Design", slug: "exhibition_design" },
  { name: "Design Research", slug: "design_research" },
  { name: "Film / Video Production", slug: "film_video_production" },
  { name: "Animation", slug: "animation" },
  { name: "Game Design", slug: "game_design" },
  { name: "Digital Media Art", slug: "digital_media_art" },
  { name: "Advertising / Art Direction", slug: "advertising_art_direction" },
  { name: "Copywriting", slug: "copywriting" },
  { name: "Content Strategy", slug: "content_strategy" },
  {
    name: "Social Media Content Creation",
    slug: "social_media_content_creation",
  },
  { name: "Podcasting", slug: "podcasting" },
  { name: "Journalism", slug: "journalism" },
  { name: "Creative Coding", slug: "creative_coding" },
  {
    name: "Augmented Reality (AR) Design",
    slug: "augmented_reality_ar_design",
  },
  { name: "Virtual Reality (VR) Design", slug: "virtual_reality_vr_design" },
  { name: "Interaction Design", slug: "interaction_design" },
  { name: "Music", slug: "music" },
  { name: "Dance", slug: "dance" },
  { name: "Theatre / Acting", slug: "theatre_acting" },
  {
    name: "Spoken Word / Performance Poetry",
    slug: "spoken_word_performance_poetry",
  },
  { name: "DJ", slug: "dj" },
  { name: "Sound Design", slug: "sound_design" },
  { name: "Voice Acting", slug: "voice_acting" },
  { name: "Creative Writing", slug: "creative_writing" },
  { name: "Comics / Graphic Novels", slug: "comics_graphic_novels" },
  { name: "Curation", slug: "curation" },
  { name: "Creative Entrepreneurship", slug: "creative_entrepreneurship" },
];