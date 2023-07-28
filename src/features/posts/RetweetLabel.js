import React from "react";
import { useSelector } from "react-redux";

export const RetweetLabel = ({ retweetAuthorId, parentAuthorId, currentUser }) => {
    const author = useSelector(state =>
        state.users.find(user => user.id === retweetAuthorId)
    )

    if (retweetAuthorId && parentAuthorId !== currentUser.id) {
        return <div className="text-muted">Retweeted by {author.username}</div>
    }
    else {
        return null
    }
}