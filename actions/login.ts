"use server";

import { signIn } from "@/auth";
import { DEFAULT_LOGIN_REDIRECT } from "@/routes";
import { LoginSchema } from "@/schemas";
import { AuthError } from "next-auth";
import * as z from "zod";

export async function login(values: z.infer<typeof LoginSchema>) {
  const validateFields = LoginSchema.safeParse(values);

  if (!validateFields.success) return { error: "Credenciais Inválidas" };

  const { email, passsword } = validateFields.data;

  try {
    await signIn("credentials", {
      email,
      passsword,
      redirecTo: DEFAULT_LOGIN_REDIRECT,
    });
  } catch (error) {
    if (error instanceof AuthError) {
      switch (error.type) {
        case "CredentialsSignin":
          return { error: "Credenciais inválidas" };
        default:
          return { error: "Credenciais inválidas" };
      }
    }
    throw error;
  }
}
