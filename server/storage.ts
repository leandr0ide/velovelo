import { 
  users, 
  contactSubmissions, 
  speedTestResults,
  blogPosts,
  caseStudies,
  resources,
  type User, 
  type InsertUser, 
  type ContactSubmission, 
  type InsertContactSubmission,
  type SpeedTestResult,
  type InsertSpeedTest,
  type BlogPost,
  type InsertBlogPost,
  type CaseStudy,
  type InsertCaseStudy,
  type Resource,
  type InsertResource
} from "@shared/schema";
import { db } from "./db";
import { eq } from "drizzle-orm";

export interface IStorage {
  // User methods
  getUser(id: number): Promise<User | undefined>;
  getUserByUsername(username: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;
  
  // Contact submission methods
  createContactSubmission(submission: InsertContactSubmission): Promise<ContactSubmission>;
  getContactSubmissions(): Promise<ContactSubmission[]>;
  
  // Speed test methods
  createSpeedTestResult(result: InsertSpeedTest): Promise<SpeedTestResult>;
  getSpeedTestResults(): Promise<SpeedTestResult[]>;
  getSpeedTestByUrl(url: string): Promise<SpeedTestResult | undefined>;
  
  // Blog post methods
  createBlogPost(post: InsertBlogPost): Promise<BlogPost>;
  updateBlogPost(id: number, post: Partial<InsertBlogPost>): Promise<BlogPost>;
  deleteBlogPost(id: number): Promise<void>;
  getBlogPosts(): Promise<BlogPost[]>;
  getBlogPost(id: number): Promise<BlogPost | undefined>;
  getBlogPostBySlug(slug: string): Promise<BlogPost | undefined>;
  
  // Case study methods
  createCaseStudy(caseStudy: InsertCaseStudy): Promise<CaseStudy>;
  updateCaseStudy(id: number, caseStudy: Partial<InsertCaseStudy>): Promise<CaseStudy>;
  deleteCaseStudy(id: number): Promise<void>;
  getCaseStudies(): Promise<CaseStudy[]>;
  getCaseStudy(id: number): Promise<CaseStudy | undefined>;
  
  // Resource methods
  createResource(resource: InsertResource): Promise<Resource>;
  updateResource(id: number, resource: Partial<InsertResource>): Promise<Resource>;
  deleteResource(id: number): Promise<void>;
  getResources(): Promise<Resource[]>;
  getResource(id: number): Promise<Resource | undefined>;
  getResourcesByType(type: string): Promise<Resource[]>;
}

export class DatabaseStorage implements IStorage {
  // User methods
  async getUser(id: number): Promise<User | undefined> {
    const [user] = await db.select().from(users).where(eq(users.id, id));
    return user || undefined;
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    const [user] = await db.select().from(users).where(eq(users.username, username));
    return user || undefined;
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const [user] = await db.insert(users).values(insertUser).returning();
    return user;
  }

  // Contact submission methods
  async createContactSubmission(submission: InsertContactSubmission): Promise<ContactSubmission> {
    const [contactSubmission] = await db.insert(contactSubmissions).values(submission).returning();
    return contactSubmission;
  }

  async getContactSubmissions(): Promise<ContactSubmission[]> {
    return await db.select().from(contactSubmissions);
  }

  // Speed test methods
  async createSpeedTestResult(result: InsertSpeedTest): Promise<SpeedTestResult> {
    const [speedTestResult] = await db.insert(speedTestResults).values(result).returning();
    return speedTestResult;
  }

  async getSpeedTestResults(): Promise<SpeedTestResult[]> {
    return await db.select().from(speedTestResults);
  }

  async getSpeedTestByUrl(url: string): Promise<SpeedTestResult | undefined> {
    const [result] = await db.select().from(speedTestResults).where(eq(speedTestResults.url, url));
    return result || undefined;
  }

  // Blog post methods
  async createBlogPost(post: InsertBlogPost): Promise<BlogPost> {
    const [blogPost] = await db.insert(blogPosts).values(post).returning();
    return blogPost;
  }

  async updateBlogPost(id: number, post: Partial<InsertBlogPost>): Promise<BlogPost> {
    const [updated] = await db.update(blogPosts).set(post).where(eq(blogPosts.id, id)).returning();
    return updated;
  }

  async deleteBlogPost(id: number): Promise<void> {
    await db.delete(blogPosts).where(eq(blogPosts.id, id));
  }

  async getBlogPosts(): Promise<BlogPost[]> {
    return await db.select().from(blogPosts);
  }

  async getBlogPost(id: number): Promise<BlogPost | undefined> {
    const [post] = await db.select().from(blogPosts).where(eq(blogPosts.id, id));
    return post || undefined;
  }

  async getBlogPostBySlug(slug: string): Promise<BlogPost | undefined> {
    const [post] = await db.select().from(blogPosts).where(eq(blogPosts.slug, slug));
    return post || undefined;
  }

  // Case study methods
  async createCaseStudy(caseStudy: InsertCaseStudy): Promise<CaseStudy> {
    const [created] = await db.insert(caseStudies).values(caseStudy).returning();
    return created;
  }

  async updateCaseStudy(id: number, caseStudy: Partial<InsertCaseStudy>): Promise<CaseStudy> {
    const [updated] = await db.update(caseStudies).set(caseStudy).where(eq(caseStudies.id, id)).returning();
    return updated;
  }

  async deleteCaseStudy(id: number): Promise<void> {
    await db.delete(caseStudies).where(eq(caseStudies.id, id));
  }

  async getCaseStudies(): Promise<CaseStudy[]> {
    return await db.select().from(caseStudies);
  }

  async getCaseStudy(id: number): Promise<CaseStudy | undefined> {
    const [caseStudy] = await db.select().from(caseStudies).where(eq(caseStudies.id, id));
    return caseStudy || undefined;
  }

  // Resource methods
  async createResource(resource: InsertResource): Promise<Resource> {
    const [created] = await db.insert(resources).values(resource).returning();
    return created;
  }

  async updateResource(id: number, resource: Partial<InsertResource>): Promise<Resource> {
    const [updated] = await db.update(resources).set(resource).where(eq(resources.id, id)).returning();
    return updated;
  }

  async deleteResource(id: number): Promise<void> {
    await db.delete(resources).where(eq(resources.id, id));
  }

  async getResources(): Promise<Resource[]> {
    return await db.select().from(resources);
  }

  async getResource(id: number): Promise<Resource | undefined> {
    const [resource] = await db.select().from(resources).where(eq(resources.id, id));
    return resource || undefined;
  }

  async getResourcesByType(type: string): Promise<Resource[]> {
    return await db.select().from(resources).where(eq(resources.type, type));
  }
}

export const storage = new DatabaseStorage();