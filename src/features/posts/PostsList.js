import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

import { PostAuthor } from './PostAuthor'
import { PostAuthorUsername } from './PostAuthorUsername'
import { TweetDate } from './TweetDate'
import { ReactionButtons } from './ReactionButtons'

export const PostsList = () => {
    const posts = useSelector((state) => state.posts)

    // Sort posts in reverse chronological order by datetime string
    const orderedPosts = posts
        .slice()
        .sort((a, b) => b.date.localeCompare(a.date))

    const renderedPosts = orderedPosts.map((post) => {
        return (
            <div className='post-excerpt-container' key={post.id}>
                <article className="post-excerpt">
                    <div>
                        <PostAuthor userId={post.user} />
                        <PostAuthorUsername userId={post.user} />
                        <TweetDate timestamp={post.date} />
                    </div>
                    <p className="post-content">{post.content.substring(0, 100)}</p>

                    <ReactionButtons post={post} />
                </article>
            </div>          
        )
    })

    return (
        <>
            <section className="posts-list">
                {renderedPosts}
            </section>
            <div >
                <button id="mobile-tweet-button">+</button>
            </div>
        </>
    )
}
