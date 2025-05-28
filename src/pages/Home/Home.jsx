import React, { useState, useEffect } from "react";
import { Suspense } from "react";
import Banner from "./Banner";
import CategoryBrowse from "./CategoryBrowse";
import HotJobs from "./HotJobs";

function Home() {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("http://localhost:3000/jobs")
      .then((res) => res.json())
      .then((data) => {
        setJobs(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setLoading(false);
      });
  }, []);
  // const jobs = fetch(`http://localhost:3000/jobs`).then((res) => res.json());
  return (
    <div>
      <Banner />
      <CategoryBrowse />
      {loading ? <p>Loading jobs...</p> : <HotJobs jobs={jobs} />}

      {/* <Suspense fallback={"Loading hot Jobs"}>
        <HotJobs jobs={jobs}></HotJobs>
      </Suspense> */}
    </div>
  );
}

export default Home;
