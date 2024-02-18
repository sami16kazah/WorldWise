import Spinner from './Spinner';
import CountryItem from './CountryItem';
import { useCities } from '../Context/CitiesContext';
// eslint-disable-next-line react/prop-types
function CountryList() {
  const { cities, isLoading } = useCities();
  if (isLoading) {
    return <Spinner></Spinner>;
  }

  // eslint-disable-next-line react/prop-types
  const countries = cities.reduce((arr, city) => {
    if (!arr.map((el) => el.emoji).includes(city.emoji))
      return [...arr, { countryName: city.country, emoji: city.emoji }];
    else return arr;
  }, []);
  // eslint-disable-next-line react/prop-types
  if (!cities.length) {
    return (
      <p className="text-pretty text-white text-center  text-xl tracking-wider">
        👋 Add your first journy by clicking on a city on the map .
      </p>
    );
  }

  return (
    <ul className="w-2/3">
      {countries.map((country) => (
        <CountryItem country={country} key={country.countryName}></CountryItem>
      ))}
    </ul>
  );
}

export default CountryList;
