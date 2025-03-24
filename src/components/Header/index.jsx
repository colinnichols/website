import { Link } from "@tanstack/react-router";
import "./styles.css";

export default function Header() {
  return (
    <header className="header">
      <div className="flex mx-auto px-[2rem] max-w-5xl">
        <div className="grow content-center">
          <Link className="logo" to="/">
            Colin Nichols
          </Link>
        </div>
        <nav className="navigation">
          <input
            type="checkbox"
            id="navigation-state"
            className="navigation-state"
          />
          <label htmlFor="navigation-state" className="navigation-trigger">
            <span className="sr-only">Menu Toggle</span>
            <img
              className="fa"
              src="/images/bars.svg"
              title="Menu Toggle"
              aria-hidden="true"
            />
          </label>
          <div className="navigation-menu">
            <Link to="/">About</Link>
            <Link to="/resume">Resume</Link>
          </div>
        </nav>
      </div>
    </header>
  );
}
