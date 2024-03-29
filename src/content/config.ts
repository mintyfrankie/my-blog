import { defineCollection, z } from 'astro:content'

const blogCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    filename: z.string(),
    isPublishable: z.boolean().default(false),
    description: z.string(),
    isTranslated: z.boolean().default(false),
    lang: z.enum(['en', 'fr', 'zh']),
    tags: z.array(z.string()).optional(),
    image: z.string().optional(),
    date: z.date(),
  }),
})

export const collections = {
  blog: blogCollection,
}
