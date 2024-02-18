import { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import { useCities } from '../Context/CitiesContext';
import Spinner from './Spinner';
function City() {
  const { id } = useParams();
  const { getCity, currentCity, isLoading } = useCities();
  const { cityName, emoji, date, notes } = currentCity;
  useEffect(() => {
    getCity(id);
  }, [id, getCity]);
  const navigate = useNavigate();
  if (isLoading) return <Spinner></Spinner>;

  return (
    <>
      <div className="flex items-center justify-center w-2/3   bg-gray-700 mt-2 rounded-lg hover:border-solid border-transparent border-2 hover:border-green-500 flex-wrap   ">
        <div className="flex flex-col items-center justify-center  aspect-square gap-2">
          <label className="text-pretty text-gray-400 tracking-wider">
            CITY NAME
          </label>
          <div className="flex items-stretch justify-evenly w-full">
            <span>{emoji}</span>
            <h3>{cityName}</h3>
          </div>
          <label className="text-pretty text-gray-400 tracking-wider">
            YOU WENT TO {cityName} ON
          </label>
          <div className="flex items-stretch justify-evenly w-full">
            <h3 className="text-pretty text-white tracking-wider">{date}</h3>
          </div>
          <label className="text-pretty text-gray-400 tracking-wider">
            YOUR NOTES
          </label>
          <div className="flex items-stretch justify-evenly w-full">
            <h3 className="text-pretty text-white tracking-wider">{notes}</h3>
          </div>
          <label className="text-pretty text-gray-400 tracking-wider">
            LEARN MORE
          </label>
          <div className="flex items-stretch justify-evenly w-full">
            <h3 className="text-pretty text-orange-500 hover:text-orange-600  underline tracking-wider">
              CHECK OUT {cityName} ON WEKIPEDIA
            </h3>
          </div>
          <button
            className="bg-gray-900 hover:bg-gray-950 rounded-lg px-4 py-2 mt-2 text-white tracking-widest"
            onClick={(e) => {
              e.preventDefault();
              navigate(-1);
            }}
          >
            Back
          </button>
        </div>
      </div>
    </>
  );
}

export default City;
