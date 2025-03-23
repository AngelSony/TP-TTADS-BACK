import { z } from "zod";

const loginSchema = z.object({
  email: z.string().email(),
  password: z.string(),
});

export function validateLogin(input: unknown) {
  return loginSchema.safeParse(input);
}