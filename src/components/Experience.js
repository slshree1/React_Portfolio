import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import "./Experience.css";
import axios from "axios";
import { Link } from "react-router-dom";
import LoadingScreen from "./LoadingScreen";

export default function Experience() {
  const [experienceData, setExperienceData] = useState([]);
  const [pdfUrl, setPdfUrl] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get("http://localhost:8080/getExperience")
      .then((res) => {
        setExperienceData(res.data);
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
      <div className="experience-container">
        <div className="exp-section1">
          <h1>Professional Experience</h1>
          <p>My journey through internships and learning opportunities</p>
          <div className="exp-section1-box">
            <div className="exp-section1-icon">
              <i className="fas fa-user-graduate"></i>
            </div>
            <h2>Fresher / Entry Level</h2>
            <p>
              I'm currently building my professional experience and haven't
              worked with any companies yet in a full-time capacity.
            </p>
            <p>
              However, I've gained valuable practical exposure through
              internships and academic projects that have prepared me for
              professional software development roles.
            </p>
          </div>
        </div>
        <div className="exp-section2">
          <h1 className="exp-section2-heading">Internship Experience</h1>
          <div className="exp-section2-cards">
            {experienceData.map((exp, index) => (
              <div className="exp-section2-card" key={index}>
                <div className="exp-card-heading">
                  <img
                    src={`http://localhost:8080/getInstituteLogo/${exp.companyLogoPath}`}
                    alt="img"
                  ></img>
                  <div className="exp-card-heading-title">
                    <h2>{exp.jobTitle}</h2>
                    <div className="card-comname-worktype">
                      <p style={{ width: "200px" }}>{exp.companyName}</p>
                      <p className="work-type">{exp.workType}</p>
                    </div>
                  </div>
                </div>
                <div className="exp-card-block2">
                  <p>
                    <a className="fas fa-calendar"></a> &nbsp; {exp.startDate} -{" "}
                    {exp.endDate}
                  </p>
                  <p>
                    <a className="fas fa-map-marker-alt"></a> &nbsp;{" "}
                    {exp.location}
                  </p>
                </div>
                <div className="exp-card-block3">
                  <p>{exp.description}</p>
                </div>
                <div className="exp-card-block4">
                  <h3 className="exp-card-block4-heading">
                    <a className="fas fa-wrench"></a>Technologies Used
                  </h3>
                  <div className="exp-card-tech-buttons">
                    {exp.technologiesUsed.map((tech, index) => (
                      <p key={index}>{tech}</p>
                    ))}
                  </div>
                </div>
                <div className="exp-card-block5">
                  <p className="exp-card-block4-heading">
                    <a className="fas fa-folder"></a>Key Projects
                  </p>
                  <div className="exp-card-block5-list">
                    {exp.projectsWorkedOn.map((proj, index) => (
                      <p className="exp-card-block5-listitem" key={index}>
                        <a className="fas fa-angle-right"></a>&nbsp;&nbsp;&nbsp;
                        {proj}
                      </p>
                    ))}
                  </div>
                </div>
                <div className="exp-card-block6">
                  <button
                    onClick={() => {
                      setPdfUrl(
                        `http://localhost:8080/educationDocuments/${exp.documentsPath}`,
                      );
                      console.log(pdfUrl);
                    }}
                    className="exp-doc-view-btn"
                  >
                    View Documents
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="exp-section3">
          <div className="exp-section3-card">
            <h1>Ready to Start My Professional Journey</h1>
            <p>
              I'm actively seeking entry-level opportunities and internships to
              apply my <br />
              skills in real-world projects, contribute to innovative teams, and
              begin<br></br> building my professional experience.
            </p>
            <div className="exp-section3-buttons">
              <Link
                className="btn1"
                to="/Projects"
                onClick={() => window.scrollTo(0, 0)}
              >
                <i className="fas fa-code"></i>
                View My Projects
              </Link>
              <Link
                className="btn2"
                to="/Contact"
                onClick={() => window.scrollTo(0, 0)}
              >
                <i className="fas fa-paper-plane"></i>
                Discuss Opportunities
              </Link>
            </div>
          </div>
        </div>
      </div>
      {pdfUrl && (
        <div className="pdf-overlay">
          <div className="pdf-modal">
            <button
              className="edu-pdf-close-btn"
              onClick={() => setPdfUrl(null)}
            >
              X
            </button>

            <iframe
              className="pdf-viewer"
              src={pdfUrl}
              title="PDF Viewer"
              width="100%"
              height="100%"
            ></iframe>
          </div>
        </div>
      )}
    </motion.div>
  );
}
