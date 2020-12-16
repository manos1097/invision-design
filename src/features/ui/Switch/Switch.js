import React from 'react'

import './switch.css'

export const Switch = ({ checked, handleToggle }) => {

  return (
    <label className="switch">
      <input type="checkbox" onChange={handleToggle} checked={checked} />
      <span className="slider round"></span>
    </label>
  )
}
