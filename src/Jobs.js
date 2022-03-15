import React from 'react';
import Job from "./Job";

const Jobs = ({ jobs, addFilterItem }) => {
  return (
    <div className='job-list'>
      {jobs.map((job) => {
        return <Job key={job.id} {...job} addFilterItem={addFilterItem} />;
      })}
    </div>
  );
}

export default Jobs