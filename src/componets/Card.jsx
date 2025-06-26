import React from 'react';
import "../styles.css";
// import profilePic from "../assets/pic3.gif";
import profilePic1 from "../assets/pic4.gif";


const Card = () => {
  return (
    <div className="card bg-white">
      <div className="circle">
        <img src={profilePic1} alt="Logo" className="logo" />
      </div>
    </div>
  );
};

export default Card;
