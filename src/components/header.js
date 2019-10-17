import React from "react"
import { Link } from "gatsby"

const Header = () => {
  return (
    <div className="pt-5 mb-8 flex flex-col items-center md:items-baseline md:flex-row justify-between">
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
}

export default Header
