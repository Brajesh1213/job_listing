import { Star } from "lucide-react";

export function JobCard({ job }) {
  if (!job) return <p>No job data available</p>;

  return (
    <div className={`rounded-lg p-4 shadow-md ${job.color || "bg-white"}`}>
      <div className="flex justify-between items-start">
        <div>
          <h3 className="font-semibold text-lg">{job.title}</h3>
          <div className="flex items-center mt-1">
            <div className="flex items-center">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className={`w-4 h-4 ${
                    i < job.rating ? "text-yellow-400" : "text-gray-300"
                  }`}
                  stroke="currentColor"
                  fill={i < job.rating ? "yellow" : "none"} // Updated fill
                />
              ))}
            </div>
            <span className="text-sm text-gray-600 ml-2">
              ({job.reviews} Reviews)
            </span>
          </div>
          <div className="text-sm text-gray-600 mt-1">{job.location}</div>
        </div>
        <button className="text-sm px-3 py-1 rounded-full border border-gray-400 hover:bg-gray-100 transition">
          Save
        </button>
      </div>

      <div className="flex gap-2 mt-3 flex-wrap">
        {job.tags?.map((tag, index) => (
          <span
            key={index}
            className="px-3 py-1 rounded-full bg-gray-200 text-sm"
          >
            {tag}
          </span>
        ))}
      </div>

      <div className="flex justify-between items-center mt-4">
        <div className="text-lg font-semibold">{job.salary}</div>
        <button className="bg-black text-white px-4 py-1 rounded-full text-sm hover:bg-gray-800 transition">
          Details
        </button>
      </div>
    </div>
  );
}
