import Link from "next/link"
import { TMDBItem } from "../lib/schemas/tmdb.schema"
import Image from "next/image"
import { FiThumbsUp } from "react-icons/fi"

type CardProps = {
  data: TMDBItem
}

export default function Card({data} :CardProps) {
  return (
    <div className="group cursor-pointer sm:hover:shadow-slate-400 sm:shadow-md rounded-lg sm:border sm:boder-slate-400 sm:m-2 transition-shadow duration-200">
        <Link href = {`/movie/${data.id}`}>
          <Image
            src={data.poster_path ?? ""}
            alt="poster image"
            height={300}
            width={500}
            className="sm:rounded-t-lg group-hover:opacity-75 transition-opacity duration-300"
          />
          <div className="p-2">
            <p className="line-clamp-2 text-md"> 
              {data.overview}
            </p>
            <h2 className="text-lg font-bold truncate">
              {data.title || data.name}
            </h2>
            <p className="flex items-center">
              {
                data.release_date || data.first_air_date || "N/A"
              }
              <FiThumbsUp className="h-5 ml-3 mr-1"/>
              {data.vote_count}
            </p>
          </div>
        </Link>
    </div>
  )
}
