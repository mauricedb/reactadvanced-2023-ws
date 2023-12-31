import { ParentComponent } from './parent-component'
import { ChildComponent } from './child-component'

export default function ServerOrClient() {
  console.log('Rendering Page')

  return (
    <main className="bg-blue-400 p-12">
      <h1 className="my-6 text-4xl font-bold">
        Render on the server or client
      </h1>
      <ParentComponent>
        <ChildComponent />
      </ParentComponent>
    </main>
  )
}
