import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

export const UserDropdown = () => {
    const [userId, setUserId] = useState('')

    const dispatch = useDispatch()

    const users = useSelector(state => state.users)

    const onAuthorChanged = e => setUserId(e.target.value)

    const usersOptions = users.map(user => (
        <option key={user.id} value={user.id}>
            {user.name}
        </option>
    ))

    return (
        <section className='user-dropdown-container'>
            <form>
                <label htmlFor="postAuthor">User:</label>
                <select id="postAuthor" value={userId} onChange={onAuthorChanged}>
                    <option value=""></option>
                    {usersOptions}
                </select>
            </form>
        </section>
    )
}