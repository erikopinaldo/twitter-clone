import React from 'react'
import { format } from 'date-fns'

export const TweetDate = ({ timestamp }) => {
    let date = ''
    if (timestamp) {
        date = format(new Date(timestamp), 'MMM dd')
    }

    return (
        <span title={timestamp}>
            {date}
        </span>
    )
}