import { Link, useNavigate } from 'react-router-dom';
import PageNav from '../components/PageNav';
import { useEffect, useState } from 'react';
import { useAuth } from '../Context/AuthContext';
function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { login, isAuthenticated } = useAuth();
  const navigate = useNavigate();
  function handleSubmit(e) {
    e.preventDefault();
    if (email && password) login(email, password);
  }
  useEffect(() => {
    if (isAuthenticated) navigate('/worldWise', { replace: true });
  }, [isAuthenticated]);
  return (
    <div className="  bg-cover bg-no-repeat min-h-screen relative z-10">
      <div className=" absolute inset-0  bg-gray-950 bg-center bg-cover b  z-[-1] filter contrast-50"></div>
      <PageNav />
      {/* Content area with responsive layout */}
      <div className="  pt-16 md:pt-24 mx-auto px-4 md:px-8 max-w-7xl flex flex-col md:flex-row ">
        <div className="w-full md:w-1/2 m-auto">
          <form
            className="w-full p-8 bg-gray-800 rounded-lg flex flex-col justify-center items-start "
            onSubmit={handleSubmit}
          >
            <div className="flex flex-col m-auto w-2/3 p-2  ">
              <label className="text-pretty text-xl text-white text-left tracking-widest">
                Email Address
              </label>
              <input
                className="w-full rounded-md  p-2"
                type="email"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
              ></input>
            </div>
            <div className="flex flex-col m-auto p-2   w-2/3">
              <label className="text-pretty text-xl text-white tracking-widest">
                Password
              </label>
              <input
                className="w-full rounded-md  p-2"
                type="password"
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
              ></input>
            </div>
            <div className="flex flex-col m-auto p-2 w-2/3">
              <button className="bg-green-600 hover:bg-green-700 rounded-lg px-4 py-2 text-white tracking-widest">
                {/*<Link to="/worldWise" className="text-center">
                  Log in
                </Link>*/}
                Login
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
