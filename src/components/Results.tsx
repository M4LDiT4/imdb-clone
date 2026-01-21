import { TMDBItem } from "../lib/schemas/tmdb.schema"
import Card from "./Card"

type ResultsProps = {
  results: TMDBItem[]
}

export default function Results({ results }: ResultsProps) {
  return (
    <div className="sm:grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 max-w-6xl mx-auto py-4">
      {
        results.map((item) => (
          <Card 
            key = {item.id}
            data={item}
          />
        ))
      }
    </div>
  )
}
