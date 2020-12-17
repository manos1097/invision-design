import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import {  updateUser } from './usersSlice'
import { Switch } from '../ui/Switch/Switch'
import { TypeBox } from '../ui/TypeBox/TypeBox'
import { CheckBox } from '../ui/CheckBox/CheckBox'
import { checkboxChecked, checkboxUnchecked } from './tableSelectionsSlice'

export const UserRow = (user) => {
  const { active, name, email, phone, type, id } = user.user
  const typeLabel = type.toUpperCase().slice(0,2)
  const dispatch = useDispatch()

  
  const handleToggle = () => {
    dispatch(updateUser({
      id,
      name,
      email,
      phone,
      type,
      active: !active
    }))
  }
  
  const handleCheckboxStatusChange = (checked, id) => {
    if (checked) {
      dispatch(checkboxChecked({id}))
    }else {
      dispatch(checkboxUnchecked({id}))
    }
  }
  
  let isChecked = false
  const selectionIds = useSelector(state => state.selections.ids)
  if (selectionIds.indexOf(id) !== -1) {
    isChecked = true
  }

  return (
    <tr>
      <td className="text-center"><CheckBox id={id} checked={isChecked} changeCheckboxStatus={handleCheckboxStatusChange} /></td>
      <td><TypeBox text={typeLabel} /></td>
      <td>{ name }</td>
      <td>{ email }</td>
      <td>{ phone }</td>
      <td className="text-center"><Switch checked={active} handleToggle={handleToggle} /></td>
    </tr>
  )
}
