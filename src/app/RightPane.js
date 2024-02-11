import React from 'react'

export const RightPane = () => {
    return (
        <div className='right-pane-container'>
            <div className='sticky-right-pane-wrapper'>
                <div className='search-card-container'>
                    <div className='search-bar'>
                        <input type="text" placeholder="Search..." />
                    </div>
                </div>
                <div className='trending-container'>
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
                        <div className='whats-happening-container trending-card-item'>
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
                                <span>#webdeveloper</span>
                            </div>
                            <div className='trending-card-item-subheading-container'>
                                <div className='trending-card-item-subheading-item'>
                                    <span>2,385 posts</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='who-to-follow-card-container'></div>
                </div>
            </div>
        </div>
    )
}