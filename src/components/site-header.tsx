import 'server-only'

import { MainNav } from '@/components/main-nav'
import { GenreLoader } from './genre-loader'

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 w-full border-b bg-background">
      <div className="container flex h-16">
        <MainNav genreSelector={<GenreLoader />} />
      </div>
    </header>
  )
}
