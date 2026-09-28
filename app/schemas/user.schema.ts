import {z} from 'zod'

export const registerUserSchemas = z.object({
    nome: z.string().min(2, "O nome deve ter pelo menos 2 caracteres").max(100, "O nome deve ter no máximo 100 caracteres"),
    imagem: z.string().max(255).optional(),
    email: z.string().email("Email inválido").max(255, "O Email deve ter no maximo 255 caracteres"),
    senha: z.string().min(8, "a senha deve ter no minimo 8 caracteres").max(100, "a senha deve ter no maximo 100 caracteres")

});

export const loginUserSchemas = z.object({
    email: z.string().email("Email invalido").max(222, "o email deve ter no maximo 255 caracteres"),
    senha: z.string().min(1, "a senha é obrigatória!")
});

export type RegiterUserInput = z.infer<typeof registerUserSchemas>
export type LoginUserSchemas = z.infer<typeof loginUserSchemas>