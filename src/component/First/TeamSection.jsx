import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function TeamSection() {
  const teamMembers = [
    {
      name: 'Unkonown',
      role: 'Cyber Security Leader',
      img: 'public/Boy (6) fit img in nonw.jpg',
      highlight: false,
    },
    {
      name: 'Tanveer',
      role: 'Lead Developer',
      img: 'public/Boy (6) fit img in nonw.jpg',
      highlight: true, // Center person (highlighted)
    },
    {
      name: 'M-Maroof',
      role: 'Data Scientist & Backend Developer',
      img: 'public/Boy (6) fit img in nonw.jpg',
      highlight: false,
    }
  ];

  return (
    <section className="team-section py-5 text-center bg-light">
      <div className="container">
        <h2 className="display-4 text-primary fw-bold">Meet Our Team</h2>
        <p className="lead mb-4">The minds behind our powerful AI web app</p>
        <div className="row justify-content-center">
          {teamMembers.map((member, index) => (
            <div key={index} className={`col-md-4 ${member.highlight ? 'scale-up' : ''}`}>
              <div className="team-member mb-4">
                <img 
                  src={member.img} 
                  alt={member.name} 
                  className="rounded-circle shadow-lg"
                  style={{
                    width: member.highlight ? '170px' : '150px',
                    height: member.highlight ? '170px' : '150px',
                    border: member.highlight ? '5px solid #ffc107' :
                     '3px solid #ddd'
                  }}
                />
                <h4 className="mt-3 fw-bold">{member.name}</h4>
                <p className="text-muted">{member.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default TeamSection;
