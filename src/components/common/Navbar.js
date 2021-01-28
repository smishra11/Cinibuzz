import React from 'react';
import { Link } from 'react-router-dom';
function Navbar() {
  return (
    <div>
      <nav className="nav_font navbar navbar-expand-lg navbar-light bg-light">
        <Link className="navbar-brand p-0" to="/">
          Cinibuzz
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarText"
          aria-controls="navbarText"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarText">
          <ul className="navbar-nav ml-auto mr-3" style={{ fontSize: '18px' }}>
            <li className="nav-item ml-1">
              <a className="nav-link" href="#/">
                Movies
              </a>
            </li>
            <li className="nav-item ml-1">
              <a className="nav-link" href="#/">
                TV Shows
              </a>
            </li>
            <li className="nav-item ml-1">
              <a className="nav-link" href="#/">
                Kids
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
