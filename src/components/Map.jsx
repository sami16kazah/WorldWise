import { useNavigate } from 'react-router-dom';
import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  useMap,
  useMapEvents,
} from 'react-leaflet';
import { useEffect, useState } from 'react';
import { useCities } from '../Context/CitiesContext';
import { useGeolocation } from '../hooks/useGeoLocation';
import { useUrlPosition } from '../hooks/useUrlPosition';
import { useAuth } from '../Context/AuthContext';
function Map() {
  const { cities } = useCities();
  const { user, logout } = useAuth();
  const navigate = useNavigate();
  const [mapLat, mapLng] = useUrlPosition();
  const [mapPosition, setMapPosition] = useState([40, 0]);

  const {
    isLoading: isLoadingPostion,
    position: GeoLocationPosition,
    getPosition,
  } = useGeolocation();
  useEffect(() => {
    if (GeoLocationPosition)
      setMapPosition([GeoLocationPosition.lat, GeoLocationPosition.lng]);
  }, [GeoLocationPosition]);
  useEffect(() => {
    if (mapLng && mapLat) setMapPosition([mapLat, mapLng]);
  }, [mapLat, mapLng]);
  return (
    <div className="relative bg-gray-600 text-white w-full h-screen">
      <span className="absolute top-5 left-1/2 transform -translate-x-1/2 bg-gray-700 rounded-md px-4 py-2   z-20 text-pretty tracking-wider">
        Welcome , {user.name}{' '}
        <button
          className="bg-gray-900 rounded-md hover:bg-gray-950 px-4 py-2 "
          onClick={(e) => {
            e.preventDefault();
            logout();
            navigate('/');
          }}
        >
          {' '}
          Logout
        </button>
      </span>
      <MapContainer
        className="w-full h-full z-10"
        center={mapPosition}
        zoom={6}
        scrollWheelZoom={false}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png"
        />
        {cities.map((city) => (
          <Marker
            position={[city.position.lat, city.position.lng]}
            key={city.id}
          >
            <Popup>
              {city.emoji} {city.cityName}
              <br />
              {city.notes} <br /> {city.date}.
            </Popup>
          </Marker>
        ))}
        <ChangeCenter position={mapPosition}></ChangeCenter>
        <DetectClick></DetectClick>
      </MapContainer>
      <button
        className="absolute bottom-5 left-1/2 transform -translate-x-1/2 bg-green-500 rounded-full px-4 py-2 hover:bg-green-600  z-20"
        type="position"
        onClick={getPosition}
      >
        {isLoadingPostion ? 'Loading...' : 'Use Your Position'}
      </button>
    </div>
  );
  function ChangeCenter({ position }) {
    const map = useMap();
    map.setView(position);
    return null;
  }
  function DetectClick() {
    const navigate = useNavigate();
    useMapEvents({
      click: (e) => navigate(`form?lat=${e.latlng.lat}&lng=${e.latlng.lng}`),
    });
  }
}

export default Map;
