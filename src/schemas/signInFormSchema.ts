import { z } from "zod";

export const signInFormSchema = z.object({
  email: z.string().email({ message: "Enter the correct email" }),
  password: z.string().min(4, { message: "Enter the correct password" }),
});

export type SignInFormValues = z.infer<typeof signInFormSchema>;

export type SignInFormError = z.ZodFormattedError<SignInFormValues, string>;
