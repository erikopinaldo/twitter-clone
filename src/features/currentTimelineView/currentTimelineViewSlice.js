import { createSlice } from '@reduxjs/toolkit'

const initialState = "For you"

const currentTimelineViewSlice = createSlice({
    name: 'currentTimelineView',
    initialState,
    reducers: {
        currentTimelineViewSelected: {
            reducer(state, action) {
                return action.payload
            },
        }
    }
})

export const { currentTimelineViewSelected } = currentTimelineViewSlice.actions

export default currentTimelineViewSlice.reducer