import { z } from "zod";

/**
 * Single movie / tv item from TMDB
 */
export const TMDBItemSchema = z.object({
  id: z.number(),

  // Movies use `title`, TV uses `name`
  title: z.string().optional(),
  name: z.string().optional(),

  overview: z.string().default(""),
  poster_path: z.string().nullable(),

  vote_average: z.number(),
  vote_count: z.number().optional(),

  release_date: z.string().optional(),
  first_air_date: z.string().optional(),
});

/**
 * Full TMDB list response
 */
export const TMDBResponseSchema = z.object({
  page: z.number(),
  results: z.array(TMDBItemSchema),
  total_pages: z.number(),
  total_results: z.number(),
});

export type TMDBItem = z.infer<typeof TMDBItemSchema>;
export type TMDBResponse = z.infer<typeof TMDBResponseSchema>;
