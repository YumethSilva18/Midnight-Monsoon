import React from 'react';

const SkeletonLoader = ({ className = '', width = '100%', height = '200px' }) => {
  return (
    <div 
      className={`animate-pulse bg-gradient-to-r from-gray-800 via-gray-700 to-gray-800 bg-[length:200%_100%] rounded-2xl ${className}`}
      style={{ width, height }}
    >
      <div className="w-full h-full bg-gradient-to-r from-transparent via-gray-600/20 to-transparent animate-shimmer" />
    </div>
  );
};

export const ImageSkeleton = ({ aspectRatio = 'aspect-square' }) => (
  <div className={`${aspectRatio} w-full rounded-2xl overflow-hidden`}>
    <SkeletonLoader height="100%" />
  </div>
);

export const CardSkeleton = () => (
  <div className="space-y-4 p-6">
    <SkeletonLoader height="200px" className="rounded-xl" />
    <SkeletonLoader height="20px" width="60%" />
    <SkeletonLoader height="16px" width="80%" />
  </div>
);

export default SkeletonLoader;