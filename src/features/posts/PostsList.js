import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { useHistory } from "react-router-dom";

import { PostAuthor } from './PostAuthor'
import { PostAuthorUsername } from './PostAuthorUsername'
import { TweetDate } from './TweetDate'
import { ReactionButtons } from './ReactionButtons'
import { RetweetLabel } from './RetweetLabel';

export const PostsList = () => {
    const posts = useSelector((state) => state.posts)

    const [currentUser] = useSelector((state) => state.currentUser)

    let history = useHistory();

    const onTweetButtonClicked = () => {
        history.push('/compose/tweet')
    }

    // Sort posts in reverse chronological order by datetime string
    const orderedPosts = posts
        .slice()
        .sort((a, b) => b.date.localeCompare(a.date))
        .filter(post => {
            if (post.retweets && post.user === currentUser.id) {
                return
            }
            else return post
        })

    const renderedPosts = orderedPosts.map((post) => {
        return (
            <div className='post-excerpt-container' key={post.id}>
                <article className="post-excerpt">
                    <div>
                        <RetweetLabel retweetAuthorId={post.retweets ? post.user : null} parentAuthorId={post.retweets ? post.retweets.user : null} currentUser={currentUser} />
                        <PostAuthor userId={post.retweets ? post.retweets.user : post.user} />
                        <PostAuthorUsername userId={post.retweets ? post.retweets.user : post.user} />
                        <TweetDate timestamp={post.date} />
                    </div>
                    <p className="post-content">{post.retweets ? post.retweets.content.substring(0, 100) : post.content.substring(0, 100)}</p>

                    <ReactionButtons post={post.retweets ? post.retweets : post} />
                </article>
            </div>          
        )
    })

    return (
        <>
            <section className="posts-list">
                {renderedPosts}
            </section>
            <div>
                <button id="mobile-tweet-button" onClick={onTweetButtonClicked}>+</button>
            </div>
        </>
    )
}
