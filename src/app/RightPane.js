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
                    <div className='subscribe-card-container'>
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
                    <div className='trending-card-container'></div>
                    <div className='who-to-follow-card-container'></div>
                </div>
            </div>
        </div>
    )
}