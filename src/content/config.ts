import { defineCollection, z } from 'astro:content';

const reviews = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    product: z.string(),
    rating: z.number().min(0).max(5),
    amazonUrl: z.string().url(),
    amazonPrice: z.string().optional(),
    pros: z.array(z.string()),
    cons: z.array(z.string()),
    verdict: z.string(),
    audience: z.array(z.enum(['barbers', 'at-home'])),
    heroImage: z.string().optional(),
  }),
});

const vs = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    productA: z.string(),
    productB: z.string(),
    productAUrl: z.string().url(),
    productBUrl: z.string().url(),
    productAPrice: z.string().optional(),
    productBPrice: z.string().optional(),
    winner: z.string(),
    winnerReason: z.string(),
    audience: z.array(z.enum(['barbers', 'at-home'])),
  }),
});

const howTo = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    difficulty: z.enum(['Easy', 'Medium', 'Hard']),
    timeEstimate: z.string(),
    toolsNeeded: z.array(z.string()),
    audience: z.array(z.enum(['barbers', 'at-home'])),
    relatedProducts: z.array(z.object({
      name: z.string(),
      url: z.string(),
    })).optional(),
  }),
});

const accessories = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    category: z.string(),
    audience: z.array(z.enum(['barbers', 'at-home'])),
    topPick: z.object({
      name: z.string(),
      url: z.string().url(),
      price: z.string().optional(),
      rating: z.number().min(0).max(5),
    }).optional(),
  }),
});

const troubleshooting = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    problem: z.string(),
    quickFix: z.string(),
    severity: z.enum(['Low', 'Medium', 'High']),
    relatedProducts: z.array(z.object({
      name: z.string(),
      url: z.string(),
    })).optional(),
  }),
});

const blog = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    audience: z.array(z.enum(['barbers', 'at-home'])),
    featured: z.boolean().optional(),
  }),
});

export const collections = { reviews, vs, howTo, accessories, troubleshooting, blog };
