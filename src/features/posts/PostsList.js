import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

import { PostAuthor } from './PostAuthor'
import { TimeAgo } from './TimeAgo'
import { ReactionButtons } from './ReactionButtons'

export const PostsList = () => {
    const posts = useSelector((state) => state.posts)

    // Sort posts in reverse chronological order by datetime string
    const orderedPosts = posts
        .slice()
        .sort((a, b) => b.date.localeCompare(a.date))

    const renderedPosts = orderedPosts.map((post) => {
        return (
            <article className="post-excerpt" key={post.id}>
                <div>
                    <PostAuthor userId={post.user} />
                    <TimeAgo timestamp={post.date} />
                </div>
                <p className="post-content">{post.content.substring(0, 100)}</p>

                <ReactionButtons post={post} />
            </article>
        )
    })

    return (
        <section className="posts-list">
            <h2>Posts</h2>
            {renderedPosts}
        </section>
    )
}
