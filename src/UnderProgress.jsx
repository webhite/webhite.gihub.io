import React from "react";

const UnderProgress = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-gray-900">
      <div className="text-center text-white">
        {/* Animated Text */}
        <h1 className="text-4xl md:text-6xl font-bold mb-4 animate-pulse">
          Website Under Progress
        </h1>

        {/* Rotating Circle */}
        <div className="flex justify-center items-center mt-6">
          <div className="h-16 w-16 border-4 border-dashed rounded-full border-violet-400 animate-spin"></div>
        </div>

        {/* Subtext */}
        <p className="mt-6 text-lg text-gray-400">
          We're working hard to bring this website to life. Stay tuned!
        </p>
      </div>
    </div>
  );
};

export default UnderProgress;
