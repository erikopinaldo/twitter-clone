import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { postAdded } from './postsSlice'

export const AddPostForm = () => {
    const [content, setContent] = useState('')

    const dispatch = useDispatch()

    const currentUser = useSelector(state => state.currentUser)[0]
    console.log(currentUser)

    const onContentChanged = e => setContent(e.target.value)

    const onSavePostClicked = () => {
        if (content) {
            dispatch(postAdded(content, currentUser.id))
            setContent('')
        }
    }

    const canSave = Boolean(content) 

    return (
        <section className='add-post-form'>
            <form>
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