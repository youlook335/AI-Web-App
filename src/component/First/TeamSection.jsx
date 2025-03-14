import { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Link } from "react-router-dom";
import { FaLinkedin, FaGithub, FaTwitter, FaFacebook } from "react-icons/fa";

function TeamSection() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  const teamMembers = [
    {
      name: "Unknown",
      role: "Cyber Security Leader",
      img: "Boy (6) fit img in nonw.jpg",
      highlight: false,
      social: {
        linkedin: "https://linkedin.com/in/unknown",
        github: "https://github.com/unknown",
        twitter: "https://twitter.com/unknown",
        facebook: "https://facebook.com/unknown",
      },
    },
    {
      name: "Tanveer",
      role: "Lead Developer",
      img: "Boy (6) fit img in nonw.jpg",
      highlight: true, // Center person (highlighted)
      social: {
        linkedin: "https://www.linkedin.com/in/tanveer-khan-31074033a/",
        github: "https://github.com/youlook335",
        twitter: "https://x.com/youloos477",
        facebook: "https://www.facebook.com/people/Tanveer-Khan/pfbid02nbB9zgQNHkWiJmraxk661fek8yCBimYKipLXDWqNKaQ76FRehrTAK4oKZhh5Ak4Wl/",
      },
    },
    {
      name: "M-Maroof",
      role: "Data Scientist & Backend Developer",
      img: "Boy (6) fit img in nonw.jpg",
      highlight: false,
      social: {
        linkedin: "https://linkedin.com/in/m-maroof",
        github: "https://github.com/m-maroof",
        twitter: "https://twitter.com/m-maroof",
        facebook: "https://facebook.com/m-maroof",
      },
    },
  ];

  return (
    <section className="team-section py-5 text-center bg-light">
      <div className="container">
        <h2 className="display-4 text-primary fw-bold" data-aos="fade-down">
          Meet Our Team
        </h2>
        <p className="lead mb-4" data-aos="fade-up">
          The minds behind our powerful AI web app
        </p>
        <div className="row justify-content-center">
          {teamMembers.map((member, index) => {
            const [hover, setHover] = useState(false);
            return (
              <div
                key={index}
                className={`col-md-4 ${member.highlight ? "scale-up" : ""}`}
                onMouseEnter={() => setHover(true)}
                onMouseLeave={() => setHover(false)}
                data-aos={member.highlight ? "zoom-in" : "fade-up"}
              >
                <div className="team-member mb-4 position-relative">
                  <div
                    className={`transition-all duration-300 rounded-circle overflow-hidden position-relative ${
                      hover ? "translate-y-[-10px]" : ""
                    }`}
                  >
                    <img
                      src={member.img}
                      alt={member.name}
                      className="rounded-circle shadow-lg"
                      style={{
                        width: member.highlight ? "290px" : "230px",
                        height: member.highlight ? "290px" : "230px",
                        border: member.highlight ? "5px solid #ffc107" : "3px solid #ddd",
                        filter: hover ? "blur(6px)" : "none",
                        transition: "all 0.3s ease-in-out",
                      }}
                    />
                    {hover && (
                      <div className="position-absolute top-50 start-50 translate-middle d-flex flex-column align-items-center bg-dark bg-opacity-75 p-3 rounded">
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
        <Link to="/Contact" className="btn btn-primary mt-3" data-aos="fade-up">
          Contact
        </Link>
      </div>
    </section>
  );
}

export default TeamSection;
