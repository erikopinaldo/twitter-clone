import { configureStore } from '@reduxjs/toolkit'

import postsReducer from '../features/posts/postsSlice'
import usersReducer from '../features/users/usersSlice'
import currentUserReducer from '../features/currentUser/currentUsersSlice'
import currentTimelineViewReducer from '../features/currentTimelineView/currentTimelineViewSlice'
  
export default configureStore({
  reducer: {
    posts: postsReducer,
    users: usersReducer,
    currentUser: currentUserReducer,
    currentTimelineView: currentTimelineViewReducer,
  }
})