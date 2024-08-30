import { z } from "zod";

const envSchema = z.object({
  NODE_ENV: z
    .enum(["development", "production", "test"])
    .default("development"),
  PORT: z.string().default("3210"),
  APP_URL: z.string().default("http://localhost:3000"),
});

type EnvType = z.infer<typeof envSchema>;

function validateEnv(): EnvType {
  const envObj = {
    NODE_ENV: process.env.NODE_ENV,
    PORT: process.env.PORT,
    APP_URL: process.env.APP_URL,
  };

  const result = envSchema.safeParse(envObj);

  if (!result.success) {
    console.error(
      "❌ Invalid environment variables:",
      JSON.stringify(result.error.format(), null, 4),
    );
    process.exit(1);
  }

  return result.data;
}

export const env = validateEnv();
