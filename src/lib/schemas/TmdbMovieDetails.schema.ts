import { z } from "zod";

export const TMDBGenreSchema = z.object({
  id: z.number(),
  name: z.string(),
});

export const TMDBMovieDetailSchema = z.object({
  adult: z.boolean(),
  backdrop_path: z.string().nullable(),
  budget: z.number(),

  genres: z.array(TMDBGenreSchema),

  homepage: z
  .string()
  .nullable()
  .or(z.literal(""))
  .transform(v => (v === "" ? null : v))
  .refine(
    v => v === null || v.startsWith("http"),
    { message: "Invalid homepage URL" }
  ),

  id: z.number(),
  imdb_id: z.string().nullable(),

  original_language: z.string(),
  original_title: z.string(),

  overview: z.string().default(""),

  popularity: z.number(),

  poster_path: z.string().nullable(),

  release_date: z.string().nullable(),

  revenue: z.number(),
  runtime: z.number().nullable(),

  status: z.string(),
  tagline: z.string().nullable(),

  title: z.string(),

  video: z.boolean(),

  vote_average: z.number().nullable(),
  vote_count: z.number().nullable(),
});

export type TMDBMovieDetail = z.infer<typeof TMDBMovieDetailSchema>;
