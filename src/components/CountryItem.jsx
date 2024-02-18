// eslint-disable-next-line react/prop-types
function CountryItem({ country }) {
  // eslint-disable-next-line react/prop-types
  const { countryName, emoji } = country;
  return (
    <li className="flex items-center justify-between  bg-gray-700 mt-2 rounded-lg hover:border-solid border-transparent border-2 hover:border-green-500 flex-wrap   ">
      <div className="flex items-center justify-center  aspect-square gap-2">
        <button className="rounded-full bg-green-500 border-0">
          <span className="h-24 bg-green-500 w-1 block"></span>
        </button>
        <span>{emoji}</span>
        <h3>{countryName}</h3>
      </div>
    </li>
  );
}

export default CountryItem;
