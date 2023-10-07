import React, { useState, useRef} from 'react'
import SideMenu from '../shared/SideNavBar'
import SearchBar from '../shared/SearchBar.jsx'
import SpecializationCategory from '../shared/SpecializationCategory'
import TopDoctors from '../shared/TopDoctors'

import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'
import { Icon, divIcon, point} from 'leaflet'
import MarkerClusterGroup from 'react-leaflet-cluster'



const BasicMap = () => {

  const [center, setCenter] = useState({ lat:6.465422, lng: 3.406448 });
  const ZOOM_LEVEL = 13;
  const mapRef = useRef();

  const markers = [
    {
      geocode: [6.5389, 3.5541],
      popUp:require('../assets/doctor2.jpg'),
    },

    {
      geocode: [6.6781, 3.5155],
      popUp:require('../assets/doctor3.jpg'),
    },

    {
      geocode: [6.6138, 3.3580],
      popUp:require('../assets/doctor4.jpg'),
    },

  ]

  const customIcon = new Icon ({
    iconUrl: require('../assets/mapmarker.png'),
    iconSize: [38, 38]
  })

  const createCustomClusterIcon = (cluster) => {
    return new divIcon ({
      html: `<div className='cluster-icon'>${cluster.getChildCount()}</div>`,
      className: 'custom-marker-cluster',
      iconSize: point(33, 33, true)
    });
  };

  return (
    <div className='flex'>
      {/* <SideMenu /> */}
      <div className='grid grid-cols-1 md:grid-cols-2 px-6 md:px-10 w-full mt-10 gap-8'>
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
            <TileLayer url='https://tile.openstreetmap.org/{z}/{x}/{y}.png' 
            attribution='<a href="https://www.maptiler.com/copyright/" target="_blank">&copy; MapTiler</a> <a href="https://www.openstreetmap.org/copyright" target="_blank">&copy; OpenStreetMap contributors</a>' />

            {/* Wrapping map markers in a cluster of numbers */}
            <MarkerClusterGroup 
            chunkedLoading
            iconCreateFunction={createCustomClusterIcon}>
              {markers.map(marker => (
                <Marker position={marker.geocode} icon={customIcon}>
                  <Popup>
                    {marker.popUp}
                  </Popup>
                </Marker>
              ))}
            </MarkerClusterGroup>

          </MapContainer>
      </div>
      </div>
    </div>
  )
}

export default BasicMap