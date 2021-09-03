import React from 'react'

export default function NavLink({ text, url }) {
  return (
    <a className="px-3 py-1 hover:bg-gray-300 rounded" href={url}>{text}</a>
  )
}