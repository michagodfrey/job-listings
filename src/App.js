import React, { useState } from "react";
import Jobs from "./Jobs";
import Filter from "./Filter";
import data from "./data.json";

function App() {
  
  const [jobs, setJobs] = useState(data);
  return (
    <main>
      <Filter />
      <Jobs jobs={jobs} />
    </main>
  );
}

export default App;
