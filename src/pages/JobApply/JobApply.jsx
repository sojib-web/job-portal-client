// @ts-nocheck
import React from "react";
import { Link, useParams } from "react-router";
import useAuth from "../../Hooks/useAuth";

function JobApply() {
  const { id: jobId } = useParams();
  const { user } = useAuth();
  console.log(jobId, user);

  const handleApplyFormSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const linkedIn = form.likedIn.value;
    const gitHub = form.GitHub.value;
    const resume = form.resume.value;

    console.log({ linkedIn, gitHub, resume });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 p-4">
      <div className="w-full max-w-md bg-white rounded-lg shadow-md p-6">
        <h1 className="text-4xl font-semibold text-center mb-8">
          Apply Job for : <Link to={`/jobs/${jobId}`}> Details</Link>
        </h1>

        <form onSubmit={handleApplyFormSubmit}>
          <fieldset className="space-y-6">
            <div>
              <label className="label block mb-1 font-medium text-gray-700">
                LinkedIn Link
              </label>
              <input
                type="url"
                name="likedIn"
                className="input input-bordered w-full rounded-md border-gray-300 focus:ring-2 focus:ring-indigo-500"
                placeholder="LinkedIn profile"
                required
              />
            </div>

            <div>
              <label className="label block mb-1 font-medium text-gray-700">
                GitHub Link
              </label>
              <input
                type="url"
                name="GitHub"
                className="input input-bordered w-full rounded-md border-gray-300 focus:ring-2 focus:ring-indigo-500"
                placeholder="GitHub profile"
                required
              />
            </div>

            <div>
              <label className="label block mb-1 font-medium text-gray-700">
                Resume Link
              </label>
              <input
                type="url"
                name="resume"
                className="input input-bordered w-full rounded-md border-gray-300 focus:ring-2 focus:ring-indigo-500"
                placeholder="Resume link (Google Drive, etc)"
                required
              />
            </div>

            <input
              type="submit"
              className="btn btn-primary w-full rounded-md py-2 text-white hover:bg-indigo-600 transition-colors cursor-pointer"
              value="Apply"
            />
          </fieldset>
        </form>
      </div>
    </div>
  );
}

export default JobApply;
