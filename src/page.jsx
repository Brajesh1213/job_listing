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
    salary: "$2.5k/month",
    rating: 4,
    reviews: 32,
    tags: ["Full Time", "Remote"],
    color: "bg-orange-100",
    logo: "G",
  },
  {
    id: "2",
    title: "Front End Developer",
    company: "Microsoft",
    location: "New York, NY",
    salary: "$1.5k/month",
    rating: 4,
    reviews: 12,
    tags: ["Part Time", "Remote"],
    color: "bg-purple-100",
    logo: "M",
  },
  {
    id: "3",
    title: "Quality Assurance Engineer",
    company: "Apple",
    location: "Boston, NY",
    salary: "$1.5k/month",
    rating: 5,
    reviews: 24,
    tags: ["Remote", "Active"],
    color: "bg-green-100",
    logo: "A",
  },
];

export default function JobBoard() {
  return (
    <div className="min-h-screen bg-[#1a1b1e]">
      <NavBar />
      <SearchFilters />

      <main className="max-w-7xl mx-auto p-6">
        <div className="grid grid-cols-[300px,1fr] gap-8">
          <div>
            <div className="bg-[#2d2e32] rounded-lg p-6 text-center">
              <div className="w-20 h-20 bg-teal-400 rounded-full flex items-center justify-center mx-auto mb-4">
                <Fingerprint className="w-10 h-10 text-white" />
              </div>
              <h2 className="text-white font-semibold mb-2">Update your data!</h2>
              <button className="bg-teal-400 text-white px-4 py-2 rounded-lg w-full">
                Update now
              </button>
            </div>

            <div className="mt-8">
              <h3 className="text-white font-semibold mb-4">Filters</h3>
              <div className="space-y-4">
                {["Full time", "Part time", "Remote", "Flexible schedule", "Fixed rate"].map((filter, index) => (
                  <label key={index} className="flex items-center text-gray-300">
                    <input type="checkbox" className="mr-3" />
                    {filter}
                  </label>
                ))}
              </div>
            </div>
          </div>

          <div>
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-white text-xl font-semibold">
                Recommended Jobs <span className="text-gray-400 text-sm ml-2">396</span>
              </h2>
              <select className="bg-[#2d2e32] text-white px-3 py-1 rounded">
                <option>Last updated</option>
              </select>
            </div>

            <div className="grid grid-cols-3 gap-6">
              {JOBS.map((job) => (
                <JobCard key={job.id} job={job} />
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
