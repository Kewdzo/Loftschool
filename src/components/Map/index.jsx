//import { useHistory } from 'react-router-dom';
import mapboxgl from "mapbox-gl"
import React, { useRef, useEffect } from 'react';
import './style.css';

/*Функциональный компонент*/
function Map(events) {
  const mapContainer = useRef(null);
  const map = useRef(null);
  
  useEffect(() => {
    if (map.current) return; // initialize map only once
    mapboxgl.accessToken =
      "pk.eyJ1Ijoia2V3ZHpvIiwiYSI6ImNsYXdhbW1oMDBhd3EzcHFtNWttcXZnOWMifQ.MBcONxQZFcpmXIEYZBZDhg";
    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: 'mapbox://styles/mapbox/streets-v12',
      center: [60.6122, 56.8518],
      zoom: 12
    });
  })


  return (<>
    <div className="Map">
      <div className="map-container" ref={mapContainer}></div>
    </div>
  </>);
}

export default Map;
