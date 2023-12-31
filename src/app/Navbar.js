import React from 'react'
import { UserDropdown } from '../features/currentUser/UserDropdown'

export const Navbar = () => {
  return (
    <nav className='navbar'>
      <section className='top-nav'>
        <div className="navContent">
          <div className="navLinks">
            <div className='logo-wrapper'>
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

            <div className='navLink'>
              <a href='#'>
                <div className='navLink-content'>
                  <div className='nav-icon-container'>
                    <svg className='nav-icon' viewBox="0 0 24 24">
                      <g>
                        <path d="M21.591 7.146L12.52 1.157c-.316-.21-.724-.21-1.04 0l-9.071 5.99c-.26.173-.409.456-.409.757v13.183c0 .502.418.913.929.913H9.14c.51 0 .929-.41.929-.913v-7.075h3.909v7.075c0 .502.417.913.928.913h6.165c.511 0 .929-.41.929-.913V7.904c0-.301-.158-.584-.408-.758z"></path>
                      </g>
                    </svg>
                  </div>
                  <span className='navLink-text'>Home</span>
                </div>
              </a>
            </div>
            <div className='navLink'>
              <a href='#'>
                <div className='navLink-content'>
                  <div className='nav-icon-container'>
                    <svg className='nav-icon' viewBox="0 0 24 24">
                      <g>
                        <path d="M10.25 3.75c-3.59 0-6.5 2.91-6.5 6.5s2.91 6.5 6.5 6.5c1.795 0 3.419-.726 4.596-1.904 1.178-1.177 1.904-2.801 1.904-4.596 0-3.59-2.91-6.5-6.5-6.5zm-8.5 6.5c0-4.694 3.806-8.5 8.5-8.5s8.5 3.806 8.5 8.5c0 1.986-.682 3.815-1.824 5.262l4.781 4.781-1.414 1.414-4.781-4.781c-1.447 1.142-3.276 1.824-5.262 1.824-4.694 0-8.5-3.806-8.5-8.5z"></path>
                      </g>
                    </svg>
                  </div>
                  <span className='navLink-text'>Explore</span>
                </div>
              </a>
            </div>
            <div className='navLink'>
              <a href='#'>
                <div className='navLink-content'>
                  <div className='nav-icon-container'>
                    <svg className='nav-icon' viewBox="0 0 24 24">
                      <g>
                        <path d="M19.993 9.042C19.48 5.017 16.054 2 11.996 2s-7.49 3.021-7.999 7.051L2.866 18H7.1c.463 2.282 2.481 4 4.9 4s4.437-1.718 4.9-4h4.236l-1.143-8.958zM12 20c-1.306 0-2.417-.835-2.829-2h5.658c-.412 1.165-1.523 2-2.829 2zm-6.866-4l.847-6.698C6.364 6.272 8.941 4 11.996 4s5.627 2.268 6.013 5.295L18.864 16H5.134z"></path>
                      </g>
                    </svg>
                  </div>
                  <span className='navLink-text'>Notifications</span>
                </div>
              </a>
            </div>
            <div className='navLink'>
              <a href='#'>
                <div className='navLink-content'>
                  <div className='nav-icon-container'>
                    <svg className='nav-icon' viewBox="0 0 24 24">
                      <g>
                        <path d="M1.998 5.5c0-1.381 1.119-2.5 2.5-2.5h15c1.381 0 2.5 1.119 2.5 2.5v13c0 1.381-1.119 2.5-2.5 2.5h-15c-1.381 0-2.5-1.119-2.5-2.5v-13zm2.5-.5c-.276 0-.5.224-.5.5v2.764l8 3.638 8-3.636V5.5c0-.276-.224-.5-.5-.5h-15zm15.5 5.463l-8 3.636-8-3.638V18.5c0 .276.224.5.5.5h15c.276 0 .5-.224.5-.5v-8.037z"></path>
                      </g>
                    </svg>
                  </div>
                  <span className='navLink-text'>Messages</span>
                </div>
              </a>
            </div>
          </div>
        </div>
      </section>
      <UserDropdown />
    </nav>
  )
}
