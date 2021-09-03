import React from 'react'
import useThings from './useThings'

export default function ThingList() {
  const { query, things } = useThings()

  return (
    <ul className="my-3">
      {query.isFetching ? 'loading...' : null}
      {things.map(thing => <li key={thing.id}>{thing.color}</li>)}
    </ul>
  )
}