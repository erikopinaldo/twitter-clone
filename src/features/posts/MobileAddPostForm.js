import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from "react-router-dom";

import { postAdded } from './postsSlice'

export const MobileAddPostForm = () => {
    const [content, setContent] = useState('')

    const dispatch = useDispatch()
    const history = useHistory()

    const currentUser = useSelector(state => state.currentUser)[0]
    console.log(currentUser)

    const onContentChanged = e => setContent(e.target.value)

    const onSavePostClicked = () => {
        if (content) {
            dispatch(postAdded(content, currentUser.id))
            setContent('')
            history.push('/')
        }
    }

    const canSave = Boolean(content)

    return (
        <section className='mobile-add-post-form'>
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