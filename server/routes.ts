import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertContactSubmissionSchema, insertSpeedTestSchema } from "@shared/schema";
import { z } from "zod";

export async function registerRoutes(app: Express): Promise<Server> {
  // Contact form submission
  app.post("/api/contact", async (req, res) => {
    try {
      const validatedData = insertContactSubmissionSchema.parse(req.body);
      const submission = await storage.createContactSubmission(validatedData);
      
      res.json({ 
        success: true, 
        message: "Formulario enviado correctamente. Te contactaremos en 24 horas.",
        id: submission.id 
      });
    } catch (error) {
      if (error instanceof z.ZodError) {
        res.status(400).json({ 
          success: false, 
          message: "Datos del formulario inválidos",
          errors: error.errors 
        });
      } else {
        res.status(500).json({ 
          success: false, 
          message: "Error interno del servidor" 
        });
      }
    }
  });

  // Speed test submission
  app.post("/api/speed-test", async (req, res) => {
    try {
      const validatedData = insertSpeedTestSchema.parse(req.body);
      
      // Simulate a real speed test with realistic values
      const mockResults = {
        ...validatedData,
        lighthouseScore: Math.floor(Math.random() * 40) + 30, // 30-70 range
        lcp: (Math.random() * 3 + 1.5).toFixed(1) + "s", // 1.5-4.5s
        fid: Math.floor(Math.random() * 150) + 50 + "ms", // 50-200ms
        cls: (Math.random() * 0.3).toFixed(3), // 0-0.3
      };
      
      const result = await storage.createSpeedTestResult(mockResults);
      
      res.json({ 
        success: true, 
        data: result,
        recommendations: [
          "Optimizar imágenes con formatos WebP",
          "Implementar lazy loading para imágenes",
          "Minificar CSS y JavaScript",
          "Configurar caché del navegador",
          "Reducir el tamaño de las fuentes"
        ]
      });
    } catch (error) {
      if (error instanceof z.ZodError) {
        res.status(400).json({ 
          success: false, 
          message: "URL inválida",
          errors: error.errors 
        });
      } else {
        res.status(500).json({ 
          success: false, 
          message: "Error en el análisis de velocidad" 
        });
      }
    }
  });

  // Get contact submissions (for admin purposes)
  app.get("/api/contact", async (req, res) => {
    try {
      const submissions = await storage.getContactSubmissions();
      res.json({ success: true, data: submissions });
    } catch (error) {
      res.status(500).json({ 
        success: false, 
        message: "Error al obtener envíos" 
      });
    }
  });

  // Get speed test results
  app.get("/api/speed-test", async (req, res) => {
    try {
      const results = await storage.getSpeedTestResults();
      res.json({ success: true, data: results });
    } catch (error) {
      res.status(500).json({ 
        success: false, 
        message: "Error al obtener resultados" 
      });
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}
