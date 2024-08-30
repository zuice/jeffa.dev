import { z } from "zod";

const envSchema = z.object({
  API_URL: z.string().default("http://localhost:3210"),
});

type EnvType = z.infer<typeof envSchema>;

function validateEnv(): EnvType {
  const envObj = {
    API_URL: process.env.API_URL,
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
