import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Sidebar } from './components/Sidebar';
import { CategoryBar } from './components/CategoryBar';
import { VideoCard } from './components/VideoCard';
import { videos } from './data/videos';

function App() {
  const [selectedCategory, setSelectedCategory] = useState('all');

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <Sidebar />
      
      <main className="ml-64 pt-14">
        <CategoryBar
          selectedCategory={selectedCategory}
          onSelectCategory={setSelectedCategory}
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 p-4">
          {videos.map((video) => (
            <VideoCard key={video.id} video={video} />
          ))}
        </div>
      </main>
    </div>
  );
}

export default App;