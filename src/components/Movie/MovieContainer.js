import React, { useEffect, useState } from 'react';
import MovieList from './MovieList';
import axios from 'axios';

function MovieContainer() {
  const [btnClicked, setBtnClicked] = useState('new_release');
  const [movieData, setMovieData] = useState({});

  const catagories = [
    {
      key: 'new_release',
      value: 'New Release',
    },
    {
      key: 'upcoming',
      value: 'Upcoming',
    },
    {
      key: 'action',
      value: 'Action',
    },
    {
      key: 'comedy',
      value: 'Comedy',
    },
    {
      key: 'crime',
      value: 'Crime',
    },
    {
      key: 'drama',
      value: 'Drama',
    },
    {
      key: 'thriller',
      value: 'Thriller',
    },
    {
      key: 'sci_fi',
      value: 'Sci-Fi',
    },
    {
      key: 'family',
      value: 'Family',
    },
    {
      key: 'horror',
      value: 'Horror',
    },
  ];
  useEffect(() => {
    axios
      .get(
        `${process.env.REACT_APP_BASE_URL}/now_playing?api_key=${process.env.REACT_APP_API_KEY}`
      )
      .then((res) => {
        setMovieData(res.data);
        console.log(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  const newRelease = () => {
    axios
      .get(
        `${process.env.REACT_APP_BASE_URL}/now_playing?api_key=${process.env.REACT_APP_API_KEY}`
      )
      .then((res) => {
        setMovieData(res.data);
        console.log(res.data);
      })
      .catch((err) => console.log(err));
  };
  const upcoming = () => {
    axios
      .get(
        `${process.env.REACT_APP_BASE_URL}/upcoming?api_key=${process.env.REACT_APP_API_KEY}`
      )
      .then((res) => {
        setMovieData(res.data);
        console.log(res.data);
      })
      .catch((err) => console.log(err));
  };
  const action = () => {
    axios
      .get(
        `${process.env.REACT_APP_BASE_URL}/now_playing?api_key=${process.env.REACT_APP_API_KEY}`
      )
      .then((res) => {
        setMovieData(res.data);
        console.log(res.data);
      })
      .catch((err) => console.log(err));
  };
  const comedy = () => {
    axios
      .get(
        `${process.env.REACT_APP_BASE_URL}/now_playing?api_key=${process.env.REACT_APP_API_KEY}`
      )
      .then((res) => {
        setMovieData(res.data);
        console.log(res.data);
      })
      .catch((err) => console.log(err));
  };
  const crime = () => {
    axios
      .get(
        `${process.env.REACT_APP_BASE_URL}/now_playing?api_key=${process.env.REACT_APP_API_KEY}`
      )
      .then((res) => {
        setMovieData(res.data);
        console.log(res.data);
      })
      .catch((err) => console.log(err));
  };
  const drama = () => {
    axios
      .get(
        `${process.env.REACT_APP_BASE_URL}/now_playing?api_key=${process.env.REACT_APP_API_KEY}`
      )
      .then((res) => {
        setMovieData(res.data);
        console.log(res.data);
      })
      .catch((err) => console.log(err));
  };
  const thriller = () => {
    axios
      .get(
        `${process.env.REACT_APP_BASE_URL}/now_playing?api_key=${process.env.REACT_APP_API_KEY}`
      )
      .then((res) => {
        setMovieData(res.data);
        console.log(res.data);
      })
      .catch((err) => console.log(err));
  };
  const sciFi = () => {
    axios
      .get(
        `${process.env.REACT_APP_BASE_URL}/now_playing?api_key=${process.env.REACT_APP_API_KEY}`
      )
      .then((res) => {
        setMovieData(res.data);
        console.log(res.data);
      })
      .catch((err) => console.log(err));
  };
  const family = () => {
    axios
      .get(
        `${process.env.REACT_APP_BASE_URL}/now_playing?api_key=${process.env.REACT_APP_API_KEY}`
      )
      .then((res) => {
        setMovieData(res.data);
        console.log(res.data);
      })
      .catch((err) => console.log(err));
  };
  const horror = () => {
    axios
      .get(
        `${process.env.REACT_APP_BASE_URL}/now_playing?api_key=${process.env.REACT_APP_API_KEY}`
      )
      .then((res) => {
        setMovieData(res.data);
        console.log(res.data);
      })
      .catch((err) => console.log(err));
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
      <div className="container movie">
        <h4 className="container_title">Browse movies by catagory</h4>
        <div className="btn-group mr-auto d-flex mt-3" role="group">
          {catagories.map((catagory) => (
            <button
              type="button"
              className={`btn ${
                btnClicked === catagory.key ? 'active_btn' : ''
              }`}
              key={catagory.key}
              onClick={() => handleClick(catagory.key)}
            >
              {catagory.value}
            </button>
          ))}
        </div>
      </div>
      <MovieList movieData={movieData} />
    </div>
  );
}

export default MovieContainer;
