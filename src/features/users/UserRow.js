import React from 'react'
import { useDispatch } from 'react-redux'
import {  updateUser } from './usersSlice'
import { Switch } from '../ui/Switch/Switch'
import { TypeBox } from '../ui/TypeBox/TypeBox'
import { CheckBox } from '../ui/CheckBox/CheckBox'

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
  
  return (
    <tr>
      <td className="text-center"><CheckBox /></td>
      <td><TypeBox text={typeLabel} /></td>
      <td>{ name }</td>
      <td>{ email }</td>
      <td>{ phone }</td>
      <td className="text-center"><Switch checked={active} handleToggle={handleToggle} /></td>
    </tr>
  )
}
