import { defineConfig } from "tinacms";

const clientId = process.env.NEXT_PUBLIC_TINA_CLIENT_ID;
const token = process.env.TINA_TOKEN;

export default defineConfig({
  branch: process.env.HEAD || process.env.VERCEL_GIT_COMMIT_REF || "main",
  ...(clientId ? { clientId } : {}),
  ...(token ? { token } : {}),
  build: {
    outputFolder: "admin",
    publicFolder: "public",
  },
  media: {
    tina: {
      mediaRoot: "uploads",
      publicFolder: "public",
    },
  },
  schema: {
    collections: [
      {
        name: "profile",
        label: "Profile Settings",
        path: "content",
        format: "json",
        fields: [
          { type: "string", name: "name", label: "Full Name" },
          { type: "string", name: "title", label: "Professional Title" },
          { type: "string", name: "email", label: "Contact Email" },
          { type: "image", name: "profileImage", label: "Profile Image" },
          { type: "rich-text", name: "bio", label: "Biography" },
          {
            type: "object",
            name: "socials",
            label: "Social Links",
            fields: [
              { type: "string", name: "youtube", label: "YouTube URL" },
              { type: "string", name: "facebook", label: "Facebook URL" },
              { type: "string", name: "instagram", label: "Instagram URL" },
              { type: "string", name: "linkedin", label: "LinkedIn URL" },
            ],
          },
        ],
      },
      {
        name: "films",
        label: "Films & Documentaries",
        path: "content/films",
        fields: [
          { type: "string", name: "title", label: "Film Title" },
          { type: "string", name: "year", label: "Release Year" },
          { type: "string", name: "role", label: "Role (e.g. Director & Writer)" },
          { type: "string", name: "category", label: "Category" },
          { type: "image", name: "poster", label: "Film Poster / Image" },
        ],
      },
    ],
  },
});