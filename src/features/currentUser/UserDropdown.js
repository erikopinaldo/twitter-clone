import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { currentUserSelected } from './currentUsersSlice'

export const UserDropdown = () => {
    const [userId, setUserId] = useState('')

    const dispatch = useDispatch()

    let currentUser = useSelector(state => state.currentUser)
    const users = useSelector(state => state.users)

    const onUserSelected = (e) => {
        setUserId(e.target.value)

        currentUser = users.filter(user => user.id === e.target.value)
        console.log(currentUser)

        dispatch(currentUserSelected(currentUser)) 
    }

    const usersOptions = users.map(user => (
        <option key={user.id} value={user.id}>
            {user.name}
        </option>
    ))

    return (
        <section className='user-dropdown-container'>
            <form>
                <label htmlFor="postAuthor">User:</label>
                <select id="postAuthor" value={currentUser.name} onChange={onUserSelected}>
                    {usersOptions}
                </select>
            </form>
        </section>
    )
}