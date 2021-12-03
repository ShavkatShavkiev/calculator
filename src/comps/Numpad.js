import React from 'react'

export default function Numpad({num, handleClick}) {
  return (
    <button onClick={e => handleClick(num)}>
      {num}
    </button>
  )
}
