import React from 'react'

export default function Opps({op, handleClick}) {
  return (
    <button onClick={e => handleClick(op)}>
      {op}
    </button>
  )
}
