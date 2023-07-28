import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { retweetAdded, reactionAdded } from './postsSlice'

const reactionEmoji = {
    reply: '↩️',
    retweet: '🔁',
    heart: '❤️',
}

export const ReactionButtons = ({ post }) => {
    const dispatch = useDispatch()

    const [currentUser] = useSelector((state) => state.currentUser)

    const handleRetweet = (post, currentUser, reactionName) => {
        dispatch(reactionAdded({ post, reaction: reactionName, currentUser }))
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
                        dispatch(reactionAdded({ postId: post.id, reaction: name, currentUser }))
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
                        dispatch(reactionAdded({ postId: post.id, reaction: name, currentUser }))
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