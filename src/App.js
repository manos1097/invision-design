import React from 'react';
import { useDispatch } from 'react-redux'
import { fetchUsers } from './features/users/usersSlice'

import './App.css';

import { UsersList } from './features/users/UsersList'

function App() {
  const dispatch = useDispatch()
  dispatch(fetchUsers())

  return (
    <div className="App">
      <UsersList />
    </div>
  );
}

export default App;
