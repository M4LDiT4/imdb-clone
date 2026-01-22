import { z } from "zod";

/** Base CDN for TMDB images */
const TMDB_IMAGE_BASE = "https://image.tmdb.org/t/p/w500";

/**
 * Single movie / tv item from TMDB
 */
export const TMDBItemSchema = z.object({
  id: z.number(),

  // Movies use `title`, TV uses `name`
  title: z.string().optional(),
  name: z.string().optional(),

  overview: z.string().default(""),

  // Convert path → full CDN url
  poster_path: z.string().nullable().transform((path) =>
    path ? `${TMDB_IMAGE_BASE}${path}` : null
  ),

  vote_average: z.number(),
  vote_count: z.number().default(0),

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
