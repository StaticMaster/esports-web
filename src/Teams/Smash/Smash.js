import React from "react";
import "./Smash.css";
import smashlogo from "../Smash/Smash Logo.png";
import ReactTwitchEmbedVideo from "react-twitch-embed-video";

function Smash() {
  return (
    <div className="smash-wrapper">
      <div className="smash-parallax-bg"></div>
      <div className="smash-section">
        <img src={smashlogo} alt="smash-logo" className="smash-logo"></img>
      </div>
      <div className="smash-paragraph">
        <p className="smash-text">
          Within our esports club, the Super Smash Bros. Ultimate team stands
          out as one of the most formidable and revered. Comprising players who
          rank among the top five in the entire state, their arrival from the
          competitive scene marked a significant moment for our university.
          Originally hailing from SEO, these talented individuals decided to
          bring their skills to our campus, and their impact has been nothing
          short of legendary. With a history of being undefeated and a knack for
          constantly evolving, the Smash team's journey has been nothing short
          of spectacular. As they forge ahead into the future, it's Zander and
          Wolf who have taken the reins as managers, guiding and supporting this
          exceptional group of players in their quest for future trophies and
          further glory in the world of Super Smash Bros. Ultimate esports.
        </p>
        <div className="smash-roster">
          <h1>Main Roster</h1>
          <p className="smash-roster-text">TBA</p>
          <div className="twitch-section">
            <ReactTwitchEmbedVideo
              channel="owlsesportsfl"
              layout="video"
              height={500}
              width={800}
            ></ReactTwitchEmbedVideo>{" "}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Smash;
