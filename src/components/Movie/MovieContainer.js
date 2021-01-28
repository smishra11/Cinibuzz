import React, { useEffect } from 'react';
import MovieList from './MovieList';
import Spinner from '../common/spinner1.gif';

function MovieContainer(props) {
  const {
    handleClick,
    btnClicked,
    isLoading,
    movieData,
    catagories,
    setIsLoading,
    newRelease,
  } = props;

  useEffect(() => {
    const defaultData = async () => await newRelease();
    defaultData();
    setIsLoading(false);
  }, []);

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
      <div>
        {isLoading ? (
          <div className="d-flex justify-content-center">
            <img src={Spinner} alt="spinner" />
          </div>
        ) : (
          <MovieList movieData={movieData} />
        )}
      </div>
    </div>
  );
}

export default MovieContainer;
