import React, { useState } from 'react';
import Search from '../../assets/search.svg';
import MovieContainer from '../Movie/MovieContainer';
import axios from 'axios';

function Homepage() {
  const [inputChange, setInputChange] = useState('');
  const [searchData, setSearchData] = useState({});

  const handleSearch = () => {
    console.log('searched');
    axios
      .get(
        `https://api.themoviedb.org/3/search/movie?api_key=${process.env.REACT_APP_API_KEY}&query=${inputChange}`
      )
      .then((res) => setSearchData(res.data))
      .catch((err) => console.log(err));
  };

  return (
    <div>
      <div>
        <div style={{ position: 'fixed', width: '100%', top: 0, zIndex: 1 }}>
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
        </div>
        <div className="container search">
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
                onChange={(e) => setInputChange(e.target.value)}
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
              onClick={handleSearch}
            >
              SEARCH
            </button>
          </div>
        </div>
      </div>
      <MovieContainer searchData={searchData} />
    </div>
  );
}

export default Homepage;
