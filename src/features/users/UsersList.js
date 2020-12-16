import React from 'react'
import { useSelector } from 'react-redux'
import { selectAllUsers } from './usersSlice'
import { UserRow } from './UserRow'
import { CheckBox } from '../ui/CheckBox/CheckBox'

export const UsersList = () => {
  const users = useSelector(selectAllUsers)
  
  let usersRowsMarkup
  if (users.users) {
    usersRowsMarkup = users.users.map(user => (
      <UserRow key={user.id} user={user}/>
    ))
  }

  return (
    <section className="users-list">
      <div className="table-top">
        <h2>Users</h2>
        <p>2 selected <img className="questionmark-icon" src="img/Questionmark.svg" alt="Hint icon"/></p>
      </div>
      <table className="table">
      <thead>
        <tr>
          <th className="text-center" scope="col"><CheckBox /></th>
          <th scope="col">TYPE</th>
          <th scope="col">NAME</th>
          <th scope="col">EMAIL</th>
          <th scope="col">TELEPHONE</th>
          <th className="text-center" scope="col">STATUS</th>
        </tr>
      </thead>
      <tbody>
        {usersRowsMarkup}
      </tbody>
      </table>
    </section>
  )
}
