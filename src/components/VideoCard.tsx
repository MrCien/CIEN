import React from 'react';
import { formatNumber } from '../utils/formatters';
import { formatDistanceToNow } from 'date-fns';
import { Video } from '../types';

interface VideoCardProps {
  video: Video;
}

export const VideoCard: React.FC<VideoCardProps> = ({ video }) => {
  return (
    <div className="flex flex-col gap-2">
      <div className="relative">
        <img
          src={video.thumbnailUrl}
          alt={video.title}
          className="w-full aspect-video object-cover rounded-xl"
        />
        <span className="absolute bottom-2 right-2 bg-black bg-opacity-80 text-white text-sm px-2 py-1 rounded">
          {video.duration}
        </span>
      </div>
      <div className="flex gap-3">
        <img
          src={video.channel.avatarUrl}
          alt={video.channel.name}
          className="w-9 h-9 rounded-full"
        />
        <div>
          <h3 className="font-semibold line-clamp-2">{video.title}</h3>
          <p className="text-sm text-gray-600">{video.channel.name}</p>
          <p className="text-sm text-gray-600">
            {formatNumber(video.views)} views •{' '}
            {formatDistanceToNow(new Date(video.createdAt), { addSuffix: true })}
          </p>
        </div>
      </div>
    </div>
  );
};