import { Hono } from "hono";
import { serveStatic } from "hono/bun";
import { env } from "@/utils/env";

const app = new Hono();

app.get("/api", async c => c.json({ message: "Hello, from the API!" }));
app.get("/api/health", async c => c.json({ healthy: true }));
app.use("/*", serveStatic({ root: "./dist" }));

console.log(`🚀 Listening on port ${env.PORT}`);

export default {
  port: env.PORT,
  fetch: app.fetch,
};
