import { NavLink } from 'react-router-dom';
function AppNav() {
  return (
    <nav>
      <ul className="flex items-center  justify-center">
        <li>
          <NavLink
            to="cities"
            className={({ isActive }) =>
              isActive
                ? 'bg-gray-900 hover:bg-gray-600  px-4 py-2 text-white tracking-widest'
                : 'bg-gray-700 hover:bg-gray-600  px-4 py-2 text-white tracking-widest'
            }
          >
            <button> Cities</button>
          </NavLink>
        </li>
        <li>
          <NavLink
            to="countries"
            className={({ isActive }) =>
              isActive
                ? 'bg-gray-900 hover:bg-gray-600  px-4 py-2 text-white tracking-widest'
                : 'bg-gray-700 hover:bg-gray-600  px-4 py-2 text-white tracking-widest'
            }
          >
            <button> Countries</button>
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default AppNav;
