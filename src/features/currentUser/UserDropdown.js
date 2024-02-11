import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { currentUserSelected } from './currentUsersSlice'
import { UserSelectBubble } from '../users/UserSelectBubble.js'
import { ProfilePicBubble } from '../users/ProfilePicBubble.js'

import { Dialog, DialogOverlay, DialogContent } from "@reach/dialog";
import "@reach/dialog/styles.css";
// import VisuallyHidden from "@reach/visually-hidden";

export const UserDropdown = () => {
    const [userId, setUserId] = useState('')
    const [showDialog, setShowDialog] = React.useState(false);
    const open = () => setShowDialog(true);
    const close = () => setShowDialog(false);

    const dispatch = useDispatch()

    let [currentUser] = useSelector(state => state.currentUser)
    const users = useSelector(state => state.users)

    const onUserSelected = (name) => {
        console.log(name)
        setUserId(name)

        currentUser = users.filter(user => user.name === name)
        console.log(currentUser.name)

        dispatch(currentUserSelected(currentUser)) 
    }

    const usersOptions = users.map(user => (
        <li
            key={user.id}
            value={user.id}
            onClick={(e) => onUserSelected(e.target.textContent)}>
            {user.name}
        </li>
    ))

    return (
        <section className='user-dropdown-container' onClick={open}>
            <div className="dropdown">
                <UserSelectBubble
                    user={currentUser}
                    usernameContainerStyleOptions='sidebar-username-container' />
            </div>

            <Dialog
                id='profile-modal'
                isOpen={showDialog}
                onDismiss={close}>
                <ul className="dropdown-content" onClick={close}>
                    {usersOptions}
                </ul>
            </Dialog>
        </section>
    )
}