import React from 'react'
import { UserDropdown } from '../features/currentUser/UserDropdown'

export const Navbar = ({ handleTweetButtonOpen }) => {
  return (
    <nav className='nav-container'>
      <section className='nav-menu-container'>
        <div className="nav-menu">
          <div className="nav-menu-links-container">
            <div className='logo-anchor-container'>
              <a href='#'>
                <div className='logo-container'>
                  <svg id='logo' viewBox="0 0 24 24">
                    <g>
                      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"></path>
                    </g>
                  </svg>
                </div>
              </a>
            </div>

            <div className='nav-menu-link-item'>
              <a href='#'>
                <div className='nav-menu-link-item-content'>
                  <div className='nav-icon-container'>
                    <svg className='nav-icon' viewBox="0 0 24 24">
                      <g>
                        <path d="M21.591 7.146L12.52 1.157c-.316-.21-.724-.21-1.04 0l-9.071 5.99c-.26.173-.409.456-.409.757v13.183c0 .502.418.913.929.913H9.14c.51 0 .929-.41.929-.913v-7.075h3.909v7.075c0 .502.417.913.928.913h6.165c.511 0 .929-.41.929-.913V7.904c0-.301-.158-.584-.408-.758z"></path>
                      </g>
                    </svg>
                  </div>
                  <span className='nav-menu-link-item-text'>Home</span>
                </div>
              </a>
            </div>
            <div className='nav-menu-link-item'>
              <a href='#'>
                <div className='nav-menu-link-item-content'>
                  <div className='nav-icon-container'>
                    <svg className='nav-icon' viewBox="0 0 24 24">
                      <g>
                        <path d="M10.25 3.75c-3.59 0-6.5 2.91-6.5 6.5s2.91 6.5 6.5 6.5c1.795 0 3.419-.726 4.596-1.904 1.178-1.177 1.904-2.801 1.904-4.596 0-3.59-2.91-6.5-6.5-6.5zm-8.5 6.5c0-4.694 3.806-8.5 8.5-8.5s8.5 3.806 8.5 8.5c0 1.986-.682 3.815-1.824 5.262l4.781 4.781-1.414 1.414-4.781-4.781c-1.447 1.142-3.276 1.824-5.262 1.824-4.694 0-8.5-3.806-8.5-8.5z"></path>
                      </g>
                    </svg>
                  </div>
                  <span className='nav-menu-link-item-text'>Explore</span>
                </div>
              </a>
            </div>
            <div className='nav-menu-link-item'>
              <a href='#'>
                <div className='nav-menu-link-item-content'>
                  <div className='nav-icon-container'>
                    <svg className='nav-icon' viewBox="0 0 24 24">
                      <g>
                        <path d="M19.993 9.042C19.48 5.017 16.054 2 11.996 2s-7.49 3.021-7.999 7.051L2.866 18H7.1c.463 2.282 2.481 4 4.9 4s4.437-1.718 4.9-4h4.236l-1.143-8.958zM12 20c-1.306 0-2.417-.835-2.829-2h5.658c-.412 1.165-1.523 2-2.829 2zm-6.866-4l.847-6.698C6.364 6.272 8.941 4 11.996 4s5.627 2.268 6.013 5.295L18.864 16H5.134z"></path>
                      </g>
                    </svg>
                  </div>
                  <span className='nav-menu-link-item-text'>Notifications</span>
                </div>
              </a>
            </div>
            <div className='nav-menu-link-item'>
              <a href='#'>
                <div className='nav-menu-link-item-content'>
                  <div className='nav-icon-container'>
                    <svg className='nav-icon' viewBox="0 0 24 24">
                      <g>
                        <path d="M1.998 5.5c0-1.381 1.119-2.5 2.5-2.5h15c1.381 0 2.5 1.119 2.5 2.5v13c0 1.381-1.119 2.5-2.5 2.5h-15c-1.381 0-2.5-1.119-2.5-2.5v-13zm2.5-.5c-.276 0-.5.224-.5.5v2.764l8 3.638 8-3.636V5.5c0-.276-.224-.5-.5-.5h-15zm15.5 5.463l-8 3.636-8-3.638V18.5c0 .276.224.5.5.5h15c.276 0 .5-.224.5-.5v-8.037z"></path>
                      </g>
                    </svg>
                  </div>
                  <span className='nav-menu-link-item-text'>Messages</span>
                </div>
              </a>
            </div>
            <div className='nav-menu-link-item nav-tweet-button-container'>
              <button type='button' className='nav-tweet-button' onClick={() => handleTweetButtonOpen()}>
                <span className='nav-tweet-button-text'>Post</span>
                <svg viewBox="0 0 24 24" className='nav-tweet-button-icon'>
                  <g>
                    <path d="M23 3c-6.62-.1-10.38 2.421-13.05 6.03C7.29 12.61 6 17.331 6 22h2c0-1.007.07-2.012.19-3H12c4.1 0 7.48-3.082 7.94-7.054C22.79 10.147 23.17 6.359 23 3zm-7 8h-1.5v2H16c.63-.016 1.2-.08 1.72-.188C16.95 15.24 14.68 17 12 17H8.55c.57-2.512 1.57-4.851 3-6.78 2.16-2.912 5.29-4.911 9.45-5.187C20.95 8.079 19.9 11 16 11zM4 9V6H1V4h3V1h2v3h3v2H6v3H4z">
                    </path>
                  </g>
                </svg>
              </button>
            </div>
          </div>
        </div>
      </section>
      <UserDropdown />
    </nav>
  )
}
