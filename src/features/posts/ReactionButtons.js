import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { retweetAdded, retweetRemoved, reactionAdded, reactionRemoved } from './postsSlice'
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

    const handleRetweet = (postId, currentUser, reactionName) => {
        const existingRetweet = posts.find(postQuery => {
            return postQuery.retweets_id === post.id && postQuery.user === currentUser.id
        })

        if (!existingRetweet) {
            dispatch(retweetAdded({ postId, currentUser, reaction: reactionName }))
        }
        else {
            dispatch(retweetRemoved({ existingRetweet, reaction: reactionName, currentUser }))
        }

        handleReaction(post, currentUser, reactionName)
    }

    const reactionButtons = Object.entries(reactionEmoji).map(([name, emoji]) => {
        let reaction
        let buttonStyleOptions

        if (post.reactions[name].users.includes(currentUser.id)) {
            buttonStyleOptions = "muted-button reaction-button selected-reaction-button"
        }
        else {
            buttonStyleOptions = "muted-button reaction-button"
        }

        if (name === 'heart') {
            reaction = (
                <button
                    key={name}
                    type="button"
                    className={buttonStyleOptions}
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
                    className={buttonStyleOptions}
                    onClick={() =>
                        handleRetweet(post.id, currentUser, name)
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
                    className={buttonStyleOptions}
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