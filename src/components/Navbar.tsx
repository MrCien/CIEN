import React, { useState } from 'react';
import { Menu, Search, Video, Bell, User } from 'lucide-react';

export const Navbar: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <nav className="fixed top-0 left-0 right-0 bg-white h-14 flex items-center justify-between px-4 z-50">
      <div className="flex items-center gap-4">
        <button className="hover:bg-gray-100 p-2 rounded-full">
          <Menu className="h-6 w-6" />
        </button>
        <div className="flex items-center gap-1">
          <Video className="h-6 w-6 text-red-600" />
          <span className="text-xl font-bold">CIEN</span>
        </div>
      </div>

      <div className="flex-1 max-w-2xl mx-4">
        <div className="flex">
          <input
            type="search"
            placeholder="Search"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-l-full focus:outline-none focus:border-blue-500"
          />
          <button className="px-6 py-2 bg-gray-100 border border-l-0 border-gray-300 rounded-r-full hover:bg-gray-200">
            <Search className="h-5 w-5" />
          </button>
        </div>
      </div>

      <div className="flex items-center gap-4">
        <button className="hover:bg-gray-100 p-2 rounded-full">
          <Video className="h-6 w-6" />
        </button>
        <button className="hover:bg-gray-100 p-2 rounded-full">
          <Bell className="h-6 w-6" />
        </button>
        <button className="hover:bg-gray-100 p-2 rounded-full">
          <User className="h-6 w-6" />
        </button>
      </div>
    </nav>
  );
};