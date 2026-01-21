'use client';

import Link from 'next/link'
import { useSearchParams } from 'next/navigation';

type NavBarItemProps = {
  title: string,
  routerParam: string
}

export default function NavBarItem(props: NavBarItemProps) {
  const searchParams = useSearchParams();
  const genre = searchParams.get('genre');

  const isActive = genre && genre === props.routerParam;

  return (
    <div className={`
      hover:text-amber-600 font-semibold
      ${isActive 
        ? 'underline underline-offset-8 decoration-4 decoration-amber-500 rounded-lg'
        : ''
      }
    `}>
      <Link href={`/?genre=${props.routerParam}`}>
        {props.title}
      </Link>
    </div>
  )
}
