import { createSlice } from '@reduxjs/toolkit'

const initialState = { isMenuOpen: false }

const userDropdownMenuSlice = createSlice({
    name: 'userDropdownMenu',
    initialState,
    reducers: {
        toggleIsMenuOpen: (state) => {
            state.isMenuOpen = !state.isMenuOpen
        }
    }
})

export const { toggleIsMenuOpen } = userDropdownMenuSlice.actions

export default userDropdownMenuSlice.reducer