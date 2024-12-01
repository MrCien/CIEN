import React from 'react';
import { Home, Compass, Clock, ThumbsUp, PlaySquare, Film, Gamepad2, Lightbulb, Trophy } from 'lucide-react';

export const Sidebar: React.FC = () => {
  return (
    <aside className="fixed left-0 top-14 w-64 h-[calc(100vh-3.5rem)] bg-white overflow-y-auto">
      <div className="p-2">
        <div className="mb-4">
          <a href="/" className="flex items-center gap-4 px-3 py-2 rounded-lg hover:bg-gray-100">
            <Home className="h-6 w-6" />
            <span>Home</span>
          </a>
          <a href="/explore" className="flex items-center gap-4 px-3 py-2 rounded-lg hover:bg-gray-100">
            <Compass className="h-6 w-6" />
            <span>Explore</span>
          </a>
        </div>

        <hr className="my-2" />

        <div className="mb-4">
          <h3 className="px-3 py-2 text-sm font-semibold">Library</h3>
          <a href="/history" className="flex items-center gap-4 px-3 py-2 rounded-lg hover:bg-gray-100">
            <Clock className="h-6 w-6" />
            <span>History</span>
          </a>
          <a href="/liked" className="flex items-center gap-4 px-3 py-2 rounded-lg hover:bg-gray-100">
            <ThumbsUp className="h-6 w-6" />
            <span>Liked Videos</span>
          </a>
          <a href="/your-videos" className="flex items-center gap-4 px-3 py-2 rounded-lg hover:bg-gray-100">
            <PlaySquare className="h-6 w-6" />
            <span>Your Videos</span>
          </a>
        </div>

        <hr className="my-2" />

        <div>
          <h3 className="px-3 py-2 text-sm font-semibold">Explore</h3>
          <a href="/movies" className="flex items-center gap-4 px-3 py-2 rounded-lg hover:bg-gray-100">
            <Film className="h-6 w-6" />
            <span>Movies</span>
          </a>
          <a href="/gaming" className="flex items-center gap-4 px-3 py-2 rounded-lg hover:bg-gray-100">
            <Gamepad2 className="h-6 w-6" />
            <span>Gaming</span>
          </a>
          <a href="/learning" className="flex items-center gap-4 px-3 py-2 rounded-lg hover:bg-gray-100">
            <Lightbulb className="h-6 w-6" />
            <span>Learning</span>
          </a>
          <a href="/sports" className="flex items-center gap-4 px-3 py-2 rounded-lg hover:bg-gray-100">
            <Trophy className="h-6 w-6" />
            <span>Sports</span>
          </a>
        </div>
      </div>
    </aside>
  );
};