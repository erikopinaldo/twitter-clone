import { createSlice } from '@reduxjs/toolkit'

const initialState = [
    { id: '0', name: 'Tianna Jenkins', username: "@tjenkins" }
]

const currentUsersSlice = createSlice({
    name: 'currentUser',
    initialState,
    reducers: {
        currentUserSelected: {
            reducer(state, action) {
                return action.payload
            },
        }
    }
})

export const { currentUserSelected } = currentUsersSlice.actions

export default currentUsersSlice.reducer