import React, { useEffect, useState } from "react";
import "./Projects.css";
import { motion } from "framer-motion";
import axios from "axios";
import LoadingScreen from "./LoadingScreen";

export default function Project() {
  const [projectData, setProjectData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get("https://portfolio-backend-77cq.onrender.com/getProjects")
      .then((res) => {
        setProjectData(res.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error(error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <LoadingScreen />;
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5 }}
    >
      <div className="project-container">
        <div className="project-section1">
          <h1>My Projects</h1>
          <br />
          <br />
          <p>
            A showcase of my technical projects and
            <br />
            implementations with cutting-edge technologies
          </p>
        </div>
        <div className="project-section2">
          <div className="project-section2-heading">
            <h2>Featured Projects</h2>
            <div></div>
            <p>
              Here are some of the projects I've worked on during my academic
              and
              <br /> professional journey
            </p>
          </div>
          <div className="project-cards">
            {projectData.map((project, index) => (
              <div
                className="project-card"
                key={index}
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                <div className="card-gradient-border"></div>
                <div className="project-header">
                  <div className="header-left">
                    <div className="title-wrapper">
                      <h2 className="project-title">{project.projectTitle}</h2>
                      <div className="title-underline"></div>
                    </div>
                    <div className="type-wrapper">
                      <i className="fas fa-code"></i>
                      <p className="project-type">{project.projectType}</p>
                    </div>
                  </div>
                  <span
                    className={`status-badge ${project.status.toLowerCase()}`}
                  >
                    <span className="status-dot"></span>
                    {project.status}
                  </span>
                </div>
                <div className="project-description-wrapper">
                  <i className="fas fa-quote-left quote-icon"></i>
                  <p className="project-description">
                    {project.shortDescription}
                  </p>
                </div>
                <div className="project-meta">
                  <div className="meta-item">
                    <div className="meta-icon">
                      <i className="fas fa-user-tie"></i>
                    </div>
                    <div className="meta-content">
                      <span className="meta-label">Role</span>
                      <span className="meta-value">{project.role}</span>
                    </div>
                  </div>
                  <div className="meta-item">
                    <div className="meta-icon">
                      <i className="fas fa-users"></i>
                    </div>
                    <div className="meta-content">
                      <span className="meta-label">Team</span>
                      <span className="meta-value">{project.teamSize}</span>
                    </div>
                  </div>
                  <div className="meta-item">
                    <div className="meta-icon">
                      <i className="fas fa-calendar-alt"></i>
                    </div>
                    <div className="meta-content">
                      <span className="meta-label">Duration</span>
                      <span className="meta-value">
                        {project.startDate} – {project.endDate}
                      </span>
                    </div>
                  </div>
                </div>
                {project.technologiesUsed?.length > 0 && (
                  <div className="project-section">
                    <div className="section-header">
                      <i className="fas fa-layer-group"></i>
                      <h4>Tech Stack</h4>
                    </div>
                    <div className="project-skills">
                      {project.technologiesUsed.map((tech, i) => (
                        <span className="skill" key={i} style={{ "--i": i }}>
                          {tech}
                          <span className="skill-hover-effect"></span>
                        </span>
                      ))}
                    </div>
                  </div>
                )}
                {project.features?.length > 0 && (
                  <div className="project-section">
                    <div className="section-header">
                      <i className="fas fa-star"></i>
                      <h4>Key Features</h4>
                    </div>
                    <ul className="project-features">
                      {project.features.map((feature, i) => (
                        <li key={i}>
                          <i className="fas fa-check-circle"></i>
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
                <div className="project-footer">
                  {project.demoLink && (
                    <a
                      href={project.demoLink}
                      target="_blank"
                      rel="noreferrer"
                      className="btn primary"
                    >
                      <i className="fas fa-external-link-alt"></i>
                      Live Demo
                      <span className="btn-arrow">→</span>
                    </a>
                  )}
                  {project.githubLink && (
                    <a
                      href={project.githubLink}
                      target="_blank"
                      rel="noreferrer"
                      className="btn secondary"
                    >
                      <i className="fab fa-github"></i>
                      GitHub
                      <span className="btn-arrow">→</span>
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="project-section3">
          <div className="project-section2-heading">
            <h2>Technical Skills Gained from Projects</h2>
            <div></div>
            <p>Technologies and tools I've worked with across my projects</p>
          </div>
          <div className="project-section3-cards">
            <div className="project-section3-card">
              <div className="section3-card-heading">
                <i className="fas fa-code"></i>
                <h2>Programming</h2>
              </div>
              <div className="project-section3-skills">
                <p>Java</p>
                <p>Python</p>
                <p>c++</p>
                <p>PHP</p>
                <p>JavaScript</p>
                <p>SQL</p>
              </div>
            </div>
            <div className="project-section3-card">
              <div className="section3-card-heading">
                <i className="fas fa-layer-group"></i>
                <h2>Frameworks</h2>
              </div>
              <div className="project-section3-skills">
                <p>Spring Boot</p>
                <p>Hibernate</p>
                <p>REACT</p>
                <p>Flutter</p>
                <p>Servlets</p>
              </div>
            </div>
            <div className="project-section3-card">
              <div className="section3-card-heading">
                <i className="fas fa-tools"></i>
                <h2>Tools & Platforms</h2>
              </div>
              <div className="project-section3-skills">
                <p>Firebase</p>
                <p>MySQL</p>
                <p>AWS</p>
                <p>Aaure</p>
                <p>Git</p>
                <p>Docker</p>
              </div>
            </div>
            <div className="project-section3-card">
              <div className="section3-card-heading">
                <i className="fas fa-microchip"></i>
                <h2>Specialization</h2>
              </div>
              <div className="project-section3-skills">
                <p>IoT</p>
                <p>Machine Learning</p>
                <p>Microcontrollers</p>
                <p>Network Security</p>
                <p>JavaScript</p>
                <p>Clooud Computing</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
