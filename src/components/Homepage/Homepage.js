import React from 'react';
import Search from '../../assets/search.svg';
import MovieContainer from '../Movie/MovieContainer';

function Homepage() {
  return (
    <div>
      <div>
        <nav className="nav_font navbar navbar-expand-lg navbar-light bg-light">
          <a className="navbar-brand p-0" href="#/">
            Cinibuzz
          </a>
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
            <ul
              className="navbar-nav ml-auto mr-3"
              style={{ fontSize: '18px' }}
            >
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
        <div
          className="container"
          style={{
            backgroundColor: '#eee',
            height: '250px',
            borderRadius: '0 0 5px 5px',
          }}
        >
          <p className="search_title">Find perfect movie for evening</p>
          <div className="d-flex">
            <div className="input-group flex-nowrap ml-5 mr-2">
              <div className="input-group-prepend">
                <span
                  className="input-group-text"
                  id="addon-wrapping"
                  style={{ backgroundColor: 'white', border: 0 }}
                >
                  <img src={Search} alt="search_icon" />
                </span>
              </div>
              <input
                type="text"
                className="form-control border-0"
                placeholder="Search movies"
                aria-label="Username"
                aria-describedby="addon-wrapping"
                style={{ boxShadow: 'none' }}
              />
            </div>
            <button
              className="btn mr-5"
              style={{
                backgroundColor: '#a92be2',
                color: 'white',
                padding: '0 20px',
                boxShadow: 'none',
              }}
            >
              SEARCH
            </button>
          </div>
        </div>
      </div>
      <MovieContainer />
    </div>
  );
}

export default Homepage;
