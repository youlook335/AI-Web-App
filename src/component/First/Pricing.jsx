import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function Pricing() {
  return (
    <section className="pricing py-5">
      <div className="container">
        <div className="row">
          <div className="col-md-12 text-center">
            <h2>Pricing</h2>
          </div>
        </div>
        <div className="row">
          <div className="col-md-4">
            <h3>Plan 1</h3>
            <p>Description of plan 1</p>
            <button className="btn btn-primary">Buy Now</button>
          </div>
          <div className="col-md-4">
            <h3>Plan 2</h3>
            <p>Description of plan 2</p>
            <button className="btn btn-primary">Buy Now</button>
          </div>
          <div className="col-md-4">
            <h3>Plan 3</h3>
            <p>Description of plan 3</p>
            <button className="btn btn-primary">Buy Now</button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Pricing;