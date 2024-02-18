import PageNav from '../components/PageNav';
function PageNotFound() {
  return (
    <div className="  bg-cover bg-no-repeat min-h-screen relative z-10">
      <div className=" absolute inset-0 bg-[url('/main.jpg')] bg-center bg-cover b  z-[-1] filter contrast-50"></div>
      <PageNav />
      <div className=" w-1/2 mt-52 m-auto">
        <p className="text-pretty text-4xl text-white tracking-wider text-center">
          404 | Oops Page Not Found.
        </p>
      </div>
    </div>
  );
}

export default PageNotFound;
