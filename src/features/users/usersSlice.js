import { createSlice } from '@reduxjs/toolkit'

const initialState = [
    { id: '0', name: 'Tianna Jenkins', username: "@tjenkins" },
    { id: '1', name: 'Kevin Grant', username: "@kgrant" },
    { id: '2', name: 'Madison Price', username: "@mprice" }
]

const usersSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {}
})

export default usersSlice.reducer