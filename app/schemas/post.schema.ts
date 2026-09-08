import {z} from 'zod'

export const createPostSchema = z.object ({
    titulo: z.string().min(1).max(255),
    conteudo: z.string().min(1),
    imagem: z.string().max(255).optional(),
});

export const updatePostSchema = z.object({
    titulo: z.string().min(1).max(255).optional(),
    conteudo: z.string().min(1).max(255).optional(),
    imagem: z.string().max(255).optional()
})

export type CreatePostInput = z.infer<typeof createPostSchema>;