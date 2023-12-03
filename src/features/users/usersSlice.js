import { createSlice } from '@reduxjs/toolkit'

const initialState = [
    { id: '0', name: 'Tianna Jenkins', username: "@tjenkins", following: [2] },
    { id: '1', name: 'Kevin Grant', username: "@kgrant", following: [] },
    { id: '2', name: 'Madison Price', username: "@mprice", following: [] }
]

const usersSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {}
})

export default usersSlice.reducer