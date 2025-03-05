import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function Benefits() {
  return (
    <section className="benefits py-5 bg-light">
      <div className="container">
        <div className="row">
          <div className="col-md-12 text-center">
            <h2>فوائد</h2>
          </div>
        </div>
        <div className="row">
          <div className="col-md-4">
            <h3>فائدہ 1</h3>
            <p>فائدہ 1 کی تفصیل</p>
          </div>
          <div className="col-md-4">
            <h3>فائدہ 2</h3>
            <p>فائدہ 2 کی تفصیل</p>
          </div>
          <div className="col-md-4">
            <h3>فائدہ 3</h3>
            <p>فائدہ 3 کی تفصیل</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Benefits;