import React from "react";
import { useSelector } from "react-redux";

export const RetweetLabel = ({ retweetAuthorId }) => {
    const author = useSelector(state =>
        state.users.find(user => user.id === retweetAuthorId)
    )

    if (retweetAuthorId) {
        return <div className="text-muted">Retweeted by {author.username}</div>
    }
    else {
        return null
    }
}