import { TMDBItemSchema } from "../schemas/tmdb.schema";
import { TMDBSearchItem } from "../schemas/TmdbSearch";

export function searchItemToTMDBItem(item: TMDBSearchItem) {
  return TMDBItemSchema.parse({
    id: item.id,

    // movie & tv both map to title
    title: item.title,

    // no name in unified model
    name: undefined,

    overview: item.overview,

    // image already full url → strip base back to path-like shape
    poster_path: item.image,

    vote_average: item.rating ?? 0,
    vote_count: 0,

    release_date: item.type === "movie" ? item.date ?? undefined : undefined,
    first_air_date: item.type === "tv" ? item.date ?? undefined : undefined,
  });
}
