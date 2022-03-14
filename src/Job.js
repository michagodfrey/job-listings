import React from 'react'
import { ReactSVG } from "react-svg";
import {ReactCompnent} from "./images/account.svg"

const Job = ({ company, logo, position, role, level, postedAt, contract, location, languages, tools }) => {
  
    console.log(logo);
    return (
      <div className="job">
        <div className="job__header">
          <img
            className="job__logo"
            src={logo}
            alt={"corp logo"}
          />
          <div>
            <div className="job__company">{company}</div>
            <div className="job__position">{position}</div>
            <ul className="job__details">
              <li className="job__postedAt">{postedAt}</li>
              <li className="job__contract">{contract}</li>
              <li className="job__location">{location}</li>
            </ul>
          </div>
        </div>
        <hr></hr>
        <div className="job__tags">
          <div>{role}</div>
          <div>{level}</div>
          <>
            {languages.map((lang) => {
              return <div>{lang}</div>;
            })}
          </>
          <>
            {tools.map((tool) => {
              return <div>{tool}</div>;
            })}
          </>
        </div>
      </div>
    );
}

export default Job