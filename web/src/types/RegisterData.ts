import { z } from "zod";
import { registerSchema } from "@/schemas/registerSchema";

export type RegisterData = z.infer<typeof registerSchema>;