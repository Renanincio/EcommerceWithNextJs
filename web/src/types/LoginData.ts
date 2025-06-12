import { loginSchema } from "@/schemas/loginSchema";
import { z } from "zod";

export type LoginZod = z.infer<typeof loginSchema>;