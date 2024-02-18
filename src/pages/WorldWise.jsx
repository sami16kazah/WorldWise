import Map from '../components/Map';
import SideBar from '../components/SideBar';

function WorldWise() {
  return (
    <div className="flex flex-row overflow-hidden w-full h-screen">
      <SideBar></SideBar>
      <Map></Map>
    </div>
  );
}

export default WorldWise;
