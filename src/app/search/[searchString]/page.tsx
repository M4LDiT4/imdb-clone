import Results from '@/src/components/Results';
import { searchItemToTMDBItem } from '@/src/lib/adapters/tmdb_adapter';
import { TMDBSearchResponseSchema } from '@/src/lib/schemas/TmdbSearch';

type SearchPageProps = {
  params: Promise<{
    searchString: string
  }>
}

export default async function SearchPage({params}: SearchPageProps) {
  const {searchString} = await params;

  if(!searchString){
    throw new Error("No search string provided")
  }

  const res = await fetch(`https://api.themoviedb.org/3/search/multi?api_key=${process.env.TMDB_API_KEY}&&query=${searchString}&language=en-US&page=1&include_adult=false`);

  const json = await res.json();

  if ("success" in json && json.success === false) {
    throw new Error(json.status_message || "TMDB search failed");
  }

  const searchResult = TMDBSearchResponseSchema.safeParse(json);

  if(!searchResult.success){
    throw new Error("Invalid search result data");
  }

  const results = searchResult.data.results;

  const normalized = results
    .map(r => searchItemToTMDBItem(r))
  return (
    <div>
      {
        normalized.length === 0 
        ? <h1 className = "text-center pt-6">
          No results found
        </h1>
        : <Results results = {normalized}/>
      }
    </div>
  )
}
