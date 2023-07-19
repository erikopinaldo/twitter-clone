import { configureStore } from '@reduxjs/toolkit'

import postsReducer from '../features/posts/postsSlice'
import usersReducer from '../features/users/usersSlice'
import currentUserReducer from '../features/currentUser/currentUsersSlice'

export default configureStore({
  reducer: {
    posts: postsReducer,
    users: usersReducer,
    currentUser: currentUserReducer,
  }
})