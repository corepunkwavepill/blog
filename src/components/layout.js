import * as React from "react"
import { Link } from "gatsby"

const Layout = ({ location, title, children }) => {
  const rootPath = `${__PATH_PREFIX__}/`
  const isRootPath = location.pathname === rootPath
  let header

  if (isRootPath) {
    header = (
      <div className="terminal-nav">
        <div className="terminal-logo">
          <div className="logo terminal-prompt">
            <Link className="" to="/">
              {title}
            </Link>
          </div>
        </div>
        <nav class="terminal-menu">
          <ul>
            <li>
              <a class="menu-item" href="#">Item #1</a>
            </li>
            <li>
              <span class='og'>☀️ / 🌙</span>
            </li>
          </ul>
        </nav>
      </div>
    )
  } else {
    header = (
      <div className="terminal-nav">
        <div className="terminal-logo">
          <div className="logo terminal-prompt">
            <Link className="" to="/">
              {title}
            </Link>
          </div>
        </div>
        <nav class="terminal-menu">
          <ul>
            <li>
              <a class="menu-item" href="#">Item #1</a>
            </li>
            <li>
              <span class='og'>☀️ / 🌙</span>
            </li>
          </ul>
        </nav>
      </div>
    )
  }

  return (
    <div className="global-wrapper" data-is-root-path={isRootPath}>
      <header className="global-header">{header}</header>
      <main>{children}</main>
      <footer style={{ marginTop: `40px` }}>
        © {new Date().getFullYear()} <span class='og'>💣</span>
      </footer>
    </div>
  )
}

export default Layout
