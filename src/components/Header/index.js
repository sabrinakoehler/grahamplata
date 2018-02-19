import React from 'react'
import Link from 'gatsby-link'

const Header = () => (
  <div style={{ marginBottom: '1rem' }}>
    <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', margin: '0 auto', maxWidth: 960, padding: '1rem' }}>
      <div style={{ flex: 1 }}>
        <h3 style={{ margin: 0 }}>
          <Link to="/" style={{ color: '#313639', textDecoration: 'none' }}>Graham Plata</Link>
        </h3>
        <small>Welcome to my Digital Sandbox</small>
      </div>
      <div style={{ display: 'flex', flex: 1, flexDirection: 'row', justifyContent: 'flex-end' }}>
        <Link to="/about" style={{ color: '#313639', paddingRight: '7px' }}>About</Link>
        <Link to="/blog" style={{ color: '#313639', paddingRight: '7px' }}>Blog</Link>
        <Link to="/projects" style={{ color: '#313639', paddingRight: '7px' }}>Projects</Link>
      </div>
    </div>
  </div>
)

export default Header

