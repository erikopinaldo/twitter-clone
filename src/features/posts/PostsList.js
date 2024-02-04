import React from 'react'
import { useSelector } from 'react-redux'
import { useHistory } from "react-router-dom";

import { AddPostForm } from './AddPostForm'
import { PostAuthor } from './PostAuthor'
import { PostAuthorUsername } from './PostAuthorUsername'
import { TweetDate } from './TweetDate'
import { ReactionButtons } from './ReactionButtons'
import { RetweetLabel } from './RetweetLabel';
import { ProfilePicBubble } from '../users/ProfilePicBubble';

import { Dialog, DialogOverlay, DialogContent } from "@reach/dialog";
import "@reach/dialog/styles.css";

export const PostsList = ( { handleTweetModalClose, handleTweetButtonOpen }) => {
    const posts = useSelector((state) => state.posts)
    const [currentUser] = useSelector((state) => state.currentUser)
    const currentTimelineView = useSelector(state => state.currentTimelineView)
    const currentUserFollowList = useSelector(state => state.users).find(user => user.id === currentUser.id).following

    const [showDialog, setShowDialog] = React.useState(false);
    const open = () => setShowDialog(true);
    const close = () => setShowDialog(false);

    let history = useHistory();

    // const onTweetButtonClicked = () => {
    //     history.push('/compose/tweet')
    // }

    // Sort posts in reverse chronological order by datetime string
    const orderedPosts = posts
        .slice()
        .sort((a, b) => b.date.localeCompare(a.date))
        .filter(post => {

            // If user is in the Following view, only show tweets from themselves or the users they follow 
            if (currentTimelineView === "Following" && currentUser.id !== post.user && !currentUserFollowList.includes(post.user)) {
                return
            }
            
            // Hide tweet if current user retweeted the tweet, or if the current user was the one that was retweeted 
            if (post.retweets_id) {
                const parentTweet = posts.find(postQuery => postQuery.id === post.retweets_id)

                if (post.user === currentUser.id || parentTweet.user === currentUser.id) {
                    return
                }

                else return post
            }

            else return post
        })

    const renderedPosts = orderedPosts.map((post) => {
        let renderedPost
        
        if (post.retweets_id) {
            // Get parent tweet content 
            renderedPost = posts.find(postQuery => postQuery.id === post.retweets_id)
        }

        else renderedPost = post

        return (
            <div className='post-excerpt-container' key={post.id}>
                <article className="post-excerpt">
                    <ProfilePicBubble />
                    <div>
                        <div>
                            <RetweetLabel
                                retweetAuthorId={post.retweets_id ? post.user : null}
                                parentAuthorId={post.retweets_id ? renderedPost.user : null}
                                currentUser={currentUser} />
                            <PostAuthor userId={renderedPost.user} />
                            <PostAuthorUsername userId={renderedPost.user} />
                            <TweetDate timestamp={renderedPost.date} />
                        </div>
                        <p className="post-content">{renderedPost.content.substring(0, 100)}</p>

                        <ReactionButtons post={renderedPost} />
                    </div>
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
                <button id="mobile-tweet-button" onClick={() => handleTweetButtonOpen()}>+</button>
            </div>
        </>
    )
}
