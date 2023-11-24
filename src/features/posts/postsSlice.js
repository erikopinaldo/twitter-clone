import { createSlice, current } from '@reduxjs/toolkit'
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
            },
            retweet: {
                count: 0,
                users: [],
            },
            reply: {
                count: 0,
                users: [],
            },
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
            },
            retweet: {
                count: 0,
                users: [],
            },
            reply: {
                count: 0,
                users: [],
            },
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
                            },
                            retweet: {
                                count: 0,
                                users: [],
                            },
                            reply: {
                                count: 0,
                                users: [],
                            },
                        }
                    }
                }
            }
        },
        retweetAdded: {
            reducer(state, action) {
                state.push(action.payload)
            },
            prepare({ post, currentUser }) {
                console.log(currentUser)
                return {
                    payload: {
                        id: nanoid(),
                        date: new Date().toISOString(),
                        user: currentUser.id,
                        retweets_id: post.id,
                        retweets: post
                    }
                }
            }
        },
        retweetRemoved(state, action) {
            const { existingRetweet, reaction, currentUser } = action.payload
 
            state = state.filter(postQuery => postQuery.id !== existingRetweet.id)
            
            return state
        },
        reactionAdded(state, action) {
            const { post, reaction, currentUser } = action.payload
            const existingPost = state.find(postQuery => postQuery.id === post.id)

            existingPost.reactions[reaction].count++
            existingPost.reactions[reaction].users.push(currentUser.id)
        }, 
        reactionRemoved(state, action) {
            const { post, reaction, currentUser } = action.payload
            const existingPost = state.find(postQuery => postQuery.id === post.id)
 
            existingPost.reactions[reaction].count--
            existingPost.reactions[reaction].users = existingPost.reactions[reaction].users.filter(user => user !== currentUser.id)
        }
    }
})

export const { postAdded, retweetAdded, retweetRemoved, postUpdated, reactionAdded, reactionRemoved } = postsSlice.actions

export default postsSlice.reducer