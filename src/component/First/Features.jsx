import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function Features() {
  return (
    <section className="features py-5">
      <div className="container">
        <div className="row">
          <div className="col-md-12 text-center">
            <h2>Features</h2>
          </div>
        </div>
        <div className="row">
          <div className="col-md-4">
            <h3>Feature 1</h3>
            <p>Description of feature 1</p>
          </div>
          <div className="col-md-4">
            <h3>Feature 2</h3>
            <p>Description of feature 2</p>
          </div>
          <div className="col-md-4">
            <h3>Feature 3</h3>
            <p>Description of feature 3</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Features;