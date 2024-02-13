import React from 'react'

import { UserSelectBubble } from '../features/users/UserSelectBubble'

import { useSelector } from 'react-redux'

export const RightPane = () => {
    const users = useSelector(state => state.users)

    const userList = users.map((user) => {
        return (
            <div key={user.id} className='who-to-follow-container'>
                <UserSelectBubble
                    user={user}
                    containerStyleOptions='who-to-follow-item' />
                <div className='who-to-follow-button-container'>
                    <button type='button' className='subscribe-button'>Follow</button>
                </div>
            </div>  
        )
    })

    return (
        <div className='right-pane-container'>
            <div className='sticky-right-pane-wrapper'>
                <div className='search-card-container'>
                    <div className='search-bar'>
                        <div className='search-icon-container'>
                            <svg viewBox="0 0 24 24" className='search-icon'>
                                <g>
                                    <path d="M10.25 3.75c-3.59 0-6.5 2.91-6.5 6.5s2.91 6.5 6.5 6.5c1.795 0 3.419-.726 4.596-1.904 1.178-1.177 1.904-2.801 1.904-4.596 0-3.59-2.91-6.5-6.5-6.5zm-8.5 6.5c0-4.694 3.806-8.5 8.5-8.5s8.5 3.806 8.5 8.5c0 1.986-.682 3.815-1.824 5.262l4.781 4.781-1.414 1.414-4.781-4.781c-1.447 1.142-3.276 1.824-5.262 1.824-4.694 0-8.5-3.806-8.5-8.5z"></path>
                                </g>
                            </svg>
                        </div>
                        <input type="text" placeholder="Search" />
                    </div>
                </div>
                <div className='trending-container'>
                    <div className='trending-container-child'>
                        <div className='trending-container-spacer'></div>
                        <div className='subscribe-card-container trending-container-item'>
                            <aside className='subscribe-card'>
                                <div className='subscribe-text-container'>
                                    <span className='subscribe-text'>Subscribe to Premium</span>
                                </div>
                                <div className='subscribe-description-container'>
                                    <span className='subscribe-description'>Subscribe to unlock new features and if eligible, receive a share of ads revenue.</span>
                                </div>
                                <div className='subscribe-button-container'>
                                    <button type='button' className='subscribe-button'>Subscribe</button>
                                </div>
                            </aside>
                        </div>
                        <div className='trending-card-container'>
                            <div className='trending-header-container trending-card-item'>
                                <h2>What's happening</h2>
                            </div>
                            <div className='trending-card-item'>
                                <div className='trending-card-item-headline'>
                                    <span>Super Bowl LVIII: 49ers at Chiefs</span>
                                </div>
                                <div className='trending-card-item-subheading-container'>
                                    <div className='trending-card-item-subheading-item'>
                                        <span>Super Bowl LVIII</span>
                                    </div>
                                    <div className='trending-card-item-subheading-item subheading-spacer'>
                                        <span>·</span>
                                    </div>
                                    <div className='trending-card-item-subheading-item'>
                                        <span>Starting at 5:30PM</span>
                                    </div>
                                </div>
                            </div>
                            <div className='trending-card-item'>
                                <div className='trending-card-item-subheading-container'>
                                    <div className='trending-card-item-subheading-item'>
                                        <span>Sports</span>
                                    </div>
                                    <div className='trending-card-item-subheading-item subheading-spacer'>
                                        <span>·</span>
                                    </div>
                                    <div className='trending-card-item-subheading-item'>
                                        <span>Trending</span>
                                    </div>
                                </div>
                                <div className='trending-card-item-headline'>
                                    <span>#AFCONFinal</span>
                                </div>
                                <div className='trending-card-item-subheading-container'>
                                    <div className='trending-card-item-subheading-item'>
                                        <span>95.2K posts</span>
                                    </div>
                                </div>
                            </div>
                            <div className='trending-card-item'>
                                <div className='trending-card-item-subheading-container'>
                                    <div className='trending-card-item-subheading-item'>
                                        <span>Music</span>
                                    </div>
                                    <div className='trending-card-item-subheading-item subheading-spacer'>
                                        <span>·</span>
                                    </div>
                                    <div className='trending-card-item-subheading-item'>
                                        <span>Trending</span>
                                    </div>
                                </div>
                                <div className='trending-card-item-headline'>
                                    <span>Justin Bieber</span>
                                </div>
                                <div className='trending-card-item-subheading-container'>
                                    <div className='trending-card-item-subheading-item'>
                                        <span>95.1K posts</span>
                                    </div>
                                </div>
                            </div>
                            <div className='trending-card-item'>
                                <div className='trending-card-item-subheading-container'>
                                    <div className='trending-card-item-subheading-item'>
                                        <span>Technology</span>
                                    </div>
                                    <div className='trending-card-item-subheading-item subheading-spacer'>
                                        <span>·</span>
                                    </div>
                                    <div className='trending-card-item-subheading-item'>
                                        <span>Trending</span>
                                    </div>
                                </div>
                                <div className='trending-card-item-headline'>
                                    <span>macOS</span>
                                </div>
                                <div className='trending-card-item-subheading-container'>
                                    <div className='trending-card-item-subheading-item'>
                                        <span>1,426 posts</span>
                                    </div>
                                </div>
                            </div>
                            <div className='trending-card-item trending-card-item-last'>
                                <div className='trending-card-item-subheading-container'>
                                    <div className='trending-card-item-subheading-item'>
                                        <span>Technology</span>
                                    </div>
                                    <div className='trending-card-item-subheading-item subheading-spacer'>
                                        <span>·</span>
                                    </div>
                                    <div className='trending-card-item-subheading-item'>
                                        <span>Trending</span>
                                    </div>
                                </div>
                                <div className='trending-card-item-headline'>
                                    <span>#webdeveloper</span>
                                </div>
                                <div className='trending-card-item-subheading-container'>
                                    <div className='trending-card-item-subheading-item'>
                                        <span>2,385 posts</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='trending-card-container'>
                            <div className='trending-header-container trending-card-item'>
                                <h2>Who to follow</h2>
                            </div>
                            {userList}
                        </div>
                        <div className='who-to-follow-card-container'></div>
                    </div>     
                </div>
            </div>
        </div>
    )
}