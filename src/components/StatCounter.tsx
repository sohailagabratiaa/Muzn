import React, { useState, useEffect } from 'react';

export const StatCounter = React.memo(({ value, label, suffix = "", prefix = "" }: { value: number, label: string, suffix?: string, prefix?: string }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let startTime: number | null = null;
    const end = value;
    const duration = 2000;
    
    let frameId: number;

    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      setCount(Math.floor(progress * end));
      
      if (progress < 1) {
        frameId = requestAnimationFrame(step);
      }
    };
    
    frameId = requestAnimationFrame(step);
    return () => cancelAnimationFrame(frameId);
  }, [value]);

  return (
    <div className="text-center p-6 bg-gradient-to-br from-white/10 to-white/5 rounded-3xl backdrop-blur-md border border-white/10 shadow-xl">
      <div className="text-4xl md:text-5xl font-black bg-gradient-to-l from-muzn-green via-muzn-light-green to-white bg-clip-text text-transparent mb-2">
        {prefix}{count}{suffix}
      </div>
      <div className="text-sm md:text-base text-gray-300 font-medium">{label}</div>
    </div>
  );
});
