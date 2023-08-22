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
            // Hide tweet if current user retweeted the tweet, or if the current user was the one that was retweeted 
            if (post.retweets && (post.user === currentUser.id || post.retweets.user === currentUser.id)) {
                return
            }
            else return post
        })

    const renderedPosts = orderedPosts.map((post) => {
        const renderedPost = post.retweets ? post.retweets : post

        return (
            <div className='post-excerpt-container' key={post.id}>
                <article className="post-excerpt">
                    <div>
                        <RetweetLabel retweetAuthorId={post.retweets ? post.user : null} parentAuthorId={post.retweets ? post.retweets.user : null} currentUser={currentUser} />
                        <PostAuthor userId={renderedPost.user} />
                        <PostAuthorUsername userId={renderedPost.user} />
                        <TweetDate timestamp={post.date} />
                    </div>
                    <p className="post-content">{renderedPost.content.substring(0, 100)}</p>

                    <ReactionButtons post={post.retweets ? posts.find(postQuery => postQuery.id === post.retweets.id) : post} />
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
