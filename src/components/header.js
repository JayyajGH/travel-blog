import React from "react"
import { Link } from "gatsby"

const Header = () => {
  return (
    <div className="pt-5 mb-8 flex flex-col items-center md:items-baseline md:flex-row justify-between">
      <Link to="/">
        <h1 className="mt-1 text-red-800">Travel Blog</h1>
        <p className="text-gray-700">View the world</p>
      </Link>
      <nav className="flex">
        <ul className="flex list-none">
          <li>
            <Link to="/" className="text-lg p-3 text-gray-700 hover:text-black">
              Home
            </Link>
          </li>
          <li>
            <Link to="/blog" className="text-lg p-3 text-gray-700 hover:text-black">
              Blog
            </Link>
          </li>
          <li>
            <Link to="/about" className="text-lg p-3 text-gray-700 hover:text-black">
              About
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  )
}

export default Header
