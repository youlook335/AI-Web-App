import React from 'react';
import { FaStar, FaStarHalfAlt } from 'react-icons/fa';

interface Testimonial {
  name: string;
  feedback: string;
  img: string;
  rating: number;
}

const Testimonials: React.FC = () => {
  const aiTestimonials: Testimonial[] = [
    {
      name: "OpenAI",
      feedback: "This AI-powered app has set new standards in automation and AI-driven solutions.",
      img: "https://upload.wikimedia.org/wikipedia/commons/4/4d/OpenAI_Logo.svg",
      rating: 4.5,
    },
    {
      name: "DeepSeek AI",
      feedback: "Our collaboration with this AI platform has led to remarkable advancements in AI research.",
      img: "public/deepseek-translation.png",
      rating: 5,
    },
    {
      name: "Gemini AI",
      feedback: "An innovative AI tool that enhances machine learning workflows efficiently.",
      img: "Google_Gemini_logo.svg.png",
      rating: 4.8,
    },
    {
      name: "Microsoft AI",
      feedback: "This AI web app has delivered exceptional performance in AI-driven cloud solutions.",
      img: "https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg",
      rating: 5,
    },
    {
      name: "Anthropic AI",
      feedback: "The advanced AI solutions provided here have significantly improved our NLP models.",
      img: "anthoric.png",
      rating: 4.7,
    },
    {
      name: "Meta AI",
      feedback: "A game-changer in AI technology, offering unparalleled insights and automation.",
      img: "Meta-AI.png",
      rating: 4.6,
    },
  ];

  // Function to generate star ratings
  const renderStars = (rating: number) => {
    const fullStars = Math.floor(rating);
    const halfStar = rating % 1 !== 0;

    return (
      <>
        {[...Array(fullStars)].map((_, i) => (
          <FaStar key={i} className="text-warning" />
        ))}
        {halfStar && <FaStarHalfAlt className="text-warning" />}
      </>
    );
  };

  return (
    <section className="testimonials py-5 bg-light text-center">
      <div className="container">
        <h2 className="display-4 text-primary fw-bold">AI Companies' Testimonials</h2>
        <p className="lead mb-4">Trusted by the world's leading AI companies</p>

        <div className="row">
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
                <div className="mb-2">{renderStars(testimonial.rating)}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
