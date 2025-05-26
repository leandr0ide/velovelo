import { 
  users, 
  contactSubmissions, 
  speedTestResults,
  type User, 
  type InsertUser, 
  type ContactSubmission, 
  type InsertContactSubmission,
  type SpeedTestResult,
  type InsertSpeedTest
} from "@shared/schema";

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
}

export class MemStorage implements IStorage {
  private users: Map<number, User>;
  private contactSubmissions: Map<number, ContactSubmission>;
  private speedTestResults: Map<number, SpeedTestResult>;
  private currentUserId: number;
  private currentContactId: number;
  private currentSpeedTestId: number;

  constructor() {
    this.users = new Map();
    this.contactSubmissions = new Map();
    this.speedTestResults = new Map();
    this.currentUserId = 1;
    this.currentContactId = 1;
    this.currentSpeedTestId = 1;
  }

  async getUser(id: number): Promise<User | undefined> {
    return this.users.get(id);
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    return Array.from(this.users.values()).find(
      (user) => user.username === username,
    );
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const id = this.currentUserId++;
    const user: User = { ...insertUser, id };
    this.users.set(id, user);
    return user;
  }

  async createContactSubmission(submission: InsertContactSubmission): Promise<ContactSubmission> {
    const id = this.currentContactId++;
    const contactSubmission: ContactSubmission = {
      ...submission,
      id,
      createdAt: new Date(),
      comments: submission.comments || null,
      company: submission.company || null,
      objective: submission.objective || null
    };
    this.contactSubmissions.set(id, contactSubmission);
    return contactSubmission;
  }

  async getContactSubmissions(): Promise<ContactSubmission[]> {
    return Array.from(this.contactSubmissions.values()).sort(
      (a, b) => b.createdAt.getTime() - a.createdAt.getTime()
    );
  }

  async createSpeedTestResult(result: InsertSpeedTest): Promise<SpeedTestResult> {
    const id = this.currentSpeedTestId++;
    const speedTestResult: SpeedTestResult = {
      ...result,
      id,
      createdAt: new Date(),
      lighthouseScore: result.lighthouseScore || null,
      lcp: result.lcp || null,
      fid: result.fid || null,
      cls: result.cls || null
    };
    this.speedTestResults.set(id, speedTestResult);
    return speedTestResult;
  }

  async getSpeedTestResults(): Promise<SpeedTestResult[]> {
    return Array.from(this.speedTestResults.values()).sort(
      (a, b) => b.createdAt.getTime() - a.createdAt.getTime()
    );
  }

  async getSpeedTestByUrl(url: string): Promise<SpeedTestResult | undefined> {
    return Array.from(this.speedTestResults.values()).find(
      result => result.url === url
    );
  }
}

export const storage = new MemStorage();
