"use server";

import { LoginScheam } from "@/schemas";
import * as z from "zod";

export async function login(values: z.infer<typeof LoginScheam>) {
  const validateFields = LoginScheam.safeParse(values);

  if (!validateFields.success) return { error: "Credenciais Inválidas" };

  return { success: "E-mail enviado!" };
}
