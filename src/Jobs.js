import React from 'react';
import Job from "./Job";

const Jobs = ({jobs}) => {
  return (
    <div className='job-list'>
      {jobs.map((job) => {
        return <Job key={job.id} {...job} />;
      })}
    </div>
  );
}

export default Jobs