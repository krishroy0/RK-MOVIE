import React from 'react';
import { Link } from 'react-router-dom';

const MovieCard = ({ movie }) => (
  <div className="card bg-dark text-white border-0 shadow movie-card">
    <Link to={`/movie/${movie.id}`} style={{ textDecoration: 'none', color: 'inherit' }}>
      <img src={movie.poster} className="card-img-top" alt={movie.title} style={{ height: '320px', objectFit: 'cover' }} />
      <div className="card-body">
        <h5 className="card-title text-center">{movie.title}</h5>
      </div>
    </Link>
  </div>
);

export default MovieCard; 