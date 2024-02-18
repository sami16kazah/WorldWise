import { useState, useEffect } from 'react';
const ProgressBar = () => {
  const [loadingProgress, setLoadingProgress] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setLoadingProgress((prevProgress) => {
        if (prevProgress >= 200) {
          return 200;
        } else {
          const newProgress = prevProgress + Math.random() * 10; // Increment progress randomly for demonstration
          return newProgress;
        }
      });
    }, 100); // Interval time to update progress

    return () => clearInterval(interval);
  }, [loadingProgress]);
  return (
    <div className="bg-white rounded-full w-1/2 mt-2">
      <div
        className={`h-full bg-blue-300 rounded-lg text-right`}
        style={{ width: `${loadingProgress}%` }}
      >
        <span className="p-2 font-black "></span>
      </div>
    </div>
  );
};

export default ProgressBar;
