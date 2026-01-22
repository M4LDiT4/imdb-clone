import { z } from "zod";

const TMDB_IMAGE_BASE = "https://image.tmdb.org/t/p/w500";

/**
 * Raw result from /search/multi
 */
export const TMDBSearchRawItemSchema = z.discriminatedUnion("media_type", [
  // MOVIE
  z.object({
    media_type: z.literal("movie"),
    id: z.number(),
    title: z.string(),
    original_title: z.string().optional(),
    overview: z.string().optional().default(""),
    poster_path: z.string().nullable(),
    vote_average: z.number(),
    vote_count: z.number(),
    release_date: z.string().nullable(),
  }),

  // TV
  z.object({
    media_type: z.literal("tv"),
    id: z.number(),
    name: z.string(),
    original_name: z.string().optional(),
    overview: z.string().optional().default(""),
    poster_path: z.string().nullable(),
    vote_average: z.number(),
    vote_count: z.number(),
    first_air_date: z.string().nullable(),
  }),

  // PERSON
  z.object({
    media_type: z.literal("person"),
    id: z.number(),
    name: z.string(),
    profile_path: z.string().nullable(),
    popularity: z.number(),
  }),
]);

export const TMDBSearchItemSchema =
  TMDBSearchRawItemSchema.transform((item) => {
    if (item.media_type === "movie") {
      return {
        id: item.id,
        type: "movie" as const,
        title: item.title,
        overview: item.overview ?? "",
        image: item.poster_path
          ? `${TMDB_IMAGE_BASE}${item.poster_path}`
          : null,
        rating: item.vote_average,
        date: item.release_date,
      };
    }

    if (item.media_type === "tv") {
      return {
        id: item.id,
        type: "tv" as const,
        title: item.name,
        overview: item.overview ?? "",
        image: item.poster_path
          ? `${TMDB_IMAGE_BASE}${item.poster_path}`
          : null,
        rating: item.vote_average,
        date: item.first_air_date,
      };
    }

    // person
    return {
      id: item.id,
      type: "person" as const,
      title: item.name,
      overview: "",
      image: item.profile_path
        ? `${TMDB_IMAGE_BASE}${item.profile_path}`
        : null,
      rating: null,
      date: null,
    };
  });

export const TMDBSearchResponseSchema = z.object({
  page: z.number(),
  total_pages: z.number(),
  total_results: z.number(),
  results: z.array(TMDBSearchItemSchema),
});

export type TMDBSearchItem = z.infer<typeof TMDBSearchItemSchema>;
export type TMDBSearchResponse = z.infer<typeof TMDBSearchResponseSchema>;

