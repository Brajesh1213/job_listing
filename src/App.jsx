import "./App.css";
import { useState } from "react";
import { NavBar } from "./components/nav-bar";
import { SearchFilters } from "./components/search-filters";
import { JobCard } from "./components/job-card";
import { Fingerprint } from "lucide-react";

const JOBS = [
  {
    id: "1",
    title: "Senior Product Manager",
    company: "Google",
    location: "New York, NY",
    salary: 2500,
    rating: 4,
    reviews: 32,
    experience: "Senior",
    tags: ["Full Time", "Remote"],
    workingSchedule: "Full Time",
    employmentType: "Full Day",
    color: "bg-orange-100",
  },
  {
    id: "2",
    title: "Front End Developer",
    experience: "Junior",
    company: "Microsoft",
    location: "San Francisco, CA",
    salary: 1500,
    rating: 4,
    reviews: 12,
    tags: ["Part Time", "Remote"],
    workingSchedule: "Freelance",
    employmentType: "Flexible",
    color: "bg-purple-100",
  },
  {
    id: "3",
    title: "Quality Assurance Engineer",
    company: "Apple",
    experience: "Junior",
    location: "Boston, MA",
    salary: 1800,
    rating: 5,
    reviews: 24,
    tags: ["Onsite", "Active"],
    workingSchedule: "Internship",
    employmentType: "Distance Work",
    color: "bg-green-100",
  },
  {
    id: "4",
    title: "GET",
    company: "Nokia",
    experience: "Senior",
    location: "Mumbai, Mu",
    salary: 1800,
    rating: 4,
    reviews: 124,
    tags: ["Onsite", "Active"],
    workingSchedule: "Contractual",
    employmentType: "Distance Work",
    color: "bg-green-100",
  },
];

export default function App() {
  const [searchTerm, setSearchTerm] = useState("");
  const [role, setRole] = useState("all");
  const [location, setLocation] = useState("all");
  const [experience, setExperience] = useState("all");
  const [salary, setSalary] = useState([500, 5000]); // Min & Max Salary
  const [jobType, setJobType] = useState([]);
  const [workingSchedule, setWorkingSchedule] = useState([]);
  const [employmentType, setEmploymentType] = useState([]);

  // Handle Checkbox Filter Change

  
  const handleCheckboxChange = (category, value) => {
    if (category === "jobType") {
      setJobType((prev) =>
        prev.includes(value) ? prev.filter((item) => item !== value) : [...prev, value]
      );
    } else if (category === "workingSchedule") {
      setWorkingSchedule((prev) =>
        prev.includes(value) ? prev.filter((item) => item !== value) : [...prev, value]
      );
    } else if (category === "employmentType") {
      setEmploymentType((prev) =>
        prev.includes(value) ? prev.filter((item) => item !== value) : [...prev, value]
      );
    }
  };

  // Apply Filters
  const filteredJobs = JOBS.filter((job) => {
    const matchesSearch = searchTerm === "" || job.title.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesRole = role === "all" || job.title.toLowerCase().includes(role.toLowerCase());
    const matchesLocation =
      location === "all" ||
      (location === "remote" && job.tags.includes("Remote")) ||
      (location === "onsite" && !job.tags.includes("Remote")) ||
      job.location === location;
    const matchesExperience = experience === "all" || job.experience.toLowerCase() === experience.toLowerCase();
    const matchesSalary = job.salary >= salary[0] && job.salary <= salary[1];
    const matchesJobType = jobType.length === 0 || job.tags.some((tag) => jobType.includes(tag));
    const matchesWorkingSchedule = workingSchedule.length === 0 || workingSchedule.includes(job.workingSchedule);
    const matchesEmploymentType = employmentType.length === 0 || employmentType.includes(job.employmentType);

    return matchesSearch && matchesRole && matchesLocation && matchesExperience && matchesSalary && matchesJobType && matchesWorkingSchedule && matchesEmploymentType;
  });

  return (
    <div className="min-h-screen bg-[#1a1b1e]">
      <NavBar />
      <SearchFilters 
        searchTerm={searchTerm} setSearchTerm={setSearchTerm}
        role={role} setRole={setRole}
        location={location} setLocation={setLocation}
        experience={experience} setExperience={setExperience}
        salary={salary} setSalary={setSalary}
        jobType={jobType} setJobType={setJobType}
        workingSchedule={workingSchedule} setWorkingSchedule={setWorkingSchedule}
        employmentType={employmentType} setEmploymentType={setEmploymentType}
        onCheckboxChange={handleCheckboxChange}
      />

      <main className="max-w-7xl mx-auto p-6">
        <div className="grid grid-cols-[300px,1fr] gap-8">
          {/* Left Sidebar */}
          <div>
            {/* 🔹 Fingerprint Section (Update Profile Box) */}
            <div className="bg-[#2d2e32] rounded-lg p-6 text-center">
              <div className="w-20 h-20 bg-teal-400 rounded-full flex items-center justify-center mx-auto mb-4">
                <Fingerprint className="w-10 h-10 text-white" />
              </div>
              <h2 className="text-white font-semibold mb-2">Update your data!</h2>
              <button className="bg-teal-400 text-white px-4 py-2 rounded-lg w-full">
                Update now
              </button>
            </div>

            {/* 🔹 Working Schedule Section */}
            <div className="mt-8">
              <h3 className="text-white font-semibold mb-4">Working Schedule</h3>
              <div className="space-y-4">
                {["Full Time", "Internship", "Freelance", "Contractual"].map((type) => (
                  <label key={type} className="flex items-center text-gray-300">
                    <input
                      type="checkbox"
                      className="mr-3"
                      checked={workingSchedule.includes(type)}
                      onChange={() => handleCheckboxChange("workingSchedule", type)}
                    />
                    {type}
                  </label>
                ))}
              </div>
            </div>

            {/* 🔹 Employment Type Section */}
            <div className="mt-8">
              <h3 className="text-white font-semibold mb-4">Employment Type</h3>
              <div className="space-y-4">
                {["Full Day", "Flexible", "Distance Work"].map((type) => (
                  <label key={type} className="flex items-center text-gray-300">
                    <input
                      type="checkbox"
                      className="mr-3"
                      checked={employmentType.includes(type)}
                      onChange={() => handleCheckboxChange("employmentType", type)}
                    />
                    {type}
                  </label>
                ))}
              </div>
            </div>
          </div>

          {/* Main Job Listings Section */}
          <div>
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-white text-xl font-semibold">
                Recommended Jobs <span className="text-gray-400 text-sm ml-2">{filteredJobs.length}</span>
              </h2>
            </div>

            {/* Job Listings */}
            <div className="grid grid-cols-3 gap-6">
              {filteredJobs.length > 0 ? (
                filteredJobs.map((job) => <JobCard key={job.id} job={job} />)
              ) : (
                <p className="text-gray-400">No jobs found</p>
              )}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
