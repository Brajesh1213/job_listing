"use client";

import { Search } from "lucide-react";

export function SearchFilters({ 
  role, setRole, 
  location, setLocation, 
  experience, setExperience, 
  salary, setSalary 
}) {

  const handleMinChange = (e) => {
    const minValue = parseInt(e.target.value);
    if (minValue < salary[1]) setSalary([minValue, salary[1]]);
  };

  const handleMaxChange = (e) => {
    const maxValue = parseInt(e.target.value);
    if (maxValue > salary[0]) setSalary([salary[0], maxValue]);
  };

  return (
    <div className="bg-[#1a1b1e] p-4 flex items-center justify-between space-x-4">
      {/* Role Selection */}
      <div className="flex items-center space-x-4 flex-1">
        <div className="relative w-[200px] bg-[#2d2e32] p-2 rounded-md flex items-center">
          <Search className="w-4 h-4 mr-2 text-gray-400" />
          <select
            className="w-full text-white outline-none bg-[#2d2e32] border border-gray-600 rounded-md p-2 cursor-pointer"
            value={role}
            onChange={(e) => setRole(e.target.value)}
          >
            <option value="all">All Roles</option>
            <option value="designer">Designer</option>
            <option value="developer">Developer</option>
            <option value="manager">Manager</option>
          </select>
        </div>

        {/* Work Location */}
        <div className="relative w-[200px]">
          <select
            className="w-full text-white outline-none bg-[#2d2e32] border border-gray-600 rounded-md p-2 cursor-pointer"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
          >
            <option value="all">All Locations</option>
            <option value="remote">Remote</option>
            <option value="onsite">On-site</option>
          </select>
        </div>

        {/* Experience */}
        <div className="relative w-[200px]">
          <select
            className="w-full text-white outline-none bg-[#2d2e32] border border-gray-600 rounded-md p-2 cursor-pointer"
            value={experience}
            onChange={(e) => setExperience(e.target.value)}
          >
            <option value="all">Any Experience</option>
            <option value="junior">Junior</option>
            <option value="senior">Senior</option>
          </select>
        </div>
      </div>

      {/* Salary Range Selector */}
      <div className="flex flex-col items-start w-[250px]">
        <span className="text-gray-400 mb-1">Salary Range</span>
        <div className="relative w-full">
          {/* Progress Bar */}
          <div className="w-full bg-gray-700 h-2 rounded-full relative">
            <div
              className="bg-blue-500 h-2 rounded-full absolute"
              style={{
                left: `${((salary[0] - 500) / (5000 - 500)) * 100}%`,
                width: `${((salary[1] - salary[0]) / (5000 - 500)) * 100}%`,
              }}
            />
          </div>

          {/* Min Salary Slider */}
          <input
            type="range"
            min="500"
            max="5000"
            step="500"
            value={salary[0]}
            onChange={handleMinChange}
            className="absolute w-full top-0 h-2 opacity-0 cursor-pointer"
          />

          {/* Max Salary Slider */}
          <input
            type="range"
            min="500"
            max="5000"
            step="500"
            value={salary[1]}
            onChange={handleMaxChange}
            className="absolute w-full top-0 h-2 opacity-0 cursor-pointer"
          />
        </div>

        {/* Salary Range Values */}
        <div className="flex justify-between w-full mt-2 text-white text-sm">
          <span>${salary[0]}</span>
          <span>${salary[1]}</span>
        </div>
      </div>
    </div>
  );
}
