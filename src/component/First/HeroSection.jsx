import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function HeroSection() {
  return (
    <section className="hero bg-primary text-white py-5">
      <div className="container">
        <div className="row">
          <div className="col-md-12 text-center">
            <h1>Introduction to AI Web App</h1>
            <p className="tagline">Tagline that describes your app.</p>
            <button className="cta-button btn btn-lg btn-warning">Call to Action</button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;