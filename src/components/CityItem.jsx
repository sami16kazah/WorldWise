import { Link, useNavigate } from 'react-router-dom';
import { useCities } from '../Context/CitiesContext';

function CityItem({ city }) {
  const navigate = useNavigate();
  const { currentCity, deleteCity } = useCities();
  const { cityName, emoji, date, id, position } = city;

  return (
    <Link to={`${id}?lat=${position.lat}&lng=${position.lng}`}>
      <li
        className={`flex items-center justify-between  bg-gray-700 mt-2 rounded-lg border-solid  ${
          currentCity.id == id
            ? 'border-2 border-green-500'
            : ' border-l-4 border-green-500'
        } hover:border-2 hover:border-green-500 flex-wrap    `}
      >
        <div className="flex items-center justify-center  aspect-square gap-2 w-1/3">
          <button className="rounded-full bg-green-500 border-0"></button>
          <span>{emoji}</span>
          <h3 className="text-pretty text-md text-ellipsis whitespace-pre-wrap">
            {cityName}
          </h3>
        </div>
        <div className="flex items-center justify-between gap-4">
          <time className=" text-pretty text-xs">({date})</time>
          <div>
            <button
              className="rounded-full bg-gray-800 hover:bg-gray-900 w-[28px] h-[28px] m-1 "
              onClick={async (e) => {
                e.preventDefault();
                await deleteCity(id);
              }}
            >
              X
            </button>
          </div>
        </div>
      </li>
    </Link>
  );
}

export default CityItem;
