import { pgTable, text, serial, integer, boolean, timestamp } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

export const users = pgTable("users", {
  id: serial("id").primaryKey(),
  username: text("username").notNull().unique(),
  password: text("password").notNull(),
  isAdmin: boolean("is_admin").default(false).notNull(),
});

export const contactSubmissions = pgTable("contact_submissions", {
  id: serial("id").primaryKey(),
  firstName: text("first_name").notNull(),
  lastName: text("last_name").notNull(),
  email: text("email").notNull(),
  website: text("website").notNull(),
  company: text("company"),
  objective: text("objective"),
  comments: text("comments"),
  privacyConsent: boolean("privacy_consent").notNull().default(false),
  createdAt: timestamp("created_at").defaultNow().notNull(),
});

export const speedTestResults = pgTable("speed_test_results", {
  id: serial("id").primaryKey(),
  url: text("url").notNull(),
  lighthouseScore: integer("lighthouse_score"),
  lcp: text("lcp"), // Largest Contentful Paint
  fid: text("fid"), // First Input Delay
  cls: text("cls"), // Cumulative Layout Shift
  createdAt: timestamp("created_at").defaultNow().notNull(),
});

export const insertUserSchema = createInsertSchema(users).pick({
  username: true,
  password: true,
});

export const insertContactSubmissionSchema = createInsertSchema(contactSubmissions).omit({
  id: true,
  createdAt: true,
}).extend({
  email: z.string().email("Email inválido"),
  website: z.string().url("URL inválida"),
  firstName: z.string().min(2, "El nombre debe tener al menos 2 caracteres"),
  lastName: z.string().min(2, "Los apellidos deben tener al menos 2 caracteres"),
  privacyConsent: z.boolean().refine(val => val === true, {
    message: "Debes aceptar la política de privacidad"
  })
});

export const insertSpeedTestSchema = createInsertSchema(speedTestResults).omit({
  id: true,
  createdAt: true,
}).extend({
  url: z.string().url("URL inválida")
});

// Blog posts table
export const blogPosts = pgTable("blog_posts", {
  id: serial("id").primaryKey(),
  title: text("title").notNull(),
  slug: text("slug").notNull().unique(),
  excerpt: text("excerpt").notNull(),
  content: text("content").notNull(),
  published: boolean("published").default(false).notNull(),
  createdAt: timestamp("created_at").defaultNow().notNull(),
  updatedAt: timestamp("updated_at").defaultNow().notNull(),
});

// Case studies table
export const caseStudies = pgTable("case_studies", {
  id: serial("id").primaryKey(),
  title: text("title").notNull(),
  company: text("company").notNull(),
  industry: text("industry").notNull(),
  challenge: text("challenge").notNull(),
  solution: text("solution").notNull(),
  results: text("results").notNull(),
  beforeScore: integer("before_score").notNull(),
  afterScore: integer("after_score").notNull(),
  improvementPercent: integer("improvement_percent").notNull(),
  published: boolean("published").default(false).notNull(),
  createdAt: timestamp("created_at").defaultNow().notNull(),
});

// Resources table
export const resources = pgTable("resources", {
  id: serial("id").primaryKey(),
  title: text("title").notNull(),
  type: text("type").notNull(), // 'guide', 'webinar', 'tool'
  description: text("description").notNull(),
  content: text("content"),
  downloadUrl: text("download_url"),
  published: boolean("published").default(false).notNull(),
  createdAt: timestamp("created_at").defaultNow().notNull(),
});

export const insertBlogPostSchema = createInsertSchema(blogPosts).omit({
  id: true,
  createdAt: true,
  updatedAt: true,
});

export const insertCaseStudySchema = createInsertSchema(caseStudies).omit({
  id: true,
  createdAt: true,
});

export const insertResourceSchema = createInsertSchema(resources).omit({
  id: true,
  createdAt: true,
});

export type InsertUser = z.infer<typeof insertUserSchema>;
export type User = typeof users.$inferSelect;
export type ContactSubmission = typeof contactSubmissions.$inferSelect;
export type InsertContactSubmission = z.infer<typeof insertContactSubmissionSchema>;
export type SpeedTestResult = typeof speedTestResults.$inferSelect;
export type InsertSpeedTest = z.infer<typeof insertSpeedTestSchema>;
export type BlogPost = typeof blogPosts.$inferSelect;
export type InsertBlogPost = z.infer<typeof insertBlogPostSchema>;
export type CaseStudy = typeof caseStudies.$inferSelect;
export type InsertCaseStudy = z.infer<typeof insertCaseStudySchema>;
export type Resource = typeof resources.$inferSelect;
export type InsertResource = z.infer<typeof insertResourceSchema>;
