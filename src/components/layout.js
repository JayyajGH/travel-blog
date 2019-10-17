import React from "react"
import { Link } from "gatsby"
import Header1 from "../components/header"

class Layout extends React.Component {
  render() {
    const { location, title, children } = this.props

    return (
      <div className="container mx-auto max-w-2xl px-5">
        <Header1></Header1>
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
