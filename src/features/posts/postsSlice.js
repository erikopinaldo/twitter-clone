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
            heart: {
                count: 0,
                users: [],
            }
        }
    },
    {
        id: '2',
        content: 'More text',
        user: '2',
        date: sub(new Date(), { minutes: 5 }).toISOString(),
        reactions: {
            heart: {
                count: 0,
                users: [],
            }
        }
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
            prepare(content, userId) {
                return {
                    payload: {
                        id: nanoid(),
                        date: new Date().toISOString(),
                        content,
                        user: userId,
                        reactions: {
                            heart: {
                                count: 0,
                                users: [],
                            } 
                        }
                    }
                }
            }
        },
        reactionAdded(state, action) {
            const { postId, reaction, currentUser } = action.payload
            const existingPost = state.find(post => post.id === postId)
            if (existingPost && !existingPost.reactions[reaction].users.includes(currentUser.id)) {
                existingPost.reactions[reaction].count++
                existingPost.reactions[reaction].users.push(currentUser.id)
            }
            else if (existingPost && existingPost.reactions[reaction].users.includes(currentUser.id)) {
                existingPost.reactions[reaction].count--
                existingPost.reactions[reaction].users = existingPost.reactions[reaction].users.filter(user => user !== currentUser.id)
            }
        }
    }
})

export const { postAdded, postUpdated, reactionAdded } = postsSlice.actions

export default postsSlice.reducer