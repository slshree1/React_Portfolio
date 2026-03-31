import React, { useEffect, useState } from "react";
import "./BookMeeting.css";
import axios from "axios";

export default function BookMeeting({ onClose }) {
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);
  const [meetingData, setMeetingData] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    intro: "",
    agenda: "",
    mode: "online",
    date: "",
    time: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setMeetingData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleMeetingSubmit = async (e) => {
    e.preventDefault();
    const response = await axios.post(
      "http://localhost:8080/request-meeting",
      meetingData,
      {
        headers: {
          "Content-Type": "application/json",
        },
      },
    );
    if (response) {
      alert("Request Has Been sent Successfully");
      onClose();
    }
  };

  return (
    <div className="model-overlay">
      <div className="meeting-card">
        <button className="close-btn" onClick={onClose}>
          ✕
        </button>
        <form
          className="meeting-form"
          onSubmit={handleMeetingSubmit}
          method="POST"
        >
          <h2>Request a Meeting</h2>
          <div className="two-item-box">
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={meetingData.name}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={meetingData.email}
                onChange={handleInputChange}
                required
              />
            </div>
          </div>
          <div className="two-item-box">
            <div className="form-group">
              <label htmlFor="phone">Phone</label>
              <input
                type="text"
                id="phone"
                name="phone"
                value={meetingData.phone}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="Address">Address</label>
              <input
                type="text"
                id="address"
                name="address"
                value={meetingData.address}
                onChange={handleInputChange}
                required
              />
            </div>
          </div>
          <div className="form-group">
            <label>Intro</label>
            <textarea
              rows="4"
              cols="50"
              name="intro"
              value={meetingData.intro}
              form="meeting-form"
              placeholder="Write something about yourself..."
              onChange={handleInputChange}
              required
            ></textarea>
          </div>
          <div className="two-item-box">
            <div className="form-group">
              <label htmlFor="agenda">Meeting Subject/Agenda</label>
              <input
                type="text"
                id="agenda"
                name="agenda"
                value={meetingData.agenda}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="mode">Mode</label>
              <select
                id="mode"
                name="mode"
                onChange={handleInputChange}
                value={meetingData.mode}
                required
              >
                <option value="online">Online</option>
                <option value="offline">Offline</option>
              </select>
            </div>
          </div>
          <div className="two-item-box">
            <div className="form-group">
              <label htmlFor="date">Prefered Date(Not Conform)</label>
              <input
                type="date"
                id="date"
                name="date"
                value={meetingData.date}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="time">Time(Not Conform)</label>
              <input
                type="time"
                id="time"
                name="time"
                value={meetingData.time}
                onChange={handleInputChange}
                required
              />
            </div>
          </div>
          <button type="submit">Request Now</button>
        </form>
      </div>
    </div>
  );
}
