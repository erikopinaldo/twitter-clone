import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { currentUserSelected } from './currentUsersSlice'
import { toggleIsMenuOpen } from '../userDropdownMenu/userDropdownMenuSlice'

export const UserDropdown = () => {
    const [userId, setUserId] = useState('')

    const dispatch = useDispatch()

    let [currentUser] = useSelector(state => state.currentUser)
    const users = useSelector(state => state.users)
    const isMenuOpen = useSelector(state => state.userDropdownMenu.isMenuOpen)

    console.log(isMenuOpen)

    const toggleHandler = () => {
        dispatch(toggleIsMenuOpen())
    }

    const onUserSelected = (name) => {
        setUserId(name)

        currentUser = users.filter(user => user.name === name)
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
        <section
            className='user-dropdown-container'
            onClick={toggleHandler}>
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
                <ul className={isMenuOpen ? "dropdown-content menu-open" : "dropdown-content"}>
                    {usersOptions}
                </ul>
            </div>
        </section>
    )
}