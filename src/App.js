import React, { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Movies from './pages/Movies';
import About from './pages/About';
import Contact from './pages/Contact';
import MovieDetail from './pages/MovieDetail';
import VideoBackground from './components/VideoBackground';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from './logo.svg';

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2500); // 2.5s loading
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="App">
      {loading ? (
        <div
          style={{
            minHeight: '100vh',
            width: '100vw',
            background: 'url(https://wallpapercave.com/wp/wp4056410.jpg) center/cover no-repeat',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            fontFamily: 'Montserrat, sans-serif',
            zIndex: 9999
          }}
        >
          <div style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center'
          }}>
            {/* Animated RK Circle */}
            <div style={{
              width: 100,
              height: 100,
              borderRadius: '50%',
              border: '6px solid #ff4757',
              borderTop: '6px solid #1e90ff',
              animation: 'spin 1.2s linear infinite',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              background: 'rgba(0,0,0,0.7)',
              marginBottom: 24
            }}>
              <span style={{
                color: '#fff',
                fontWeight: 900,
                fontSize: 36,
                letterSpacing: 2,
                fontFamily: 'Montserrat, sans-serif'
              }}>
                RK
              </span>
            </div>
            {/* Animated Text */}
            <h1 style={{
              color: '#fff',
              fontWeight: 900,
              fontSize: '2.2rem',
              letterSpacing: 2,
              textShadow: '0 2px 16px #ff4757cc',
              marginBottom: 0,
              opacity: 0,
              animation: 'fadeInUp 1.2s 0.5s forwards'
            }}>
              RK MOVIE
            </h1>
            <p style={{
              color: '#ff4757',
              fontWeight: 600,
              fontSize: '1.1rem',
              letterSpacing: 1,
              marginTop: 8,
              opacity: 0,
              animation: 'fadeInUp 1.2s 1.2s forwards'
            }}>
              Loading...
            </p>
          </div>
          <style>{`
            @keyframes spin {
              0% { transform: rotate(0deg);}
              100% { transform: rotate(360deg);}
            }
            @keyframes fadeInUp {
              0% { opacity: 0; transform: translateY(40px);}
              100% { opacity: 1; transform: translateY(0);}
            }
          `}</style>
        </div>
      ) : (
        <>
          <VideoBackground />
          <Navbar />
          <div className="main-content">
            <>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/movies" element={<Movies />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/movie/:id" element={<MovieDetail />} />
              </Routes>
            </>
          </div>
          <Footer />
        </>
      )}
    </div>
  );
}

export default App;
