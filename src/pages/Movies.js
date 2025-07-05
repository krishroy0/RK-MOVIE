import React from 'react';
import MovieCard from '../components/MovieCard';

const movies = [
  { id: 1, title: 'Inception', poster: 'https://flxt.tmsimg.com/assets/p7825626_p_v8_af.jpg' },
  { id: 2, title: 'Interstellar', poster: 'https://image.tmdb.org/t/p/w500/rAiYTfKGqDCRIIqo664sY9XZIvQ.jpg' },
  { id: 3, title: 'The Dark Knight', poster: 'https://image.tmdb.org/t/p/w500/qJ2tW6WMUDux911r6m7haRef0WH.jpg' },
  { id: 4, title: 'Avengers: Endgame', poster: 'https://image.tmdb.org/t/p/w500/ulzhLuWrPK07P1YkdWQLZnQh1JL.jpg' },
  { id: 5, title: 'Joker', poster: 'https://image.tmdb.org/t/p/w500/udDclJoHjfjb8Ekgsd4FDteOkCU.jpg' },
];

const bgImage = "https://wallpapercave.com/wp/wp4056410.jpg"; // Cinematic background

const Movies = () => (
  <div
    style={{
      minHeight: '100vh',
      width: '100vw',
      background: `url(${bgImage}) center/cover no-repeat`,
      padding: 0,
      margin: 0,
      fontFamily: 'Montserrat, sans-serif'
    }}
  >
    <div style={{
      maxWidth: 1200,
      margin: '0 auto',
      padding: '60px 16px 32px 16px'
    }}>
      <h2
        style={{
          color: '#fff',
          fontWeight: 900,
          fontSize: '2.3rem',
          letterSpacing: 2,
          marginBottom: 32,
          textShadow: '0 2px 16px #000a'
        }}
      >
        🎬 Movies
      </h2>
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
          gap: '32px'
        }}
      >
        {movies.map(movie => (
          <div
            key={movie.id}
            style={{
              background: 'rgba(0,0,0,0.75)',
              borderRadius: 16,
              boxShadow: '0 4px 24px #0006',
              padding: 18,
              transition: 'transform 0.2s, box-shadow 0.2s',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              cursor: 'pointer'
            }}
            onMouseOver={e => {
              e.currentTarget.style.transform = 'scale(1.04)';
              e.currentTarget.style.boxShadow = '0 8px 32px #ff4757aa';
            }}
            onMouseOut={e => {
              e.currentTarget.style.transform = 'scale(1)';
              e.currentTarget.style.boxShadow = '0 4px 24px #0006';
            }}
          >
            <MovieCard movie={movie} />
          </div>
        ))}
      </div>
    </div>
  </div>
);

export default Movies; 