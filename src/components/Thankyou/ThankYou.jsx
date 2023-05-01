import React from "react";
import "./ThannkYou.css";
import family from "../Images/IMG_1349.jpg";

const ThankYou = () => {
  return (
    <div className="wrapper-1">
      <div className="wrapper-2">
        <h1 className="title">Thank you!</h1>
        <p className="technologies">
          Technologies Used: React.js, Node.js, Redux, PostgreSQL, Express,
          Material UI
        </p>
        <img src={family} alt="family" className="family" />
        <p className="message">
          Thank you: My beautiful children, loved ones, Aquamarine Cohort,
          Amethyst Cohort, and Selam{" "}
        </p>
        <button className="go-home">go home</button>
      </div>
      <div className="footer-like">
        <p>
          Follow Me on:
          <a href="https://www.linkedin.com/in/patrick-kimbrough-jr-38a44885">
            Click here for my LinkedIn{" "}
          </a>
        </p>
      </div>
    </div>
  );
};

export default ThankYou;
