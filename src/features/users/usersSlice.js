import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
const axios = require('axios')

export const fetchUsers = createAsyncThunk('users/usersLoaded', async () => {
  const response = await fetch('http://manolis.users.challenge.dev.monospacelabs.com/users')
  return await response.json()
})

export const updateUser = createAsyncThunk('users/userUpdated', async updatedUser => {
  const response = await axios.put(`http://manolis.users.challenge.dev.monospacelabs.com/users/${updatedUser.id}`, {
    id: updatedUser.id,
    name: updatedUser.name,
    email: updatedUser.email,
    phone: updatedUser.phone,
    active: updatedUser.active,
    type: updatedUser.type
  })
  return await response.data
})

export const usersSlice = createSlice({
  name: 'users',
  initialState: {
    users: [],
    status: 'idle',
    error: null
  },
  reducers: {},
  extraReducers: {
    [fetchUsers.pending]: (state, action) => {
      state.status = 'loading'
    },
    [fetchUsers.fulfilled]: (state, action) => {
      state.status = 'succeeded'
      state.users = action.payload
    },
    [fetchUsers.rejected]: (state, action) => {
      state.status = 'failed'
      state.error = action.error.message
    },
    [updateUser.pending]: (state, action) => {
      state.status = 'loading'
    },
    [updateUser.fulfilled]: (state, action) => {
      state.status = 'succeeded'
      const index = state.users.findIndex(user => user.id === action.payload.id)
      state.users[index].active = action.payload.active
    },
    [updateUser.rejected]: (state, action) => {
      state.status = 'failed'
      state.error = action.error.message
    }
  }
});

export const { toggleStatus } = usersSlice.actions;

export const selectAllUsers = state => state.users
export const selectAllUserIds = state => {
  let ids = []
  state.users.users.forEach(user => ids.push(user.id))
  return ids
}

export default usersSlice.reducer;
