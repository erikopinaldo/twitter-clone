import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { currentUserSelected } from './currentUsersSlice'

export const UserDropdown = () => {
    const [userId, setUserId] = useState('')

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
        <section className='user-dropdown-container'>
            <div className="dropdown">
                <input type="checkbox" id="dropdown" />
                <label htmlFor="dropdown" className="dropdown-btn">
                    <div>
                        <span>{currentUser.name}</span>
                    </div>
                    <div>
                        <span>{currentUser.username}</span>
                    </div>
                </label>
                <ul className="dropdown-content">
                    {usersOptions}
                </ul>
            </div>
        </section>
    )
}