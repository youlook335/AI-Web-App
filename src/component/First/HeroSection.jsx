function HeroSection() {
  return (
    <section className="hero text-white py-5" style={{
      background: 'linear-gradient(135deg, #1a1a2e, #16213e)',
      minHeight: '70vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      textAlign: 'center'
    }}>
      <div className="container">
        <h1 className="display-2 fw-bold animate__animated animate__fadeInDown">Experience the Future of AI</h1>
        <p className="lead mt-3 animate__animated animate__fadeInUp">
          Unlock endless possibilities with our cutting-edge AI Web Application.
        </p>
        <button className="btn btn-lg btn-warning mt-4 px-5 py-3 fw-bold animate__animated animate__zoomIn"
          style={{ borderRadius: '50px', transition: '0.3s' }}
          onMouseOver={(e) => e.target.style.transform = 'scale(1.1)'}
          onMouseOut={(e) => e.target.style.transform = 'scale(1)'}
        >
          Get Started
        </button>
      </div>
    </section>
  );
}

export { HeroSection };
