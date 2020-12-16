import React, { useState } from 'react'

import './checkbox.css'

export const CheckBox = ({ text }) => {
  const [isChecked, setIsChecked] = useState(false)

  return (
    <label className="checkbox-ui-wrapper">
      <input type="checkbox" checked={isChecked} onChange={() => setIsChecked(!isChecked)} />
      <span className="checkmark"></span>
    </label>
  )
}
