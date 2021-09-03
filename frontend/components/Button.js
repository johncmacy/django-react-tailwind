import React from "react"

export default function Button({ text, onClick }) {
  return (
    <button type="button" className="btn btn-primary" onClick={onClick}>
      {text}
      <i className="fas fa-arrow-right ml-4"></i>
      </button>
  )
}