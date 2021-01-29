import React from 'react';
import { useHistory } from 'react-router-dom';

function MovieList(props) {
  const { movieData } = props;
  const history = useHistory();

  const handleMovieList = (id) => {
    history.push({ pathname: `/movie_id:${id}` });
  };

  return (
    <div className="container mt-3">
      <div className="row">
        {movieData &&
          movieData.length &&
          movieData.map((res) => (
            <div
              className="col-sm-2 mb-4"
              key={res.id}
              onClick={() => handleMovieList(res.id)}
            >
              <div className="card" style={{ cursor: 'pointer' }}>
                <div className="card-body p-0">
                  <img
                    src={`//image.tmdb.org/t/p/w220_and_h330_face/${res.poster_path}`}
                    alt="movie_img"
                    className="card-img"
                  />
                </div>
              </div>
              <div
                style={{
                  fontSize: '13px',
                  fontWeight: 'bold',
                  marginTop: '7px',
                }}
              >
                {res.original_title}
              </div>
              <div style={{ fontSize: '11px' }}>{res.release_date}</div>
            </div>
          ))}
      </div>
    </div>
  );
}

export default MovieList;
