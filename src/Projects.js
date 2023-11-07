import React from 'react';

const Projects = () => {
  return (
    <div className="section">
      <h2>Projects</h2>
      <div className="project">
        <h3>Tiffany</h3>
        <p>A virtual Assistant with facial recognition</p>
        <p>Tech stack: python, Html, java</p>
      </div>
      <div className="project">
        <h3>Chatbot</h3>
        <p>A virtual Chat Assistant which recommends you song based on your mood</p>
        <p>Tech Stack: Numpy,Pandas,and other Python libraries</p>
      </div>
      <div className="project">
        <h3>Volume hand control</h3>
        <p>Tech Stack: python with Opencv2</p>
      </div>
    </div>
  );
};

export default Projects;
