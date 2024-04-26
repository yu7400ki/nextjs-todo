import type { Config } from "drizzle-kit";

export default {
  schema: "./db/schema.ts",
  out: "./db/migrations",
  driver: "better-sqlite",
  dbCredentials: {
    url: "./db/db.sqlite",
  },
} satisfies Config;
