import React from 'react'

import './checkbox.css'

export const CheckBox = ({ checked, id, changeCheckboxStatus }) => {
  return (
    <label className="checkbox-ui-wrapper">
      <input type="checkbox" data-id={id} checked={checked} onChange={e => changeCheckboxStatus(e.target.checked, id)} />
      <span className="checkmark"></span>
    </label>
  )
}
