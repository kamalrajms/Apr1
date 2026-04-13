import React from 'react'

export default function ContextField() {
  return (
    <div>
        <label htmlFor="name">name</label>
        <input type="text" />
      <ContextField/>
    </div>
  )
}
