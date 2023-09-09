import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { retweetAdded, reactionAdded, reactionRemoved } from './postsSlice'
import { current } from '@reduxjs/toolkit'

const reactionEmoji = {
    reply: '↩️',
    retweet: '🔁',
    heart: '❤️',
}

export const ReactionButtons = ({ post }) => {
    const dispatch = useDispatch()

    const posts = useSelector((state) => state.posts)
    const [currentUser] = useSelector((state) => state.currentUser)

    const handleReaction = (post, currentUser, reactionName) => {
        const existingPost = posts.find(postQuery => postQuery.id === post.id)

        if (existingPost && !existingPost.reactions[reactionName].users.includes(currentUser.id)) {
            dispatch(reactionAdded({ post, reaction: reactionName, currentUser }))
        }
        else if (existingPost && existingPost.reactions[reactionName].users.includes(currentUser.id)) {
            dispatch(reactionRemoved({ post, reaction: reactionName, currentUser }))
        }
    }

    const handleRetweet = (post, currentUser, reactionName) => {
        handleReaction(post, currentUser, reactionName)
        dispatch(retweetAdded({ post, currentUser, reaction: reactionName }))
    }

    const reactionButtons = Object.entries(reactionEmoji).map(([name, emoji]) => {
        let reaction

        if (name === 'heart') {
            reaction = (
                <button
                    key={name}
                    type="button"
                    className="muted-button reaction-button"
                    onClick={() =>
                        handleReaction(post, currentUser, name)
                    }
                >
                    {emoji} {post.reactions[name].count}
                </button>
            )
        }
        else if (name === 'retweet') {
            reaction = (
                <button
                    key={name}
                    type="button"
                    className="muted-button reaction-button"
                    onClick={() =>
                        handleRetweet(post, currentUser, name)
                    }
                >
                    {emoji} {post.reactions[name].count}
                </button>
            )
        }
        else {
            reaction = (
                <button
                    key={name}
                    type="button"
                    className="muted-button reaction-button"
                    onClick={() =>
                        handleReaction(post, currentUser, name)
                    }
                >
                    {emoji} {post.reactions[name].count}
                </button>
            )
        }

        return reaction
    })

    return <div className='reaction-button-list'>{reactionButtons}</div>
}