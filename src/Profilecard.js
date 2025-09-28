import React from "react";
import picture from "./Assets/picture.jpeg";
import { FaFacebook, FaGithub, FaHashtag, FaEnvelope } from "react-icons/fa";

const Profilecard = () => {
  return (
    <div className="container">
      <div className="picture">
        <img src={picture} alt="profilepicture" />
      </div>
      <h1>John Doe</h1>
      <h2>Instructor</h2>

      <p>
        John is passionate about machine learning and AI, he values his
        learnings and loves to share with others
      </p>

      <div className="socialmedia-icons">
        <a href="facebook">
          <FaFacebook />
        </a>
        <a href="github">
          <FaGithub />
        </a>
        <a href="hashtag">
          <FaHashtag />
        </a>
        <a href="envelope">
          <FaEnvelope />
        </a>
      </div>
      <button className="btn">Message me</button>
    </div>
  );
};

export default Profilecard;
