import { TMDBItem } from "../lib/schemas/tmdb.schema"

type ResultsProps = {
  results: TMDBItem[]
}

export default function Results({ results }: ResultsProps) {
  return (
    <div>
      {
        results.map((item) => (
          <div key = {item.id}>
            <h2>{item.title}</h2>
          </div>
        ))
      }
    </div>
  )
}
