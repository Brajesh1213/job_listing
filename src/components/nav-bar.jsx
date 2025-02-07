import { User, Bell, Settings } from "lucide-react"; // Importing Icons

export function NavBar() {
  return (
    <nav className="bg-[#1a1b1e] p-4 border-b border-gray-800">
      <div className="flex items-center justify-between max-w-7xl mx-auto">
        {/* Brand Name */}
        <div className="text-white text-2xl font-bold">Eclipse</div>

        {/* Navigation Links */}
        <div className="flex items-center space-x-6">
          {["Find Job", "Messages", "Hiring", "Community", "FAQ"].map((item, index) => (
            <a key={index} href="#" className="text-gray-300 hover:text-white text-sm">
              {item}
            </a>
          ))}
        </div>

        {/* User Profile Section */}
        <div className="flex items-center space-x-4">
          {/* Location */}
          <div className="text-gray-300 text-sm">New York, NY</div>

          {/* Notification Icon */}
          <div className="relative w-8 h-8 flex items-center justify-center rounded-full hover:bg-gray-700 transition duration-200 cursor-pointer">
            <Bell className="text-gray-300 w-5 h-5" />
          </div>

          {/* Settings Icon */}
          <div className="relative w-8 h-8 flex items-center justify-center rounded-full hover:bg-gray-700 transition duration-200 cursor-pointer">
            <Settings className="text-gray-300 w-5 h-5" />
          </div>

          {/* User Profile Icon */}
          <div className="w-8 h-8 bg-gray-600 rounded-full flex items-center justify-center hover:bg-gray-500 transition duration-200 cursor-pointer">
            <User className="text-white w-5 h-5" />
          </div>
        </div>
      </div>
    </nav>
  );
}
