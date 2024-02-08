import React, { useState } from "react";
import { Link, useNavigate, useNavigation } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function AdminDashboard() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const navigate = useNavigate()

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const handleLogout = () => {
    // Perform logout actions here (e.g., clear user session)
    // Assuming logout is successful, display a message and navigate to the login page
    toast.success("Logout successful");
    navigate("/adminlogin");
  };

  return (
    <div className="flex h-screen bg-white gap-0.5">
      <aside className={`w-64 bg-[#6f42c1] p-4 text-white" ${isSidebarOpen ? 'block' : 'hidden'}`}>
        <div className="p-4">
          <h2 className="text-2xl font-semibold mb-4 text-white">Admin Panel</h2>
          <ul>
            <li className="mb-2 text-white hover:text-blue-500">
              <Link to="/dashboard">Dashboard</Link>
            </li>
            <li className="mb-2 text-white hover:text-blue-500">
              <Link to="/service">Services</Link>
            </li>
            <li className="mb-2 text-white hover:text-blue-500">
              <Link to="/repair">Repair Guide</Link>
            </li>
            <li className="mb-2 text-white hover:text-blue-500">
              <Link to="/projects">Projects</Link>
            </li>
            <li className="mb-2 text-white hover:text-blue-500">
              <Link to="/users">View Booking</Link>
            </li>
            <li className="mb-2 text-white hover:text-blue-500">
              <Link to="/users">View Contact</Link>
            </li>
            <li className="mb-2 text-white hover:text-blue-500">
              <Link to="/settings">Settings</Link>
            </li>
          </ul>
        </div>
      </aside>
      <main className="flex-1">
        <header className="bg-[#6f42c1] p-4 text-white">
          <div className="flex justify-between items-center">
            <div className="flex items-center">
              <button onClick={toggleSidebar} className="mr-4">
                {isSidebarOpen ? <FaTimes /> : <FaBars />}
              </button>
              <h1 className="text-xl font-semibold">Admin Dashboard</h1>
            </div>
            <div>
            <button onClick={handleLogout} className="px-4 py-2 bg-blue-500 text-white rounded-md">
            Logout
          </button>
            </div>
          </div>
        </header>
        <div className="p-4">
          <div className="grid grid-cols-4 gap-4">
            {/* Cards content */}
            <div className="rounded-lg border bg-card text-card-foreground shadow-sm col-span-1" data-v0-t="card">
              <div className="flex flex-col space-y-1.5 p-6">
                <h3 className="text-2xl font-semibold whitespace-nowrap leading-none tracking-tight">Projects</h3>
              </div>
              <div className="p-6 flex items-center justify-between">
                <div>
                  <div className="text-4xl font-bold">18</div>
                  <div className="text-sm text-gray-500">2 Completed</div>
                </div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-gray-400"
                >
                  <path d="M4 20h16a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.93a2 2 0 0 1-1.66-.9l-.82-1.2A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13c0 1.1.9 2 2 2Z"></path>
                </svg>
              </div>
            </div>
            {/* Other cards go here */}
          </div>
          <div className="mt-4">
            <h2 className="text-xl font-semibold mb-2">Active Projects</h2>
            <div className="relative w-full overflow-auto">
              <table className="w-full caption-bottom text-sm">
                <thead className="[&amp;_tr]:border-b">
                  <tr className="border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted">
                    <th className="h-12 px-4 text-left align-middle font-medium text-muted-foreground [&amp;:has([role=checkbox])]:pr-0">
                      Project Name
                    </th>
                    <th className="h-12 px-4 text-left align-middle font-medium text-muted-foreground [&amp;:has([role=checkbox])]:pr-0">
                      Hours
                    </th>
                    <th className="h-12 px-4 text-left align-middle font-medium text-muted-foreground [&amp;:has([role=checkbox])]:pr-0">
                      Priority
                    </th>
                    <th className="h-12 px-4 text-left align-middle font-medium text-muted-foreground [&amp;:has([role=checkbox])]:pr-0">
                      Members
                    </th>
                    <th className="h-12 px-4 text-left align-middle font-medium text-muted-foreground [&amp;:has([role=checkbox])]:pr-0">
                      Progress
                    </th>
                  </tr>
                </thead>
                <tbody className="[&amp;_tr:last-child]:border-0">
                  {/* Table body content */}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default AdminDashboard;
