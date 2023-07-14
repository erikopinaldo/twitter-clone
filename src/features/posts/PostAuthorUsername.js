import React from 'react'
import { useSelector } from 'react-redux'

export const PostAuthorUsername = ({ userId }) => {
    const author = useSelector(state =>
        state.users.find(user => user.id === userId)
    )

    return <span>&nbsp; {author ? author.username : 'Unknown author'}</span>
}