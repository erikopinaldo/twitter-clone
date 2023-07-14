import React from 'react'

export const Navbar = () => {
  return (
    <nav className='navbar'>
      <section>
        <div className="navContent">
          <div className="navLinks">
            <a href='#'>🏠 <span className='navLink-text'>Home</span></a>
            <a href='#'>🔎 <span className='navLink-text'>Search</span></a>
            <a href='#'>🔔 <span className='navLink-text'>Notifications</span></a>
            <a href='#'>✉️ <span className='navLink-text'>Messages</span></a>
          </div>
        </div>
      </section>
    </nav>
  )
}
