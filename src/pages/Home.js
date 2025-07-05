import React from 'react';
import { Link } from 'react-router-dom';

const bgImage = "https://wallpapercave.com/wp/wp4056410.jpg"; // You can change this to any movie wallpaper

const features = [
  {
    title: "Latest Releases",
    desc: "Stay updated with the newest movies added every week.",
    icon: "🎬"
  },
  {
    title: "HD Streaming",
    desc: "Enjoy movies in high definition with smooth playback.",
    icon: "📺"
  },
  {
    title: "Easy Navigation",
    desc: "Find your favorite movies quickly with our intuitive interface.",
    icon: "🔎"
  }
];

const Home = () => (
  <div
    style={{
      minHeight: '100vh',
      width: '100vw',
      background: `url(${bgImage}) center/cover no-repeat`,
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'flex-start',
      fontFamily: 'Montserrat, sans-serif',
      padding: 0,
      margin: 0
    }}
  >
    <div
      style={{
        marginTop: 80,
        background: 'rgba(0,0,0,0.65)',
        borderRadius: 16,
        padding: '40px 28px 28px 28px',
        maxWidth: 540,
        width: '90%',
        textAlign: 'center',
        boxShadow: '0 4px 24px rgba(0,0,0,0.4)'
      }}
    >
      <h1
        style={{
          fontSize: '2.5rem',
          fontWeight: 900,
          letterSpacing: 2,
          color: '#fff',
          marginBottom: 16
        }}
      >
        Welcome to <span style={{ color: '#ff4757' }}>RK MOVIE</span>
      </h1>
      <p
        style={{
          fontSize: '1.1rem',
          color: '#fff',
          opacity: 0.92,
          marginBottom: 28,
          fontWeight: 500
        }}
      >
        Discover, watch, and enjoy the latest movies. Your one-stop destination for all things cinema!
      </p>
      <Link
        to="/movies"
        style={{
          display: 'inline-block',
          background: '#ff4757',
          color: '#fff',
          padding: '14px 36px',
          borderRadius: '30px',
          fontWeight: 700,
          fontSize: '1.1rem',
          textDecoration: 'none',
          boxShadow: '0 2px 12px #0003',
          marginTop: 10,
          marginBottom: 10,
          letterSpacing: 1,
          border: 'none',
          transition: 'background 0.3s'
        }}
        onMouseOver={e => {
          e.currentTarget.style.background = '#d7263d';
        }}
        onMouseOut={e => {
          e.currentTarget.style.background = '#ff4757';
        }}
      >
        Browse Movies
      </Link>
    </div>
    <div
      style={{
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center',
        alignItems: 'stretch',
        gap: '32px',
        maxWidth: 900,
        width: '100%',
        margin: '40px auto 0 auto',
        zIndex: 2
      }}
    >
      {features.map((feature, idx) => (
        <div
          key={feature.title}
          style={{
            background: 'rgba(0,0,0,0.7)',
            color: '#fff',
            borderRadius: 14,
            minWidth: 240,
            flex: '1 1 260px',
            maxWidth: 300,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '32px 18px 24px 18px',
            boxShadow: '0 2px 12px #0002',
            border: '1px solid rgba(255,255,255,0.10)',
            marginBottom: 10
          }}
        >
          <div style={{ fontSize: 48, marginBottom: 16 }}>{feature.icon}</div>
          <h5 style={{ fontWeight: 800, fontSize: '1.25rem', marginBottom: 10 }}>{feature.title}</h5>
          <p style={{ fontWeight: 500, fontSize: '1rem', opacity: 0.92, margin: 0, textAlign: 'center' }}>{feature.desc}</p>
        </div>
      ))}
    </div>
  </div>
);

export default Home; 