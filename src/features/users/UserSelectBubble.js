import React from "react";
import { ProfilePicBubble } from "./ProfilePicBubble";

export const UserSelectBubble = ({ user, containerStyleOptions, usernameContainerStyleOptions }) => {
    let containerStyles = 'dropdown-btn '
    let usernameContainerStyles = 'username-container '

    if (containerStyleOptions) containerStyles += containerStyleOptions
    if (usernameContainerStyleOptions) usernameContainerStyles += usernameContainerStyleOptions

    return (
        <div className={containerStyles}>
            <ProfilePicBubble />
            <div className={usernameContainerStyles}>
                <div>
                    <span>{user.name}</span>
                </div>
                <div>
                    <span>{user.username}</span>
                </div>
            </div>
        </div>
    )
}