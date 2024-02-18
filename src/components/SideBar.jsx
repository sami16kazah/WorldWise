import { Outlet } from 'react-router-dom';
import AppNav from './AppNav';

function SideBar() {
  return (
    <div className=" w-1/2  h-screen bg-gray-800 text-white flex flex-col gap-5 rounded-sm overflow-y-auto">
      <div className="flex items-end justify-center">
        <img className="w-8 md:w-10" src="/vite.svg" alt="WorldWise Logo" />
        <h1 className="text-pretty text-lg tracking-tighter">World Wise</h1>
      </div>
      <div className=" flex flex-col items-center justify-center gap-10">
        <AppNav></AppNav>
        <Outlet></Outlet>
      </div>

      <footer className=" flex items-end justify-center text-pretty text-xs tracking-wide text-gray-500 ">
        <p> &copy; CopyRights {new Date().getFullYear()} by WorldWise Inc .</p>
      </footer>
    </div>
  );
}

export default SideBar;
