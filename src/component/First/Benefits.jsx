import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle, faLightbulb, faChartLine, faLock, faRocket, faUsers } from '@fortawesome/free-solid-svg-icons'; // Import icons

function Benefits() {
  const benefits = [
    {
      icon: faLightbulb,
      title: "Innovative Solutions",
      description: "Cutting-edge AI algorithms power our web app, providing innovative solutions to your challenges.",
    },
    {
      icon: faChartLine,
      title: "Data-Driven Insights",
      description: "Gain valuable insights from your data with our advanced analytics and reporting features.",
    },
    {
      icon: faLock,
      title: "Secure and Reliable",
      description: "Your data is safe with us. We employ robust security measures to protect your information.",
    },
    {
      icon: faRocket,
      title: "Boost Productivity",
      description: "Streamline your workflows and increase productivity with our intuitive and efficient web app.",
    },
    {
      icon: faUsers,
      title: "Collaborative Platform",
      description: "Connect and collaborate with your team seamlessly on our user-friendly platform.",
    },
    {
      icon: faCheckCircle,
      title: "Easy to Use",
      description: "Our web app is designed for simplicity and ease of use, even for non-technical users.",
    },
    {
      icon: faCheckCircle,
      title: "24/7 Support",
      description: "We provide round-the-clock support to assist you with any questions or issues you may encounter.",
    },
    {
      icon: faCheckCircle,
      title: "Scalable Solutions",
      description: "Our web app can scale to meet the growing needs of your business.",
    },
    {
      icon: faCheckCircle,
      title: "Customizable",
      description: "Tailor our web app to fit your specific requirements and workflows.",
    },
  ];

  return (
    <section className="benefits py-5 bg-light">
      <div className="container">
        <div className="row">
          <div className="col-md-12 text-center">
            <h2>Benefits</h2>
            <p className="lead">Experience the advantages of our cutting-edge AI web app.</p> {/* Added a lead paragraph */}
          </div>
        </div>
        <div className="row">
          {benefits.map((benefit, index) => (
            <div className="col-md-4 col-lg-3 mb-4" key={index}> {/* Responsive columns */}
              <div className="card h-100"> {/* Card for each benefit */}
                <div className="card-body text-center">
                  <FontAwesomeIcon icon={benefit.icon} size="2x" className="mb-3 text-primary" /> {/* Icon */}
                  <h3 className="card-title">{benefit.title}</h3>
                  <p className="card-text">{benefit.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Benefits;