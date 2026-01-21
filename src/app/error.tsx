'use client'

import { useEffect } from "react";

type ErrorProps = {
  error: Error & { digest?: string };
  reset: () => void;
};

export default function error({error, reset} : ErrorProps) {

  useEffect(() => {
    console.error(error);
  });
  return (
    <div className="text-center mt-10">
      <h1>Something went wrong, Try again</h1>

      <button
        onClick = {reset}
        className="hover:text-amber-600"
      >
        Try again
      </button>
    </div>
  )
}
