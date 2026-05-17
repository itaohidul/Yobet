import express from "express";
import path from "path";
import { createServer as createViteServer } from "vite";
import helmet from "helmet";
import cookieParser from "cookie-parser";

async function startServer() {
  const app = express();
  const PORT = 3000;

  // Security Implementation
  app.use(helmet({
    contentSecurityPolicy: {
      directives: {
        defaultSrc: ["'self'", "https://*", "http://*", "data:", "blob:"],
        scriptSrc: ["'self'", "'unsafe-inline'", "'unsafe-eval'", "https://*", "http://*"],
        styleSrc: ["'self'", "'unsafe-inline'", "https://fonts.googleapis.com", "https://*", "http://*"],
        fontSrc: ["'self'", "https://fonts.gstatic.com", "data:", "https://*", "http://*"],
        imgSrc: ["'self'", "data:", "https://*", "http://*"],
        connectSrc: ["'self'", "https://*", "http://*", "wss://*", "ws://*"],
        frameAncestors: ["*"], // Open as much as possible for preview environments
      },
    },
    crossOriginEmbedderPolicy: false,
    frameguard: false,
  }));

  app.use(cookieParser());
  app.use(express.json());

  // API Routes
  app.get("/api/health", (req, res) => {
    res.json({ status: "ok", timestamp: new Date().toISOString() });
  });

  // Vite middleware for development
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { 
        middlewareMode: true,
        hmr: process.env.DISABLE_HMR !== "true",
      },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), "dist");
    app.use(express.static(distPath));
    app.get("*", (req, res) => {
      res.sendFile(path.join(distPath, "index.html"));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`YoPoker Server running at http://localhost:${PORT}`);
  });
}

startServer();
