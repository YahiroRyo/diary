import { defineCollection, z } from "astro:content";

const Diary = z.object({
  title: z.string(),
});

export type Diary = { title: string }

const diary = defineCollection({
  schema: Diary,
});

export const collections = { diary };
