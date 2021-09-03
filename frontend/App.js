import React from 'react'
import { QueryClient, QueryClientProvider } from 'react-query'
import Button from './components/Button'
import Navbar from './components/nav/Navbar'
import ThingList from './components/things/ThingList'

export default function App() {
  const queryClient = new QueryClient()

  return (
    <QueryClientProvider client={queryClient}>
        <Navbar />

      <div className="container">
        <div className="my-5 text-center">
          <Button text="Click me" onClick={(e) => alert("test")} />
        </div>

        <ThingList />
      </div>
    </QueryClientProvider>
  )
}