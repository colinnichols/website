import { Link } from "@tanstack/react-router";

export default function Header() {
  return (
    <header className="header">
      <div className="flex mx-auto px-[2rem] max-w-5xl">
        <div className="grow">
          <Link className="site-title" to="/">
            Colin Nichols
          </Link>
        </div>
        <nav className="site-nav">
          <input
            type="checkbox"
            id="nav-trigger"
            className="nav-trigger sr-only"
          />
          <label htmlFor="nav-trigger" tabIndex="0">
            <span className="menu-icon">
              <span className="sr-only">Menu Toggle</span>
              <img className="fa" src="/img/bars.svg" aria-hidden="true" />
            </span>
          </label>
          <div className="trigger">
            <Link className="page-link" to="/about">
              About
            </Link>
            <Link className="page-link" to="/resume">
              Resume
            </Link>
          </div>
        </nav>
      </div>
    </header>
  );
}
