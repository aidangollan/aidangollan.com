// Example model schema from the Drizzle docs
// https://orm.drizzle.team/docs/sql-schema-declaration

import { sql } from "drizzle-orm";
import {
  index,
  pgTableCreator,
  serial,
  timestamp,
  varchar,
  numeric,
  text
} from "drizzle-orm/pg-core";
import { url } from "inspector";

/**
 * This is an example of how to use the multi-project schema feature of Drizzle ORM. Use the same
 * database instance for multiple projects.
 *
 * @see https://orm.drizzle.team/docs/goodies#multi-project-schema
 */
export const createTable = pgTableCreator((name) => `aidangollan.com_${name}`);

export const views = createTable(
  "view",
  {
    id: serial("id").primaryKey(),
    views: numeric("views").notNull(),
  }
);

export const profiles = createTable(
  "profile",
  {
    id: serial("id").primaryKey(),
    email: varchar("email").notNull(),
    githubLink: varchar("github_link").notNull(),
    linkedinLink: varchar("linkedin_link").notNull(),
    resumeLink: varchar("resume_link").notNull(),
  }
)

export const projects = createTable(
  "project",
  {
    id: serial("id").primaryKey(),
    title: varchar("title").notNull(),
    description: varchar("description").notNull(),
    date: timestamp("date").notNull(),
    type: varchar("type").notNull(),
    views: numeric("views").notNull(),
    repository: text("repository"),
    url: text("url"),
    code: text("code"),
  }
)
