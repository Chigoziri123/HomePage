import React, { useState, useRef} from 'react'
import SideMenu from '../shared/SideNavBar'
import SearchBar from '../shared/SearchBar.jsx'
import SpecializationCategory from '../shared/SpecializationCategory'
import TopDoctors from '../shared/TopDoctors'
import { MapContainer, TileLayer } from 'react-leaflet'

const BasicMap = () => {

  const [center, setCenter] = useState({ lat:13.084622, lng: 80.248357 });
  const ZOOM_LEVEL = 12;
  const mapRef = useRef();

  return (
    <div className='flex'>
      {/* <SideMenu /> */}
      {/* <div className='grid grid-cols-1 md:grid-cols-2 px-6 md:px-10 w-full mt-10 gap-8'> */}
        {/* Business List */}
        <div>
          <SearchBar />
          <SpecializationCategory/>
          <TopDoctors />
        </div>
        {/* Google Map */}
        <div className='container h-500 w-full'>
          <MapContainer center={center} zoom={ZOOM_LEVEL} ref={mapRef} 
          >
            <TileLayer url='https://api.maptiler.com/maps/basic/256/{z}/{x}/{y}.png?key=z4XWlBColhWKDJ7DjaFn' 
            attribution='<a href="https://www.maptiler.com/copyright/" target="_blank">&copy; MapTiler</a> <a href="https://www.openstreetmap.org/copyright" target="_blank">&copy; OpenStreetMap contributors</a>' />
          </MapContainer>
      </div>
      {/* </div> */}
    </div>
  )
}

export default BasicMap