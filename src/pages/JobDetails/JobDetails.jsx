import React from "react";
import { Link, useLoaderData } from "react-router";
import { LuMapPinCheck } from "react-icons/lu";

function JobDetails() {
  const job = useLoaderData();

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
    responsibilities,
    salaryRange,
  } = job;

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
        {/* Header */}
        <div className="flex items-center gap-4 mb-6">
          <img
            src={company_logo}
            alt={`${company} Logo`}
            className="h-16 w-16 rounded-full object-cover border border-gray-300"
          />
          <div>
            <h1 className="text-2xl font-bold text-gray-800">{title}</h1>
            <p className="text-sm text-gray-600">{company}</p>
            <p className="flex items-center gap-2 text-xs text-gray-500 mt-1">
              <LuMapPinCheck /> {location}
            </p>
          </div>
        </div>

        {/* Job Type, Category, Salary */}
        <div className="flex flex-wrap gap-4 mb-4 text-sm text-gray-700">
          <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-xs font-medium">
            {jobType}
          </span>
          <span className="bg-gray-100 text-gray-800 px-3 py-1 rounded-full text-xs font-medium">
            {category}
          </span>
          <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-xs font-medium">
            Salary: ${salaryRange?.min} - ${salaryRange?.max}
          </span>
        </div>

        {/* Description */}
        <div className="mb-6">
          <h2 className="text-lg font-semibold text-gray-800 mb-2">
            Job Description
          </h2>
          <p className="text-gray-700 text-sm leading-relaxed">{description}</p>
        </div>

        {/* Responsibilities */}
        {responsibilities && (
          <div className="mb-6">
            <h2 className="text-lg font-semibold text-gray-800 mb-2">
              Responsibilities
            </h2>
            <ul className="list-disc list-inside text-sm text-gray-700">
              {responsibilities.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </div>
        )}

        {/* Requirements */}
        {requirements && (
          <div className="mb-6">
            <h2 className="text-lg font-semibold text-gray-800 mb-2">
              Requirements
            </h2>
            <ul className="list-disc list-inside text-sm text-gray-700">
              {requirements.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </div>
        )}

        {/* Deadline */}
        {applicationDeadline && (
          <div className="mt-4 text-sm text-gray-500 font-medium">
            Application Deadline:{" "}
            <span className="text-red-600">
              {new Date(applicationDeadline).toLocaleDateString()}
            </span>
          </div>
        )}

        {/* Apply Button */}
        <div className="mt-6">
          <Link to={`/jobApply/${_id}`}>
            <button className="w-full rounded-md bg-blue-600 px-6 py-3 text-white font-semibold transition hover:bg-blue-700">
              Apply Now
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default JobDetails;
