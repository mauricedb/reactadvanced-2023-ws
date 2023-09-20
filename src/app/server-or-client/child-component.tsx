import 'server-only'

import { sleep } from '@/lib/utils'

export async function ChildComponent() {
  console.log('Rendering Child Component')

  await sleep(100)

  return (
    <main className="bg-red-400 p-12">
      <h2 className="my-6 text-4xl font-bold">Child Component</h2>
    </main>
  )
}
