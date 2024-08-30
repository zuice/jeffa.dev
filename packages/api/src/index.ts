import { Hono } from "hono";
import { serveStatic } from "hono/bun";
import { env } from "@/utils/env";

const app = new Hono();

// Serve static files from the 'dist' directory
app.use("/*", serveStatic({ root: "./dist" }));
app.get("/api", async c => c.json({ message: "Hello, from the API!" }));

console.log(`🚀 Listening on port ${env.PORT}`);

export default {
  port: env.PORT,
  fetch: app.fetch,
};
