import React from "react";
import "./RL.css";
import rocketlogo from "../RL/RL-Logo.png";
import ReactTwitchEmbedVideo from "react-twitch-embed-video";

function RL() {
  return (
    <div className="rocket-league-wrapper">
      <div className="rocket-parallax-bg"></div>
      <div className="rocket-league-section">
        <img
          src={rocketlogo}
          alt="rocket-league-logo"
          className="rocket-league-logo"
        ></img>
      </div>
      <div className="rocket-league-paragraph">
        <div className="rocket-text">
          <p>
            It all began in Fall 2020 amidst the Covid-19 pandemic, when FAU
            Rocket League was restarted and began their journey. Throughout
            their history, FAU RL has undergone some changes, from being Club
            owned to testing a potential Esports program sponsored by FAU, and
            now back to being Club owned, but as a Sports Club with funding.
            Between 2020 and 2023, FAU RL earned numerous accolades, such as
            placing 5th in the CECC tournament in Kissimmee, FL, and 4th in an
            ECAC tournament in Albany, NY. They also achieved 4th overall in
            NACE Open Premier plus, placed 2nd at a NACAR Rocket League Event at
            the Miami International Speedway, 2nd overall in the USF Battle for
            Florida, and even 1st overall in the Fall 2022 META League.
            Throughout this time, FAU RL grew better, faster, and stronger with
            every step. They are now ranked in the TOP 50 schools in the country
            and only going up. FAU RL is the REAL DEAL.
          </p>
        </div>
        <div className="rocket-roster">
          <h1 className="rocket-roster-title">Main Roster</h1>
          <p className="rocket-roster">TBD</p>
          <div className="twitch-section">
            <ReactTwitchEmbedVideo
              channel="owlsesportsfl"
              layout="video"
              height={500}
              width={800}
            ></ReactTwitchEmbedVideo>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RL;
