import React from "react"
import { Link } from "gatsby"

import { rhythm, scale } from "../utils/typography"

class Layout extends React.Component {
  render() {
    const { location, title, children } = this.props
    let header

    const headerContainer = {
        display: 'flex',
        justifyContent: 'space-between'
    };

    const navStyles = {
      display: 'flex'
    };

    const menuStyles = {
      display: 'flex',
      listStyle: 'none'
    };

    const liStyles = {
    };

    const logoStyles = {
      boxShadow: 'none'
    };

    const anchorStyles = {
      padding: '10px',
      boxShadow: 'none'
    };

    header = (
      <div style={headerContainer}>
        <Link to="/" style={logoStyles}>Logo</Link>
        <nav style={navStyles}>
          <ul style={menuStyles}>
            <li style={liStyles}>
              <Link to="/" style={anchorStyles}>Home</Link>
            </li>
            <li>
              <Link to="/blog" style={anchorStyles}>Blog</Link>
            </li>
            <li>
              <Link to="/about" style={anchorStyles}>About</Link>
            </li>
          </ul>
        </nav>
      </div>
    )

    return (
      <div
        style={{
          marginLeft: `auto`,
          marginRight: `auto`,
          maxWidth: rhythm(24),
          padding: `${rhythm(1.5)} ${rhythm(3 / 4)}`,
        }}
      >
        <header>{header}</header>
        <main>{children}</main>
        <footer>
          © {new Date().getFullYear()}, Built with
          {` `}
          <a href="https://www.gatsbyjs.org">Gatsby</a>
        </footer>
      </div>
    )
  }
}

export default Layout
