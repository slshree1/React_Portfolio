import React from 'react';
import './LoadingScreen.css';

export default function LoadingScreen({ text = "Loading..." }) {
  return (
    <div className="loading-screen">
      <h2>{text}</h2>
    </div>
  );
}
