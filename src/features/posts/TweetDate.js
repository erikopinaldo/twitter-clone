import React from 'react'
import { format } from 'date-fns'

export const TweetDate = ({ timestamp }) => {
    let date = ''
    if (timestamp) {
        date = format(new Date(timestamp), 'MMMM dd')
    }

    return (
        <span title={timestamp}>
            {date}
        </span>
    )
}