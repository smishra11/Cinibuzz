import React, { useState } from 'react';
import Search from '../../assets/search.svg';
import MovieContainer from '../Movie/MovieContainer';
import axios from 'axios';
import Navbar from '../common/Navbar';
import { getGenreId } from '../../utils/Helper';

function Homepage() {
  const [inputChange, setInputChange] = useState('');
  const [btnClicked, setBtnClicked] = useState('new_release');
  const [movieData, setMovieData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  // const [isSearching, setIsSearching] = useState(false);

  const handleSearch = () => {
    // setIsSearching(true);
    axios
      .get(
        `https://api.themoviedb.org/3/search/movie?api_key=${process.env.REACT_APP_API_KEY}&query=${inputChange}`
      )
      .then((res) => {
        setMovieData(res.data.results);
        setIsLoading(false);
      })
      .catch((err) => {
        console.log(err);
        // setIsSearching(false);
      });
  };

  const newRelease = () => {
    axios
      .get(
        `${process.env.REACT_APP_BASE_URL}/now_playing?api_key=${process.env.REACT_APP_API_KEY}`
      )
      .then((res) => {
        setMovieData(res.data.results);
        //console.log(res.data);
        setIsLoading(false);
      })
      .catch((err) => console.log(err.message));
  };
  const upcoming = () => {
    axios
      .get(
        `${process.env.REACT_APP_BASE_URL}/upcoming?api_key=${process.env.REACT_APP_API_KEY}`
      )
      .then((res) => {
        setMovieData(res.data.results);
        setIsLoading(false);
      })
      .catch((err) => console.log(err.message));
  };
  const action = () => {
    axios
      .get(
        `${process.env.REACT_APP_BASE_URL}/now_playing?api_key=${process.env.REACT_APP_API_KEY}`
      )
      .then((res) => {
        let genId = getGenreId('action')[0];
        setMovieData(
          res.data.results.filter((item) => {
            if (item.genre_ids.includes(genId.id)) {
              return item;
            }
          })
        );
        setIsLoading(false);
      })
      .catch((err) => console.log(err.message));
  };
  const comedy = () => {
    axios
      .get(
        `${process.env.REACT_APP_BASE_URL}/now_playing?api_key=${process.env.REACT_APP_API_KEY}`
      )
      .then((res) => {
        let genId = getGenreId('comedy')[0];
        setMovieData(
          res.data.results.filter((item) => {
            if (item.genre_ids.includes(genId.id)) {
              return item;
            }
          })
        );
        setIsLoading(false);
      })
      .catch((err) => console.log(err.message));
  };
  const crime = () => {
    axios
      .get(
        `${process.env.REACT_APP_BASE_URL}/now_playing?api_key=${process.env.REACT_APP_API_KEY}`
      )
      .then((res) => {
        let genId = getGenreId('crime')[0];
        setMovieData(
          res.data.results.filter((item) => {
            if (item.genre_ids.includes(genId.id)) {
              return item;
            }
          })
        );
        setIsLoading(false);
      })
      .catch((err) => console.log(err.message));
  };
  const drama = () => {
    axios
      .get(
        `${process.env.REACT_APP_BASE_URL}/now_playing?api_key=${process.env.REACT_APP_API_KEY}`
      )
      .then((res) => {
        let genId = getGenreId('drama')[0];
        setMovieData(
          res.data.results.filter((item) => {
            if (item.genre_ids.includes(genId.id)) {
              return item;
            }
          })
        );
        setIsLoading(false);
      })
      .catch((err) => console.log(err.message));
  };
  const thriller = () => {
    axios
      .get(
        `${process.env.REACT_APP_BASE_URL}/now_playing?api_key=${process.env.REACT_APP_API_KEY}`
      )
      .then((res) => {
        let genId = getGenreId('thriller')[0];
        setMovieData(
          res.data.results.filter((item) => {
            if (item.genre_ids.includes(genId.id)) {
              return item;
            }
          })
        );
        setIsLoading(false);
      })
      .catch((err) => console.log(err.message));
  };
  const sciFi = () => {
    axios
      .get(
        `${process.env.REACT_APP_BASE_URL}/now_playing?api_key=${process.env.REACT_APP_API_KEY}`
      )
      .then((res) => {
        let genId = getGenreId('science fiction')[0];
        setMovieData(
          res.data.results.filter((item) => {
            if (item.genre_ids.includes(genId.id)) {
              return item;
            }
          })
        );
        setIsLoading(false);
      })
      .catch((err) => console.log(err.message));
  };
  const family = () => {
    axios
      .get(
        `${process.env.REACT_APP_BASE_URL}/now_playing?api_key=${process.env.REACT_APP_API_KEY}`
      )
      .then((res) => {
        let genId = getGenreId('family')[0];
        setMovieData(
          res.data.results.filter((item) => {
            if (item.genre_ids.includes(genId.id)) {
              return item;
            }
          })
        );
        setIsLoading(false);
      })
      .catch((err) => console.log(err.message));
  };
  const horror = () => {
    axios
      .get(
        `${process.env.REACT_APP_BASE_URL}/now_playing?api_key=${process.env.REACT_APP_API_KEY}`
      )
      .then((res) => {
        let genId = getGenreId('horror')[0];
        setMovieData(
          res.data.results.filter((item) => {
            if (item.genre_ids.includes(genId.id)) {
              return item;
            }
          })
        );
        setIsLoading(false);
      })
      .catch((err) => console.log(err.message));
  };

  const handleClick = (key) => {
    setBtnClicked(key);
    console.log(key);
    if (key === 'new_release') {
      newRelease();
    } else if (key === 'upcoming') {
      upcoming();
    } else if (key === 'action') {
      action();
    } else if (key === 'comedy') {
      comedy();
    } else if (key === 'crime') {
      crime();
    } else if (key === 'drama') {
      drama();
    } else if (key === 'thriller') {
      thriller();
    } else if (key === 'sci_fi') {
      sciFi();
    } else if (key === 'family') {
      family();
    } else if (key === 'horror') {
      horror();
    }
  };

  return (
    <div>
      <div>
        <div style={{ position: 'fixed', width: '100%', top: 0, zIndex: 1 }}>
          <Navbar />
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
      <MovieContainer
        handleClick={handleClick}
        btnClicked={btnClicked}
        isLoading={isLoading}
        setIsLoading={setIsLoading}
        movieData={movieData}
        newRelease={newRelease}
        // isSearching={isSearching}
        // inputChange={inputChange}
      />
    </div>
  );
}

export default Homepage;
