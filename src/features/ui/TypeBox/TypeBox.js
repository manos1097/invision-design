import React from 'react'

import './typebox.css'

export const TypeBox = ({ text }) => {
  let color = '';

  switch(text) {
    case 'EM':
      color = '#8A98CA'
      break
    case 'ST':
      color = '#F2AC57'
      break
    case 'GU':
      color = '#CACACA'
      break
    case 'SU':
      color = '#B9E5E5'
      break
    default:
      color = '#E17878'
      break
  }

  return (
    <span className="type-box" style={{backgroundColor: color}}>{text}</span>
  )
}
