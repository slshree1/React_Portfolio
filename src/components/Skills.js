import React, { useEffect, useState } from "react";
import "./Skills.css";
import { motion } from "framer-motion";
import axios from "axios";
import LoadingScreen from "./LoadingScreen";

export default function Skills() {
  const [skillsData, setSkillsData] = useState([]);
  const [projectCount, setProjectCount] = useState(0);
  const [totalExperience, setTotalExperience] = useState(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [skillsRes, projectsRes, experienceRes] = await Promise.all([
          axios.get("http://localhost:8080/getSkills"),
          axios.get("http://localhost:8080/getProjectsCount"),
          axios.get("http://localhost:8080/getTotalExperience"),
        ]);
        
        setSkillsData(skillsRes.data);
        setProjectCount(projectsRes.data);
        setTotalExperience(experienceRes.data);
        setLoading(false);
      } catch (error) {
        console.error(error);
        setLoading(false);
      }
    };

    fetchData();
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
      <div className="skills-container">
        <div className="skills-section1">
          <h1>Technical Experties</h1>
          <p>
            Mastering the tools and technologies that power modern digital
            solutions
          </p>
        </div>

        <div className="skills-section2">
          <div className="section2-box">
            <div className="box-heading">
              <div className="skill-box-icon">
                <i className="fas fa-code"></i>
              </div>
              <h2>
                Programming<br></br> Languages
              </h2>
            </div>

            {skillsData
              .filter(
                (skill) =>
                  skill.category.toLowerCase() === "programming language",
              )
              .map((skill, index) => (
                <div className="skill-card" key={index}>
                  <div className="skill-card-heading">
                    <div className="name-logo">
                      <i className={skill.logo}></i>
                      <h2>{skill.name}</h2>
                    </div>
                    <h2 className="skill-rate">{skill.experienceLevel}</h2>
                  </div>
                  <p style={{ color: "blue" }}>
                    {skill.experienceYears} years of Experience
                  </p>
                  <p style={{ color: "blue" }}>Rating:</p>
                  <div className="rating-bar-container">
                    <div
                      className="rating-bar-fill"
                      style={{ width: `${skill.rating}%` }}
                    ></div>
                  </div>
                  <p className="skill-card-desc">{skill.description}</p>
                  <div className="skill-btn-container">
                    {skill.projectsUsing.map((project, index) => (
                      <h3 key={index}>{project}</h3>
                    ))}
                  </div>
                </div>
              ))}
          </div>

          <div className="section2-box">
            <div className="box-heading">
              <div className="skill-box-icon">
                <i className="fas fa-cogs"></i>
              </div>
              <h2>
                Frameworks &<br></br> Technologies
              </h2>
            </div>

            {skillsData
              .filter(
                (skill) =>
                  skill.category.toLowerCase() === "frameworks & technologies",
              )
              .map((skill, index) => (
                <div className="skill-card" key={index}>
                  <div className="skill-card-heading">
                    <div className="name-logo">
                      <i className={skill.logo}></i>
                      <h2>{skill.name}</h2>
                    </div>
                    <h2 className="skill-rate">{skill.experienceLevel}</h2>
                  </div>
                  <p style={{ color: "blue" }}>
                    {skill.experienceYears} years of Experience
                  </p>
                  <p style={{ color: "blue" }}>Rating:</p>
                  <div className="rating-bar-container">
                    <div
                      className="rating-bar-fill"
                      style={{ width: `${skill.rating}%` }}
                    ></div>
                  </div>
                  <p className="skill-card-desc">{skill.description}</p>
                  <div className="skill-btn-container">
                    {skill.projectsUsing.map((project, index) => (
                      <h3 key={index}>{project}</h3>
                    ))}
                  </div>
                </div>
              ))}
          </div>

          <div className="section2-box">
            <div className="box-heading">
              <div className="skill-box-icon">
                <i className="fas fa-tools"></i>
              </div>
              <h2>
                Tools &<br></br> Platforms
              </h2>
            </div>

            {skillsData
              .filter(
                (skill) => skill.category.toLowerCase() === "tools & platforms",
              )
              .map((skill, index) => (
                <div className="skill-card" key={index}>
                  <div className="skill-card-heading">
                    <div className="name-logo">
                      <i className={skill.logo}></i>
                      <h2>{skill.name}</h2>
                    </div>
                    <h2 className="skill-rate">{skill.experienceLevel}</h2>
                  </div>
                  <p style={{ color: "blue" }}>
                    {skill.experienceYears} years of Experience
                  </p>
                  <p style={{ color: "blue" }}>Rating:</p>
                  <div className="rating-bar-container">
                    <div
                      className="rating-bar-fill"
                      style={{ width: `${skill.rating}%` }}
                    ></div>
                  </div>
                  <p className="skill-card-desc">{skill.description}</p>
                  <div className="skill-btn-container">
                    {skill.projectsUsing.map((project, index) => (
                      <h3 key={index}>{project}</h3>
                    ))}
                  </div>
                </div>
              ))}
          </div>
        </div>
        <div className="skills-section3">
          <div className="section3-card">
            <h1>{skillsData.length}</h1>
            <h3>Technologies Mastered</h3>
          </div>
          <div className="section3-card">
            <h1>{projectCount}</h1>
            <h3>Projects Completed</h3>
          </div>
          <div className="section3-card">
            <h1>{totalExperience}</h1>
            <h3>Years Experience</h3>
          </div>
          <div className="section3-card">
            <h1>0</h1>
            <h3>Certifications</h3>
          </div>
        </div>
        <div className="skills-section4">
          <div className="section4-box">
            <h1>Technology Stack</h1>
            <div className="skill-section4-cards">
              {skillsData.map((skill, index) => (
                <div className="skill-section4-card" key={index}>
                  <div className="skill-section4-icon">
                    <i className={skill.logo}></i>
                  </div>
                  <h2>{skill.name}</h2>
                  <p>{skill.use_purpose}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="skills-section5">
          <div className="skills-section5-box">
            <h1>Learning Journey</h1>
            <div className="skills-section5-cards">
              <div className="skills-section5-card">
                <div className="skills-section5-icon">
                  <i className="fas fa-laptop-code"></i>
                </div>
                <h2>Foundation</h2>
                <p>Started with programming basics and computer fundamentals</p>
              </div>
              <div className="skills-section5-card">
                <div className="skills-section5-icon">
                  <i className="fas fa-mobile"></i>
                </div>
                <h2>Specialization</h2>
                <p>Focused on Java backend and mobile development</p>
              </div>
              <div className="skills-section5-card">
                <div className="skills-section5-icon">
                  <i className="fas fa-rocket"></i>
                </div>
                <h2>Advanced</h2>
                <p>Mastering enterprise architecture and advanced concepts</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
