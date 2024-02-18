// eslint-disable-next-line react/prop-types
function CountryItem({ country }) {
  // eslint-disable-next-line react/prop-types
  const { countryName, emoji } = country;
  return (
    <li className="flex items-center justify-between  bg-gray-700 mt-2 rounded-lg hover:border-solid  border-l-4 border-green-500  hover:border-green-500 hover:border-2 flex-wrap   ">
      <div className="flex items-center justify-center  aspect-square gap-2 w-1/4">
        <button className="rounded-full bg-green-500 border-0"></button>
        <span>{emoji}</span>
        <h3 className="text-pretty text-md text-ellipsis whitespace-nowrap">
          {countryName}
        </h3>
      </div>
    </li>
  );
}

export default CountryItem;
