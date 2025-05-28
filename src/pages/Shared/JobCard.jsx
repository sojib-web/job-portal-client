import React from "react";
import { LuMapPinCheck } from "react-icons/lu";
import { GiJusticeStar } from "react-icons/gi";
import { Link } from "react-router";
function JobCard({ job }) {
  const {
    _id,
    title,
    location,
    company_logo,
    jobType,
    category,
    applicationDeadline,
    description,
    company,
    requirements,
    salaryRange,
  } = job;

  const jobTypeColors = {
    fulltime: "bg-green-100 text-green-800",
    parttime: "bg-yellow-100 text-yellow-800",
    contract: "bg-purple-100 text-purple-800",
    internship: "bg-blue-100 text-blue-800",
  };
  const jobTypeClass =
    jobTypeColors[jobType?.toLowerCase()] || "bg-gray-100 text-gray-800";

  return (
    <div
      className="relative rounded-2xl border border-gray-200 bg-gradient-to-tr from-white via-gray-50 to-white p-5 shadow-lg hover:shadow-xl hover:scale-[1.02] transition-transform duration-300 ease-in-out flex flex-col h-full"
      style={{ borderLeft: "6px solid #3b82f6" }}
    >
      {/* Top-right icon */}
      <div className="absolute top-3 right-3 text-green-500">
        <GiJusticeStar />
      </div>

      {/* Header */}
      <div className="flex items-center gap-4">
        <img
          src={company_logo}
          alt={`${company} Logo`}
          className="h-12 w-12 rounded-full object-cover border border-gray-300"
        />
        <div>
          <h2 className="font-semibold text-lg text-gray-900">{title}</h2>
          <p className="text-sm text-gray-600">{company}</p>
          <p className="mt-1 flex items-center gap-2 text-xs text-gray-500">
            <LuMapPinCheck />
            {location}
          </p>
        </div>
      </div>

      {/* Job content (takes full space and pushes button down) */}
      <div className="mt-5 flex-grow flex flex-col justify-between">
        <div>
          {/* Badge row */}
          <div className="flex items-center justify-between">
            <span
              className={`inline-block rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-wide ${jobTypeClass}`}
            >
              {jobType}
            </span>
            <span className="text-xs font-medium text-gray-400">
              {category}
            </span>
          </div>

          {/* Description */}
          <p className="mt-3 text-gray-700 text-sm leading-relaxed line-clamp-4">
            {description}
          </p>

          {/* Requirements */}
          {requirements && requirements.length > 0 && (
            <div className="mt-4 flex flex-wrap gap-2">
              {requirements.map((req, idx) => (
                <span
                  key={idx}
                  className="cursor-default rounded-full bg-gray-100 px-3 py-1 text-xs font-medium text-gray-700 hover:bg-blue-100 transition"
                >
                  {req}
                </span>
              ))}
            </div>
          )}

          {/* Deadline */}
          {applicationDeadline && (
            <p className="mt-4 flex items-center gap-2 text-xs text-gray-500 font-medium">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-4 h-4"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2v-5H3v5a2 2 0 002 2z"
                />
              </svg>
              Application Deadline:{" "}
              {new Date(applicationDeadline).toLocaleDateString()}
            </p>
          )}
        </div>

        {/* Apply button at the bottom */}
        <div className="mt-5 flex items-center justify-between gap-4">
          <p className="text-sm font-medium text-gray-700">
            Salary: {salaryRange?.min} - {salaryRange?.max}{" "}
            {salaryRange?.currency}
          </p>
          <Link to={`/jobs/${_id}`}>
            <button className="rounded-md bg-blue-600 px-5 py-2 text-white shadow-md transition cursor-pointer hover:bg-blue-700 hover:shadow-lg">
              Show Details
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default JobCard;
