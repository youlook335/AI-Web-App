import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaLinkedin, FaGithub, FaTwitter, FaFacebook } from 'react-icons/fa';

function TeamSection() {
  const teamMembers = [
    {
      name: 'Unknown',
      role: 'Cyber Security Leader',
      img: 'public/Boy (6) fit img in nonw.jpg',
      highlight: false,
      social: {
        linkedin: 'https://linkedin.com/in/unknown',
        github: 'https://github.com/unknown',
        twitter: 'https://twitter.com/unknown',
        facebook: 'https://facebook.com/unknown'
      }
    },
    {
      name: 'Tanveer',
      role: 'Lead Developer',
      img: 'public/Boy (6) fit img in nonw.jpg',
      highlight: true, // Center person (highlighted)
      social: {
        linkedin: 'https://linkedin.com/in/tanveer',
        github: 'https://github.com/tanveer',
        twitter: 'https://twitter.com/tanveer',
        facebook: 'https://facebook.com/tanveer'
      }
    },
    {
      name: 'M-Maroof',
      role: 'Data Scientist & Backend Developer',
      img: 'public/Boy (6) fit img in nonw.jpg',
      highlight: false,
      social: {
        linkedin: 'https://linkedin.com/in/m-maroof',
        github: 'https://github.com/m-maroof',
        twitter: 'https://twitter.com/m-maroof',
        facebook: 'https://facebook.com/m-maroof'
      }
    }
  ];

  return (
    <section className="team-section py-5 text-center bg-light">
      <div className="container">
        <h2 className="display-4 text-primary fw-bold">Meet Our Team</h2>
        <p className="lead mb-4">The minds behind our powerful AI web app</p>
        <div className="row justify-content-center">
          {teamMembers.map((member, index) => {
            const [hover, setHover] = useState(false);
            return (
              <div key={index} 
                className={`col-md-4 ${member.highlight ? 'scale-up' : ''}`} 
                onMouseEnter={() => setHover(true)} 
                onMouseLeave={() => setHover(false)}
              >
                <div className="team-member mb-4 position-relative">
                  <div 
                    className={`transition-all duration-300 rounded-circle overflow-hidden position-relative ${hover ? 'translate-y-[-10px]' : ''}`}
                  >
                    <img 
                      src={member.img} 
                      alt={member.name} 
                      className="rounded-circle shadow-lg w-90 h-100"
                      style={{
                        width: member.highlight ? '290px' : '230px',
                        height: member.highlight ? '170px' : '150px',
                        border: member.highlight ? '5px solid #ffc107' : '3px solid #ddd',
                        filter: hover ? 'blur(6px)' : 'none'
                      }}
                    />
                    {hover && (
                      <div className="position-absolute top-50 start-50 translate-middle d-flex flex-column align-items-center bg-dark bg-opacity-50 p-2 rounded">
                        <a href={member.social.linkedin} target="_blank" rel="noopener noreferrer">
                          <FaLinkedin className="text-white fs-4 mb-2 hover:text-blue-500" />
                        </a>
                        <a href={member.social.github} target="_blank" rel="noopener noreferrer">
                          <FaGithub className="text-white fs-4 mb-2 hover:text-gray-400" />
                        </a>
                        <a href={member.social.twitter} target="_blank" rel="noopener noreferrer">
                          <FaTwitter className="text-white fs-4 mb-2 hover:text-blue-400" />
                        </a>
                        <a href={member.social.facebook} target="_blank" rel="noopener noreferrer">
                          <FaFacebook className="text-white fs-4 hover:text-blue-600" />
                        </a>
                      </div>
                    )}
                  </div>
                  <h4 className="mt-3 fw-bold">{member.name}</h4>
                  <p className="text-muted">{member.role}</p>
                </div>
              </div>
            );
          })}
        </div>
          <Link to="/Contact" className='btn btn-primary mt-3'>Contact</Link>
      </div>
    </section>
  );
}

export default TeamSection;