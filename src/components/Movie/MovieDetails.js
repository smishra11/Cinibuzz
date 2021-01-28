import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import noImage from '../common/noimg.png';
import Spinner from '../common/spinner1.gif';

function MovieDetails() {
  const { slug } = useParams();
  const [movieDetails, setMovieDetails] = useState({});
  const [loading, setLoading] = useState(true);

  const handleMovieDetails = () => {
    let id = slug.split(':');
    axios
      .get(
        `${process.env.REACT_APP_BASE_URL}/${id[1]}?api_key=${process.env.REACT_APP_API_KEY}`
      )
      .then((res) => {
        setMovieDetails(res.data);
        setLoading(false);
      })
      .catch((err) => console.log(err));
  };

  const hourDuration = () => {
    let hour = Math.floor(movieDetails.runtime / 60);
    return hour;
  };
  const minuteDuration = () => {
    let min = movieDetails.runtime % 60;
    return min;
  };
  const hour = hourDuration();
  const min = minuteDuration();

  useEffect(() => {
    handleMovieDetails();
  }, []);
  return (
    <div>
      {loading ? (
        <div className="d-flex justify-content-center">
          <img src={Spinner} alt="loading" />
        </div>
      ) : (
        <div className="container">
          <div className="card mb-3 mt-4" style={{ maxWidth: '100%' }}>
            <div className="row no-gutters">
              <div className="col-md-4">
                <img
                  style={{
                    borderRadius: '5px',
                    margin: '1rem',
                    marginLeft: '2rem',
                  }}
                  src={`//image.tmdb.org/t/p/w220_and_h330_face/${movieDetails.backdrop_path}`}
                  alt="img"
                />
                <div className="movie_score">
                  <p>User Score</p>
                  <div className="score_result">
                    <p>{movieDetails.vote_average * 10}%</p>
                  </div>
                </div>
              </div>
              <div className="col-md-8 font_14">
                <div className="card-body">
                  <p
                    className="card-title movie_title"
                    style={{ color: 'blueviolet' }}
                  >
                    {movieDetails.original_title}
                  </p>
                  <p className="card-text text-muted mb-1">
                    <b>Release Date : </b>
                    {movieDetails.release_date}
                  </p>
                  <p className="card-text text-muted mb-1">
                    <b>Duration : </b>
                    {hour}h {min}m
                  </p>
                  <p className="card-text text-muted mb-1">
                    <b>Original Language : </b>
                    {movieDetails.original_language}
                  </p>
                  <p className="card-text text-muted mb-1">
                    <b>Budget : $ </b>
                    {movieDetails.budget}
                  </p>
                  <p className="card-text text-muted mb-1">
                    <b>Revenue : $ </b>
                    {movieDetails.revenue}
                  </p>
                  <p className="card-text text-muted">
                    <b>Overview : </b>
                    {movieDetails.overview}
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="card">
            <div className="card-body">
              <div
                style={{
                  fontWeight: 'bold',
                  marginBottom: '1rem',
                  fontSize: '18px',
                  color: 'blueviolet',
                }}
              >
                Production companies:
              </div>
              <div className="row">
                {movieDetails.production_companies &&
                  movieDetails.production_companies.map((cmp) => {
                    return (
                      <div className="col-sm" key={cmp.id}>
                        <div style={{ textAlign: 'center' }}>
                          <img
                            style={{
                              width: '30px',
                              height: '35px',
                            }}
                            src={
                              cmp.logo_path === null
                                ? noImage
                                : `//image.tmdb.org/t/p/w220_and_h330_face/${cmp.logo_path}`
                            }
                            alt="logo"
                          />
                          <p
                            style={{
                              textAlign: 'center',
                              color: 'gray',
                              fontSize: '14px',
                            }}
                          >
                            {cmp.name}
                          </p>
                        </div>
                      </div>
                    );
                  })}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default MovieDetails;
