import React from 'react';

const containerVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.3,
      duration: 0.7
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 }
};

const Contact = () => (
  <div
    className="container py-5"
    style={{
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      background: 'linear-gradient(135deg, #232526 0%, #414345 100%)'
    }}
  >
    <div
      className="p-4 rounded shadow"
      style={{
        background: 'rgba(30, 30, 40, 0.85)',
        boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.37)',
        backdropFilter: 'blur(8px)',
        border: '1px solid rgba(255,255,255,0.1)',
        maxWidth: 400,
        width: '100%'
      }}
    >
      <h2
        className="text-white mb-4 text-center"
        style={{ letterSpacing: 2, fontWeight: 700 }}
      >
        Contact Us
      </h2>
      <form>
        <div className="mb-3">
          <label className="form-label text-white">Name</label>
          <input
            type="text"
            className="form-control"
            placeholder="Your Name"
            style={{ background: 'rgba(255,255,255,0.07)', color: '#fff', border: 'none' }}
          />
        </div>
        <div className="mb-3">
          <label className="form-label text-white">Email</label>
          <input
            type="email"
            className="form-control"
            placeholder="Your Email"
            style={{ background: 'rgba(255,255,255,0.07)', color: '#fff', border: 'none' }}
          />
        </div>
        <div className="mb-3">
          <label className="form-label text-white">Message</label>
          <textarea
            className="form-control"
            rows="4"
            placeholder="Your Message"
            style={{ background: 'rgba(255,255,255,0.07)', color: '#fff', border: 'none' }}
          ></textarea>
        </div>
        <button
          type="submit"
          className="btn btn-danger w-100"
          style={{
            fontWeight: 600,
            letterSpacing: 1,
            marginTop: 10,
            background: 'linear-gradient(90deg, #ff416c 0%, #ff4b2b 100%)',
            border: 'none'
          }}
        >
          Send
        </button>
      </form>
    </div>
  </div>
);

export default Contact; 