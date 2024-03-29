import { createSlice, current } from '@reduxjs/toolkit'
import { nanoid } from '@reduxjs/toolkit'
import initialTweetList from './initialTweetList'

const initialState = initialTweetList

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
            prepare({ postId, currentUser }) {
                return {
                    payload: {
                        id: nanoid(),
                        date: new Date().toISOString(),
                        user: currentUser.id,
                        retweets_id: postId
                    }
                }
            }
        },
        retweetRemoved(state, action) {
            const { existingRetweet } = action.payload
 
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