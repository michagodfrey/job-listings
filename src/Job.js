import React, { useState } from 'react';
import uuid from 'react-uuid';

const Job = ({ addFilterItem, company, logo, newPost, featured, position, role, level, postedAt, contract, location, languages, tools }) => {
  
    return (
      <div className={ featured ? "job job--featured" : "job" }>
        <div className="job__header">
          <img className="job__logo" src={logo} alt={"corp logo"} />
          <div>
            <div className="job__highlight">
              <div className="job__company">{company}</div>
              { newPost && <div className="job__new">NEW!</div> }
              { featured && <div className="job__featured">FEATURED</div> }
            </div>
            <div className="job__position">{position}</div>
            <ul className="job__details">
              <li>{postedAt}</li>
              <li>{contract}</li>
              <li>{location}</li>
            </ul>
          </div>
        </div>
        <hr></hr>
        <div className="job__tags">
          <div onClick={() => addFilterItem(role)}>{role}</div>
          <div onClick={() => addFilterItem(level)}>{level}</div>
          <>
            {languages.map((lang) => {
              return (
                <div key={uuid()} onClick={() => addFilterItem(lang)}>
                  {lang}
                </div>
              );
            })}
          </>
          <>
            {tools.map((tool) => {
              return (
                <div key={uuid()} onClick={() => addFilterItem(tool)}>
                  {tool}
                </div>
              );
            })}
          </>
        </div>
      </div>
    );
}

export default Job