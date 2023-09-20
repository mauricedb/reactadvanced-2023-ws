'use client'

import { PropsWithChildren } from 'react'

export function ParentComponent({ children }: PropsWithChildren) {
  console.log('Rendering Parent Component')

  return (
    <main className="bg-green-400 p-12">
      <h2
        className="my-6 text-4xl font-bold"
        onClick={() => console.log('Click')}
      >
        Parent Component
      </h2>
      {children}
    </main>
  )
}
