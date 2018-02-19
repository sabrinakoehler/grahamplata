import React from 'react'
import Link from 'gatsby-link'

const Header = () => (
  <div>
    <div>
      <h3><Link to="/">Graham Plata</Link></h3>
      <small>Welcome to my Digital Sandbox</small>
    </div>
    <div>
      <Link to="/about">About</Link>
      <Link to="/blog">Blog</Link>
      <Link to="/projects">Projects</Link>
    </div>
  </div>
)

export default Header

