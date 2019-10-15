import React from "react"
import { Link } from "gatsby"

class Layout extends React.Component {
  render() {
    const { location, title, children } = this.props
    let header

    header = (
      <div className="flex justify-between">
        <Link to="/">Logo</Link>
        <nav className="flex">
          <ul className="flex list-none">
            <li>
              <Link to="/" className="p-3">
                Home
              </Link>
            </li>
            <li>
              <Link to="/blog" className="p-3">
                Blog
              </Link>
            </li>
            <li>
              <Link to="/about" className="p-3">
                About
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    )

    return (
      <div className="container mx-auto max-w-2xl px-5 py-10">
        <header className="mb-8">{header}</header>
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
