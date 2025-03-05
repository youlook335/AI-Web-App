import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function Testimonials() {
  const aiTestimonials = [
    {
      name: "DeepSeek AI",
      feedback: "Our collaboration with this AI platform has led to remarkable advancements in AI research.",
      img: "https://upload.wikimedia.org/wikipedia/commons/3/3f/DeepSeek_logo.png",
    },
    {
      name: "OpenAI",
      feedback: "This AI-powered app has set new standards in automation and AI-driven solutions.",
      img: "https://upload.wikimedia.org/wikipedia/commons/4/4d/OpenAI_Logo.svg",
    },
    {
      name: "Gemini AI",
      feedback: "An innovative AI tool that enhances machine learning workflows efficiently.",
      img: "https://upload.wikimedia.org/wikipedia/commons/8/8c/Google_Gemini_Logo.png",
    },
  ];

  const userTestimonials = [
    {
      name: "John Doe",
      feedback: "This app has completely revolutionized the way I work!",
      img: "https://randomuser.me/api/portraits/men/32.jpg",
    },
    {
      name: "Jane Smith",
      feedback: "Fantastic user experience and top-notch AI features.",
      img: "https://randomuser.me/api/portraits/women/44.jpg",
    },
    {
      name: "Michael Johnson",
      feedback: "I love the seamless integration and modern design.",
      img: "https://randomuser.me/api/portraits/men/65.jpg",
    },
  ];

  return (
    <section className="testimonials py-5 bg-light text-center">
      <div className="container">
        <h2 className="display-4 text-primary fw-bold">What Experts & Users Say</h2>
        <p className="lead mb-4">Feedback from top AI companies and our users</p>

        {/* AI Companies Testimonials */}
        <div className="row mb-5">
          {aiTestimonials.map((testimonial, index) => (
            <div key={index} className="col-md-4 mb-4">
              <div className="card shadow-sm p-4 border-0">
                <img 
                  src={testimonial.img} 
                  alt={testimonial.name} 
                  className="rounded-circle mx-auto d-block mb-3"
                  style={{ width: '100px', height: '100px', objectFit: 'contain' }}
                />
                <h5 className="fw-bold">{testimonial.name}</h5>
                <p className="text-muted">{testimonial.feedback}</p>
              </div>
            </div>
          ))}
        </div>

        {/* User Testimonials */}
        <div className="row">
          {userTestimonials.map((testimonial, index) => (
            <div key={index} className="col-md-4 mb-4">
              <div className="card shadow-sm p-4 border-0">
                <img 
                  src={testimonial.img} 
                  alt={testimonial.name} 
                  className="rounded-circle mx-auto d-block mb-3"
                  style={{ width: '100px', height: '100px', objectFit: 'cover' }}
                />
                <h5 className="fw-bold">{testimonial.name}</h5>
                <p className="text-muted">{testimonial.feedback}</p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Testimonials;
