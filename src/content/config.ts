import { z, defineCollection } from 'astro:content'

const blogCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    isDraft: z.boolean().default(false),
    lang: z.enum(['en', 'fr', 'zh']),
    tags: z.array(z.string()).optional(),
    image: z.string().optional(),
    date: z.string().transform((str) => new Date(str)),
  }),
})

export const collections = {
  blog: blogCollection,
}
