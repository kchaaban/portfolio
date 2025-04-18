import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";

// Simple message interface for contact form
interface ContactMessage {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export async function registerRoutes(app: Express): Promise<Server> {
  // Contact form submission endpoint
  app.post("/api/contact", async (req, res) => {
    try {
      const { name, email, subject, message } = req.body as ContactMessage;
      
      // Basic validation
      if (!name || !email || !message) {
        return res.status(400).json({ message: "Missing required fields" });
      }
      
      // Validate email format
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(email)) {
        return res.status(400).json({ message: "Invalid email format" });
      }
      
      // In a real app, you'd save this to a database or send an email
      // For now, we'll just return a success message
      
      console.log("Contact form submission:", { name, email, subject, message });
      
      return res.status(200).json({ 
        message: "Message received successfully" 
      });
    } catch (error) {
      console.error("Error processing contact form:", error);
      return res.status(500).json({ message: "Internal server error" });
    }
  });

  // Serve the CV file (in a real app, this would be a static file)
  app.get("/api/cv", (req, res) => {
    res.status(200).json({
      name: "Alain Khaled CHAABAN",
      title: "Associate Professor",
      email: "chaaban.khaled@gmail.com",
      phone: "(966) 54-0946629",
      // This would include the full CV data
    });
  });

  const httpServer = createServer(app);
  return httpServer;
}
