import { ChildComponent } from './child-component'

export function ParentComponent() {
  return (
    <main className="bg-green-400 p-12">
      <h2 className="my-6 text-4xl font-bold">Parent Component</h2>
      <ChildComponent />
    </main>
  )
}
