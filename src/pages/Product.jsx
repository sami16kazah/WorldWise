import PageNav from '../components/PageNav';

function Product() {
  return (
    <div className="  bg-cover bg-no-repeat min-h-screen relative z-10">
      <div className=" absolute inset-0  bg-gray-950 bg-center bg-cover b  z-[-1] filter contrast-50"></div>
      <PageNav />
      {/* Content area with responsive layout */}
      <div className="pt-16 md:pt-24 mx-auto px-4 md:px-8 max-w-7xl flex flex-col md:flex-row gap-10">
        <div className="w-full md:w-1/2 flex justify-center">
          <img
            className="w-2/3 aspect-square object-cover rounded-lg shadow-md"
            src="/main.jpg"
            alt="WorldWise Map"
          />
        </div>
        <div className="w-full md:w-1/2 flex items-start justify-center md:justify-start mt-10 md:mt-0">
          <div className="text-center md:text-left space-y-4">
            <h1 className="text-4xl font-bold text-white">About WorldWise</h1>
            <p className="text-xl text-gray-300">
              A world map that tracks your footsteps into every city you can
              think of. Never forget your wonderful moments. A world map that
              tracks your footsteps into every city you can think of. Never
              forget your wonderful moments. A world map that tracks your
              footsteps into every city you can think of. Never forget your
              wonderful moments. A world map that tracks your footsteps into
              every city you can think of. Never forget your wonderful moments.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Product;
