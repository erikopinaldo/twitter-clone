import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { postAdded } from './postsSlice'

export const AddPostForm = () => {
    const [content, setContent] = useState('')
    const [userId, setUserId] = useState('')

    const dispatch = useDispatch()

    const users = useSelector(state => state.users)

    const onContentChanged = e => setContent(e.target.value)
    const onAuthorChanged = e => setUserId(e.target.value)

    const onSavePostClicked = () => {
        if (content) {
            dispatch(postAdded(content, userId))
            setContent('')
        }
    }

    const canSave = Boolean(content) && Boolean(userId)

    const usersOptions = users.map(user => (
        <option key={user.id} value={user.id}>
            {user.name}
        </option>
    ))

    return (
        <section className='add-post-form'>
            <form>
                {/* <label htmlFor="postAuthor">Author:</label> */}
                <select id="postAuthor" value={userId} onChange={onAuthorChanged}>
                    <option value=""></option>
                    {usersOptions}
                </select>
                {/* <label htmlFor="postContent">Content:</label> */}
                <textarea
                    id="postContent"
                    name="postContent"
                    value={content}
                    onChange={onContentChanged}
                />
                <div className='tweet-button-container'>
                    <button type="button" onClick={onSavePostClicked} disabled={!canSave}>
                        Tweet
                    </button>
                </div> 
            </form>
        </section>
    )
}