import NProgress from 'nprogress';
import 'nprogress/nprogress.css';
import { useEffect } from 'react';

const Progress = () => {
  useEffect(() => {
    NProgress.start();

    return () => {
      NProgress.done();
    };
  });

  return (
    <div className="grid  bg-gray-900 animate-pulse place-content-center text-6xl text-white"></div>
  );
};

export default Progress;
