'use client'

import NavBarItem from './NavBarItem'

export default function NavBar() {
  return (
    <div className='flex navbar p-4 lg:text-lg justify-center gap-6'>
      <NavBarItem
        title = "Trending"
        routerParam='trending'
      />

      <NavBarItem
        title='Top Rated'
        routerParam='topRated'
      />

    </div>
  )
}
