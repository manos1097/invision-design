import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { selectAllUsers, selectAllUserIds } from './usersSlice'
import { UserRow } from './UserRow'
import { CheckBox } from '../ui/CheckBox/CheckBox'
import { allCheckboxesChecked, allCheckboxesUnchecked } from '../users/tableSelectionsSlice'

export const UsersList = () => {
  const dispatch = useDispatch()
  const users = useSelector(selectAllUsers)
  const allUserIds = useSelector(selectAllUserIds)
  
  let usersRowsMarkup
  if (users.users) {
    usersRowsMarkup = users.users.map(user => (
      <UserRow key={user.id} user={user}/>
    ))
  }

  let selectedCountMarkup
  const selectedCount = useSelector(state => state.selections.ids).length
  if (selectedCount) {
    selectedCountMarkup = <p>{selectedCount} selected <img className="questionmark-icon" src="img/Questionmark.svg" alt="Hint icon"/></p>
  }

  const handleMainCheckboxToggle = (checked) => {
    if (checked) {
      dispatch(allCheckboxesChecked({ids: allUserIds}))
    }else {
      dispatch(allCheckboxesUnchecked({ids: allUserIds}))
    }
  }

  return (
    <section className="users-list">
      <div className="table-top">
        <h2>Users</h2>
        {selectedCountMarkup}
      </div>
      <table className="table">
      <thead>
        <tr>
          <th className="text-center" scope="col"><CheckBox changeCheckboxStatus={handleMainCheckboxToggle} /></th>
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
