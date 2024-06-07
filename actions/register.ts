"use server";

import { RegisterSchema } from "@/schemas";
import * as z from "zod";
import bcrypt from "bcrypt";
import { db } from "@/lib/db";
import { getUserByEmail } from "@/data/user";

export async function register(values: z.infer<typeof RegisterSchema>) {
  const validateFields = RegisterSchema.safeParse(values);

  if (!validateFields.success) return { error: "Credenciais Inválidas" };

  const { email, name, passsword } = validateFields.data;
  const hashedPassword = await bcrypt.hash(passsword, 8);

  const existingUser = await getUserByEmail(email);

  if (existingUser) return { error: "Credenciais Inválidas" };

  await db.user.create({
    data: {
      name,
      email,
      password: hashedPassword,
    },
  });

  // verificaçao de email

  return { success: "Usuário criado!" };
}
