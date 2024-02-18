import { Link, useNavigate } from 'react-router-dom';
import { useUrlPosition } from '../hooks/useUrlPosition';
import { useEffect, useState } from 'react';
import Spinner from './Spinner';
import moment from 'moment';
import { useCities } from '../Context/CitiesContext';
const URL = 'https://api.bigdatacloud.net/data/reverse-geocode-client';

export function convertToEmoji(countryCode) {
  const codePoints = countryCode
    .toUpperCase()
    .split('')
    .map((char) => 127397 + char.charCodeAt());
  return String.fromCodePoint(...codePoints);
}

function Form() {
  const [lat, lng] = useUrlPosition();
  const navigate = useNavigate();
  const { createCity } = useCities();
  const [isLoadingGeoCoding, setIsLoadingGeoCoding] = useState(false);
  const [cityName, setCityName] = useState('');
  const [country, setCountry] = useState('');
  const [date, setDate] = useState('');
  const [notes, setNotes] = useState('');
  const [emoji, setEmoji] = useState('');
  const [GeoError, setGeoError] = useState('');
  useEffect(() => {
    async function fetchCityData() {
      try {
        setIsLoadingGeoCoding(true);
        setGeoError(false);
        const res = await fetch(`${URL}?latitude=${lat}&longitude=${lng}`);
        const data = await res.json();
        if (!data.countryCode) {
          throw new Error('That doesnt seem to be a city');
        }
        setCityName(data.city || data.locality || '');
        setCountry(data.countryName);
        setDate(moment().format('YYYY-MM-DD'));
        setEmoji(convertToEmoji(data.countryCode));

        console.log(data);
      } catch (error) {
        setGeoError(error.message);
      } finally {
        setIsLoadingGeoCoding(false);
      }
    }
    fetchCityData();
  }, [lat, lng]);

  if (GeoError)
    return (
      <p className="text-pretty text-white text-center  text-xl tracking-wider">
        👋 Sorry no city on the map .
      </p>
    );
  if (isLoadingGeoCoding) return <Spinner></Spinner>;

  async function handleSubmit(e) {
    e.preventDefault();
    if (!cityName || !date) return;
    const newCity = {
      cityName,
      country,
      emoji,
      date,
      notes,
      position: { lat, lng },
    };
    await createCity(newCity);
    navigate('/worldWise/cities');
  }
  return (
    <div className=" w-full h-full mx-auto flex lg:flex-col md:flex-row sm:flex-row ">
      <div className="w-full  m-auto">
        <form
          className="w-full p-8 bg-gray-800 rounded-lg flex flex-col justify-center items-start "
          onSubmit={handleSubmit}
        >
          <div className="flex flex-col m-auto w-2/3 p-2  ">
            <label className="text-pretty text-xl text-white text-left tracking-widest">
              City Name
            </label>
            <input
              className="w-full rounded-md  p-2 text-black"
              type="text"
              onChange={(e) => setCityName(e.target.value)}
              value={cityName}
            ></input>
            <span className=" text-right ">{emoji}</span>
          </div>
          <div className="flex flex-col m-auto p-2   w-2/3">
            <label className="text-pretty text-xl text-white tracking-widest">
              When did you go ?
            </label>
            <input
              className="w-full rounded-md  p-2 text-black"
              type="date"
              onChange={(e) => setDate(e.target.value)}
              value={date}
            ></input>
          </div>
          <div className="flex flex-col m-auto p-2   w-2/3">
            <label className="text-pretty text-xl text-white tracking-widest">
              Notes ?
            </label>
            <textarea
              className="w-full rounded-md text-black  p-2"
              type="textarea"
              onChange={(e) => setNotes(e.target.value)}
              value={notes}
            ></textarea>
          </div>
          <div className="flex flex-col m-auto p-2 w-2/3">
            <button className="bg-green-600 hover:bg-green-700 rounded-lg px-4 py-2 text-white tracking-widest">
              Submit
            </button>
            <button
              onClick={(e) => {
                e.preventDefault();
                navigate(-1);
              }}
              className="bg-gray-950 hover:bg-gray-900 rounded-lg mt-2 px-4 py-2 text-white tracking-widest"
            >
              Back
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Form;
