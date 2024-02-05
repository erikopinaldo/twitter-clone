import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { ProfilePicBubble } from '../users/ProfilePicBubble'

import { postAdded } from './postsSlice'

export const AddPostForm = ({ handleCloseClick }) => {
    const [content, setContent] = useState('')

    const dispatch = useDispatch()

    const currentUser = useSelector(state => state.currentUser)[0]
    const onContentChanged = e => setContent(e.target.value)

    const handleUserKeyPress = e => {
        if (e.key === "Enter" && !e.shiftKey) {
            e.preventDefault();
            onSavePostClicked();
        }
    };

    const onSavePostClicked = (e) => {
        if (e) e.preventDefault()

        if (content) {
            dispatch(postAdded(content, currentUser.id))
            setContent('')
            
            // Only use modal close logic if this instance of the AddPostForm component was passed the handleCloseClick function
            if (handleCloseClick) handleCloseClick()
        }
    }

    const canSave = Boolean(content)

    return (
        <section className='add-post-form'>
            <ProfilePicBubble styleOptions='timeline-profile-pic-bubble'/>
            <div className='add-post-form-content-container'>
                <form onSubmit={onSavePostClicked}>
                    <textarea
                        id="postContent"
                        name="postContent"
                        placeholder='What is happening?!'
                        value={content}
                        onChange={onContentChanged}
                        onKeyDown={handleUserKeyPress}
                    />
                    <div className='tweet-button-container'>
                        <button type="button" onClick={onSavePostClicked} disabled={!canSave}>
                            <span>Post</span>
                        </button>
                    </div>
                </form>
            </div>     
        </section>
    )
}