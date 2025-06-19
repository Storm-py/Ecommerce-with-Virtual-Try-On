
import React from 'react';
import { Link } from 'react-router-dom';

const DashboardSidebar = () => {
  // Mock user data
  const user = {
    name: "rana muneeb",
    email: "ranamuneebmay2018@gmail.com"
  };

  // Navigation items
  const navItems = [
    { name: "HOME", path: "/" },
    { name: "SHOP", path: "/shop" },
    { name: "WOMEN", path: "/women" },
    { name: "MEN", path: "/men" },
    { name: "OUTERWEAR", path: "/outerwear" },
    { name: "BLOG", path: "/blog" },
    { name: "CONTACT", path: "/contact" },
  ];

  // Dashboard items
  const dashboardItems = [
    { name: "Dashboard", icon: "M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" },
    { name: "Orders", icon: "M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" },
    { name: "Downloads", icon: "M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" },
    { name: "Addresses", icon: "M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" },
    { name: "Account details", icon: "M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" },
    { name: "Wishlist", icon: "M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" },
    { name: "Compare", icon: "M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" },
    { name: "Log out", icon: "M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" },
  ];

  return (
    <div className="flex flex-col h-full">
      {/* Top Navigation */}
      <div className="px-6 py-4 border-b border-gray-200">
        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-bold text-[#ff491f]">Clotya®</h1>
          <div className="hidden md:flex space-x-6">
            {navItems.map((item, index) => (
              <Link 
                key={index} 
                to={item.path}
                className="text-gray-700 hover:text-[#ff491f] transition-colors font-medium"
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* Welcome Section */}
      <div className="px-6 py-4 bg-gray-50 border-b border-gray-200">
        <p className="text-sm text-gray-600">Welcome back,</p>
        <p className="font-medium text-gray-900">{user.email}</p>
      </div>

      {/* Dashboard Navigation */}
      <div className="flex-1 overflow-y-auto py-4">
        <h2 className="px-6 mb-4 text-lg font-bold text-gray-900">Dashboard</h2>
        <nav className="space-y-1 px-4">
          {dashboardItems.map((item, index) => (
            <Link
              key={index}
              to="#"
              className={`flex items-center px-4 py-3 rounded-lg transition-colors ${
                item.name === "Dashboard" 
                  ? "bg-[#ff491f] text-white" 
                  : "text-gray-700 hover:bg-gray-100"
              }`}
            >
              <svg 
                className="w-5 h-5 mr-3" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24" 
                xmlns="http://www.w3.org/2000/svg"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth="2" 
                  d={item.icon}
                />
              </svg>
              <span className="font-medium">{item.name}</span>
            </Link>
          ))}
        </nav>
      </div>

      {/* Content Section */}
      <div className="p-6 border-t border-gray-200">
        <p className="text-gray-900 mb-4">
          Hello <strong>{user.email}</strong> 
          
        </p>
        <p className="text-gray-600 text-sm">
          From your account dashboard you can view your recent orders, manage your shipping and 
          billing addresses, and edit your password and account details.
        </p>
        <div className="mt-6 text-center">
          <a 
            href="https://tablenecom/debentmy-account/deben/" 
            className="inline-block text-xs text-gray-500 hover:text-[#ff491f]"
          >
            https://tablenecom/debentmy-account/deben/
          </a>
        </div>
      </div>
    </div>
  );
};

export default DashboardSidebar;