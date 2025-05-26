import { FaSearch, FaThLarge } from "react-icons/fa";

function SearchBar() {
  return (
    <div className="w-full">
      {/* Search Inputs */}
      <div className="flex flex-col md:flex-row justify-center items-stretch bg-base-200 rounded-xl shadow-md px-4 py-5 gap-4 md:gap-2 w-full">
        {/* Industry Dropdown */}
        <select className="select select-bordered w-full md:w-40 focus:outline-none">
          <option disabled selected>
            Industry
          </option>
          <option>Design</option>
          <option>Development</option>
        </select>

        {/* Location Dropdown */}
        <select className="select select-bordered w-full md:w-40 focus:outline-none">
          <option disabled selected>
            Location
          </option>
          <option>Dhaka</option>
          <option>Chittagong</option>
        </select>

        {/* Keyword Input */}
        <div className="flex items-center bg-base-100 rounded-md px-3 w-full border border-gray-300">
          <FaThLarge className="text-gray-400 mr-2" />
          <input
            type="text"
            placeholder="Your keyword..."
            className="input border-0 focus:outline-none w-full bg-transparent p-0"
          />
        </div>

        {/* Search Button */}
        <button className="px-6 py-3 bg-blue-500 hover:bg-blue-600 text-white rounded-lg flex items-center justify-center w-full md:w-auto">
          <FaSearch className="mr-2" /> Search
        </button>
      </div>

      {/* Popular Searches */}
      <div className="text-sm text-gray-500 mt-4 text-center">
        <strong>Popular Searches:</strong>
        <span className="ml-2 space-x-2 block md:inline">
          <a className="link link-hover">Designer</a>,
          <a className="link link-hover">Web</a>,
          <a className="link link-hover">IOS</a>,
          <a className="link link-hover">Developer</a>,
          <a className="link link-hover">PHP</a>,
          <a className="link link-hover">Senior</a>,
          <a className="link link-hover">Engineer</a>
        </span>
      </div>
    </div>
  );
}

export default SearchBar;
