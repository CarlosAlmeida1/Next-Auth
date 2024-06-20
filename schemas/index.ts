import * as z from "zod";

export const LoginSchema = z.object({
  email: z.string().email({
    message: "E-mail obrigatório",
  }),
  password: z.string().min(1, {
    message: "Senha obrigatório",
  }),
});

export const RegisterSchema = z.object({
  email: z.string().email({
    message: "E-mail obrigatório",
  }),
  password: z.string().min(6, {
    message: "Mínimo de 6 caracteres ",
  }),
  name: z.string().min(2, {
    message: "Nome obrigatório",
  }),
});
