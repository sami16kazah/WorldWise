import PageNav from '../components/PageNav';
import { Link } from 'react-router-dom';
function HomePage() {
  return (
    <div className="  bg-cover bg-no-repeat min-h-screen relative z-10">
      <div className=" absolute inset-0 bg-[url('/main.jpg')] bg-center bg-cover b  z-[-1] filter contrast-50"></div>
      <PageNav />
      <div className=" w-1/2 mt-32 m-auto">
        <p className="text-pretty text-4xl text-white tracking-wider text-center">
          You travel the world.
        </p>
        <p className="text-pretty text-4xl text-white tracking-wider text-center">
          WorldWise keeps track of your adventures.
        </p>
        <p className="text-pretty text-xl text-gray-200 tracking-wider text-center mt-8">
          A world map that tracks your footsteps into every city you can think
          of. Never forget your wonderfull moments.
        </p>
        <p className="text-pretty text-xl  text-center overflow-hidden mt-8">
          <button className="bg-green-500 m-auto hover:bg-green-700 rounded-lg p-2 w-1/2  text-pretty tracking-wide border-green-700 text-center overflow-hidden">
            <Link to="/login" className="text-center">
              START TRACKING NOW
            </Link>
          </button>
        </p>
      </div>
    </div>
  );
}

export default HomePage;
