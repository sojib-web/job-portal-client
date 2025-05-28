import JobCard from "../Shared/JobCard";

function HotJobs({ jobs }) {
  return (
    <div>
      <h2 className="text-3xl md:text-4xl text-center  font-bold text-gray-900 mb-10">
        Hot jobs of the Day
      </h2>
      <div className="grid grid-cols-1 mb-10 gap-5 lg:grid-cols-3 md:grid-cols-2">
        {jobs.map((job) => (
          <JobCard key={job._id} job={job}></JobCard>
        ))}
      </div>
    </div>
  );
}

export default HotJobs;
