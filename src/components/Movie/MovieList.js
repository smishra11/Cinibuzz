import React from 'react';

function MovieList(props) {
  const { results } = props.movieData;
  return (
    <div className="container mt-3">
      <div className="row">
        {results &&
          results.length &&
          results.map((res) => (
            <div className="col-sm-2 mb-4" key={res.id}>
              <div className="card">
                <div className="card-body p-0">
                  <img
                    src={`//image.tmdb.org/t/p/w220_and_h330_face/${res.poster_path}`}
                    alt="movie_img"
                    className="card-img"
                  />
                </div>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
}

export default MovieList;
