import React from 'react';

// Example: Replace this with real data fetching logic
const movie = {
  title: 'Example Movie',
  description: 'This is an example movie description.',
  hdhub4youLink: 'https://hdhub4you.com/example-movie-download'
};

const MovieDetail = () => {
  return (
    <div>
      <h2>{movie.title}</h2>
      <p>{movie.description}</p>
      <a
        href={movie.hdhub4youLink}
        target="_blank"
        rel="noopener noreferrer"
        style={{
          display: 'inline-block',
          padding: '10px 20px',
          background: '#007bff',
          color: '#fff',
          borderRadius: '5px',
          textDecoration: 'none',
          marginTop: '10px'
        }}
      >
        Watch/Download on HDHub4You
      </a>
    </div>
  );
};

export default MovieDetail;
