import { configureStore } from '@reduxjs/toolkit';
import usersReducer from '../features/users/usersSlice'
import tableSelectionsReducer from '../features/users/tableSelectionsSlice'

export default configureStore({
  reducer: {
    users: usersReducer,
    selections: tableSelectionsReducer
  },
});
