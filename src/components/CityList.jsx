import { useCities } from '../Context/CitiesContext';
import CityItem from './CityItem';
import Spinner from './Spinner';

// eslint-disable-next-line react/prop-types
function CityList() {
  const { isLoading, cities } = useCities();
  if (isLoading) {
    return <Spinner></Spinner>;
  }

  if (!cities.length) {
    return (
      <p className="text-pretty text-white text-center  text-xl tracking-wider">
        👋 Add your first city by clicking on a city on the map .
      </p>
    );
  }

  return (
    <ul className="w-2/3">
      {cities.map((city) => (
        <CityItem city={city} key={city.id}></CityItem>
      ))}
    </ul>
  );
}

export default CityList;
