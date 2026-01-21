import Results from "../components/Results";
import { TMDBResponseSchema } from "../lib/schemas/tmdb.schema";

type SearchParams = {
  genre?: string
};

type PageProps = {
  searchParams: Promise<SearchParams>;
};


const API_KEY = process.env.TMDB_API_KEY!;

export default async function Home({ searchParams }: PageProps) {

  const params = await searchParams; // next js suggests we wait for searchParams

  const genre =  params.genre || "trending";

  const endpoint =
    genre === "topRated" ? "/movie/top_rated" : "/trending/all/week";

  const url = `https://api.themoviedb.org/3${endpoint}?api_key=${API_KEY}&language=en-US&page=1`;

  const response = await fetch(url);

  if (!response.ok) {
    const text = await response.text();
    throw new Error(`TMDB error ${response.status}: ${text}`);
  }

  const json = await response.json();
  
  const parsed = TMDBResponseSchema.safeParse(json);

  if(!parsed.success){
    console.error(`TMDB response parse error: ${parsed.error.message}`);
    throw new Error("Invalid TMDB response");
  }

  const results = parsed.data.results;
  
  return <div>
    <Results results = {results}/>
  </div>;
}
