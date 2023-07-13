import { createSlice } from '@reduxjs/toolkit'
import { nanoid } from '@reduxjs/toolkit'
import { sub } from 'date-fns'

const initialState = [
    {
        id: '1',
        content: 'Hello!',
        user: '0',
        date: sub(new Date(), { minutes: 10 }).toISOString(),
        reactions: {
            heart: 0,
        },
    },
    {
        id: '2',
        content: 'More text',
        user: '2',
        date: sub(new Date(), { minutes: 5 }).toISOString(),
        reactions: {
            heart: 0,
        },
    },
]

const postsSlice = createSlice({
    name: 'posts',
    initialState,
    reducers: {
        postAdded: {
            reducer(state, action) {
                state.push(action.payload)
            },
            prepare(title, content, userId) {
                return {
                    payload: {
                        id: nanoid(),
                        date: new Date().toISOString(),
                        title,
                        content,
                        user: userId,
                        reactions: { heart: 0 }
                    }
                }
            }
        },
        reactionAdded(state, action) {
            const { postId, reaction } = action.payload
            const existingPost = state.find(post => post.id === postId)
            if (existingPost) {
                existingPost.reactions[reaction]++
            }
        }
    }
})

export const { postAdded, postUpdated, reactionAdded } = postsSlice.actions

export default postsSlice.reducer