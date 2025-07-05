import React from 'react';

const About = () => (
  <div
    style={{
      minHeight: '100vh',
      width: '100vw',
      background: 'url(https://wallpapercave.com/wp/wp4056410.jpg) center/cover no-repeat',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontFamily: 'Montserrat, sans-serif',
      padding: 0,
      margin: 0
    }}
  >
    <div
      className="about-animated-card"
      style={{
        background: 'rgba(0,0,0,0.7)',
        borderRadius: 24,
        padding: '48px 36px 36px 36px',
        maxWidth: 540,
        width: '90%',
        textAlign: 'center',
        boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.37)',
        border: '4px solid',
        borderImage: 'linear-gradient(270deg, #ff4757, #1e90ff, #ff4757) 1',
        animation: 'borderMove 4s linear infinite, floatCard 3s ease-in-out infinite alternate'
      }}
    >
      <h2
        style={{
          color: '#fff',
          fontWeight: 900,
          fontSize: '2.3rem',
          letterSpacing: 2,
          marginBottom: 18,
          opacity: 0,
          animation: 'fadeInDown 1.2s 0.2s forwards'
        }}
      >
        About <span style={{ color: '#ff4757' }}>RK MOVIE</span>
      </h2>
      <p
        style={{
          color: '#fff',
          fontSize: '1.15rem',
          fontWeight: 500,
          opacity: 0,
          animation: 'fadeInUp 1.2s 0.8s forwards'
        }}
      >
        RK MOVIE is your destination for discovering, watching, and enjoying the latest movies with a beautiful, cinematic interface.<br />
        Built with React and Bootstrap for a modern experience.<br />
        <span style={{ color: '#ff4757', fontWeight: 700 }}>Enjoy the magic of movies, anytime!</span>
      </p>
    </div>
    <style>{`
      @keyframes borderMove {
        0% { border-image-source: linear-gradient(270deg, #ff4757, #1e90ff, #ff4757); }
        100% { border-image-source: linear-gradient(630deg, #1e90ff, #ff4757, #1e90ff); }
      }
      @keyframes floatCard {
        0% { transform: translateY(0px) scale(1); }
        100% { transform: translateY(-16px) scale(1.02); }
      }
      @keyframes fadeInDown {
        0% { opacity: 0; transform: translateY(-40px);}
        100% { opacity: 1; transform: translateY(0);}
      }
      @keyframes fadeInUp {
        0% { opacity: 0; transform: translateY(40px);}
        100% { opacity: 1; transform: translateY(0);}
      }
    `}</style>
  </div>
);

export default About; 