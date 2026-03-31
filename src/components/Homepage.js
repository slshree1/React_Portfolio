import React, { useEffect, useState } from "react";
import "./Homepage.css";
import { motion } from "framer-motion";
import axios from "axios";
import { Link } from "react-router-dom";
export default function Homepage() {
  const [profileData, setProfileData] = useState([]);
  const [educationData, setEducationData] = useState([]);
  const [skillData, setSkillData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [profileRes, educationRes, skillRes] = await Promise.all([
          axios.get("http://localhost:8080/getProfile"),
          axios.get("http://localhost:8080/getEducation"),
          axios.get("http://localhost:8080/getSkills"),
        ]);

        setProfileData(profileRes.data);
        setEducationData(educationRes.data);
        setSkillData(skillRes.data);

        setLoading(false); // stop loading
      } catch (error) {
        console.error(error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
  return (
    <div className="loading-screen">
      <h2>Loading...</h2>
    </div>
  );
}

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5 }}
    >
      <div>
        <section className="section11">
          <div className="s11box">
            <div id="slphoto">
              <img
                src={`http://localhost:8080/getProfileImage/${profileData.profilePicturePath}`}
                alt="Profile"
              />
            </div>
          </div>
          <div className="s11box">
            <h1>{profileData.name}</h1>
            <p>{profileData.heading}</p>
            <a
              href="http://localhost:8080/downloadResume"
              download="resume.pdf"
            >
              Download Resume
            </a>
          </div>
        </section>
        <section className="section12">
          <h1>Professional Roles</h1>
          <p>
            Exploring diverse dimensions of technology through multiple
            <br />
            professional perspectives
          </p>
          <div className="s12container">
            <div className="s12cobox">
              <div className="coboxline"></div>
              <div className="profession-logo">
                <i className="fas fa-microchip"></i>
              </div>
              <h2>Computer Engineer</h2>
              <p>
                Bridging hardware and software with a comprehensive
                understanding of computer systems, from embedded devices to
                complex architectures.
              </p>
              <div class="tech-tags">
                <span class="tech-tag">Embedded Systems</span>
                <span class="tech-tag">IoT</span>
                <span class="tech-tag">Computer Architecture</span>
              </div>
            </div>
            <div className="s12cobox">
              <div className="coboxline"></div>
              <div className="profession-logo">
                <i className="fas fa-code"></i>
              </div>
              <h2>Software Engineer</h2>
              <p>
                End-to-end software development from concept to deployment using
                modern practices and technologies.
              </p>
              <div className="tech-tags">
                <span className="tech-tag">Embedded Systems</span>
                <span className="tech-tag">IoT</span>
                <span className="tech-tag">Computer Architecture</span>
              </div>
            </div>
            <div className="s12cobox">
              <div className="coboxline"></div>
              <div className="profession-logo">
                <i className="fab fa-java"></i>
              </div>
              <h2>Java Developer</h2>
              <p>
                Building enterprise-grade applications with Java ecosystem,
                focusing on performance, scalability, and maintainability.
              </p>
              <div class="tech-tags">
                <span class="tech-tag">Spring Boot</span>
                <span class="tech-tag">Hibernate</span>
                <span class="tech-tag">REST APIs</span>
              </div>
            </div>
            <div className="s12cobox">
              <div className="coboxline"></div>
              <div className="profession-logo">
                <i className="fas fa-laptop-code"></i>
              </div>
              <h2>Web Developer</h2>
              <p>
                Creating responsive and interactive web experiences with modern
                frameworks and technologies for seamless user interaction.
              </p>
              <div class="tech-tags">
                <span class="tech-tag">Frontend</span>
                <span class="tech-tag">Backend</span>
                <span class="tech-tag">Full Stack</span>
              </div>
            </div>
          </div>
        </section>
        <section className="section13">
          <div className="s13-head">
            <h2>Education</h2>
            <p>My academic journey in computer engineering</p>
          </div>

          <div className="education-cards">
            {educationData.map((education, index) => (
              <div className="education-card" key={index}>
                <div className="degree-icon">
                  <img
                    src={`http://localhost:8080/getInstituteLogo/${education.institutionLogoPath}`}
                    alt="Institute Logo"
                  />
                </div>
                <h3>{education.degree}</h3>
                <p>{education.instituteName}</p>
                <p className="marks">
                  CGPA/Percentage: {education.percentageCgpa}
                </p>
              </div>
            ))}
          </div>
          <Link
            id="fulledu"
            to="/Education"
            onClick={() => window.scrollTo(0, 0)}
          >
            View Full Education Details
          </Link>
        </section>
        <section class="core-skills">
          <div class="container">
            <div class="section-title">
              <h2>Core Skills</h2>
              <p>Technologies I work with</p>
            </div>
            <div class="skills-grid">
              {skillData.map((skill, index) => (
                <div class="skill-item">
                  <div class="skill-icon">
                    <i class={skill.logo}></i>
                  </div>
                  <div class="skill-name">{skill.name}</div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </motion.div>
  );
}
