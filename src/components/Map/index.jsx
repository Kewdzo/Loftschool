//import { useHistory } from 'react-router-dom';
import mapboxgl from "mapbox-gl"
import React, { useRef, useEffect } from 'react';
import './style.css';
import { getRouteData } from "../../modules/redux";
import { connect } from 'react-redux';

/*Функциональный компонент*/
function Map(events) {
  const { route } = events;

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

  function createRoute() {
    const coordinates = route;
    map.current.flyTo({
      center: coordinates[0],
      zoom: 15
    });

    if (map.current.getLayer("route")) {
      map.current.getSource('route').setData({ type: "LineString", coordinates });
    }
    else {
      map.current.addLayer({
        id: "route",
        type: "line",
        source: {
          id: "routeSource",
          type: "geojson",
          data: {
            type: "Feature",
            properties: {},
            geometry: {
              type: "LineString",
              coordinates
            }
          }
        },
        layout: {
          "line-join": "round",
          "line-cap": "round"
        },
        paint: {
          "line-color": "#ffc617",
          "line-width": 8
        }
      });
    }

  }



  useEffect(() => {
    if (route.length > 0) createRoute();
  }, [route])


  return (<>
    <div className="Map">
      <div className="map-container" ref={mapContainer}></div>
    </div>
  </>);
}

export default connect(
  (state) => ({ route: getRouteData(state) }),
)(Map);