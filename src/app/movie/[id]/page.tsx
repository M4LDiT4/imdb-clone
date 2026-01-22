import { TMDBMovieDetailSchema } from '@/src/lib/schemas/TmdbMovieDetails.schema';
import Image from 'next/image';

type MoviePageProps = {
  params : Promise<{
    id: string
  }>
}

export default async function MoviePage({params}: MoviePageProps){
  const {id} = await params;

  const res = await fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=${process.env.TMDB_API_KEY}`);

  const json = await res.json();

  const data = TMDBMovieDetailSchema.safeParse(json);

  if(!data.success){
    throw new Error("Invalid movie data");
  }

  const movie = data.data;

  return (
    <div className='w-full'>
      <div className = "p-4 md:p-8 flex flex-col md:flex-row content-center max-w-6xl mx-auto md:space-x-6" >
        <Image
          src={`https://image.tmdb.org/t/p/original/${movie.backdrop_path || movie.poster_path || ''}`}
          alt='movie-backdrop'
          width={500}
          height={300}
          style={{maxWidth: '100%', height:'100%'}}
        />
        <div className='p-2 pt-0'>
          <h2 className='text-lg mb-3 font-bold'>{movie.title || movie.original_title}</h2>
          <p className = "text-lg mb-3">{movie.overview}</p>
          <p className = 'mb-3'>
            <span className='font-semibold mr-1'>Date released:</span>
            {movie.release_date}
          </p>
          <p className = 'mb-3'>
            <span className='font-semibold mr-1'>Rating:</span>
            {movie.vote_count}
          </p>
        </div>
      </div>
    </div>
  )
}
