import React, { useState, useEffect } from "react";
import "./Loading.css";
import { Navigate } from "react-router-dom";
import ProgressBar from "@ramonak/react-progress-bar";
import owlslogo from "../images/owls-esports.png";

const Loading = () => {
  const [redirect, setRedirect] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prevProgress) => {
        if (prevProgress >= 100) {
          clearInterval(timer);
          setRedirect(true);
          return 100;
        }
        return prevProgress + 10;
      });
    }, 200);

    return () => clearInterval(timer);
  }, []);

  // if (redirect) {
  //   return <Navigate to="/home"></Navigate>;
  // }
  return (
    <div className="progress-section">
      <div className="main-logo-section">
        <img src={owlslogo} alt="owls-logo" className="main-logo"></img>
      </div>
      <ProgressBar
        className="progress-bar"
        completed={progress}
        bgColor="linear-gradient(to right, red, blue)"
        labelColor="#ffff"
        maxCompleted={100}
        height="45px"
        width="100%"
      />
    </div>
  );
};

export default Loading;
