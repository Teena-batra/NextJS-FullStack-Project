import {z} from "zod";

export const MessageSchema = z.object({
    content: z
    .string()
    .min(10, "Content must be of atleast 10 characters")
    .max(300, "Content must not that 300 characters long")
})