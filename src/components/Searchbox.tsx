'use client'
import { useRouter } from 'next/navigation';
import { FormEvent, useState } from 'react'

export default function Searchbox() {
  const [query, setQuery] = useState('');

  const router = useRouter();

  const handleSubmit = (e : FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    router.push(`/search/${query}`);
  }

  return (
    <form className = "flex justify-center max-w-6xl mx-auto px-5"
      onSubmit = {handleSubmit}
    >
      <input 
        type="text" 
        placeholder = 'Search keywords...'
        className='w-full h-14 rounded-md placeholder-gray-500 outline-none bg-transparent flex-1'
        value={query}
        onChange = {
          (e) => setQuery(e.target.value)
        }
      />
      <button disabled = {query.trim() === ''} className='text-amber-600 disabled:text-gray-400 transition-colors duration-300'>
        Search
      </button>
    </form>
  );
}
