//import { useHistory } from 'react-router-dom';
import PropTypes from "prop-types";
import mapboxgl from "mapbox-gl"
import React, { useRef, useEffect } from 'react';
import './style.css';
import logo from '../../assets/icons/HeaderLogo.png';

/*Функциональный компонент*/
const MapPage = (props) => {
  const mapContainer = useRef(null);
  const map = useRef(null);

  useEffect(() => {
    if (map.current) return; // initialize map only once
    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: 'mapbox://styles/mapbox/streets-v12',
      center: [60.6122, 56.8518],  
      zoom: 12
    });
  });

  mapboxgl.accessToken =
    "pk.eyJ1Ijoia2V3ZHpvIiwiYSI6ImNsYXdhbW1oMDBhd3EzcHFtNWttcXZnOWMifQ.MBcONxQZFcpmXIEYZBZDhg";

  return (
    <div className="MapPage">
      <header className="MapPage-header">
        <div className="ImageHeader">
          <img src={logo} alt="Logo" style={{ alignSelf: 'center', width: '25%', }} />
        </div>
        <div className="ButtonHeaderGroup" style={{ display: 'flex', justifyContent: 'flex-end', flexBasis: '60%' }}>
          <button className="ButtonHeader" onClick={() => props.parentFunc('map')}>Карта</button>
          <button className="ButtonHeader" onClick={() => props.parentFunc('profile')}>Профиль</button>
          <button className="ButtonHeader" onClick={() => props.parentFunc('login')}>Выйти</button>
        </div>
      </header>
      <div>
        <div className="map-container" ref={mapContainer} />
      </div>

    </div>
  );
}
MapPage.propTypes = {
  parentFunc: PropTypes.func
}

export default MapPage;

/*export default class MapPage extends React.Component {
  map = null;
  mapContainer = React.createRef();

  componentDidMount() {
    mapboxgl.accessToken =
      "pk.eyJ1Ijoia2V3ZHpvIiwiYSI6ImNsYXdhbW1oMDBhd3EzcHFtNWttcXZnOWMifQ.MBcONxQZFcpmXIEYZBZDhg";
    this.map = new mapboxgl.Map({
      container: this.mapContainer.current,
      style: "mapbox://styles/mapbox/streets-v9",
      center: [30.3056504, 59.9429126], // LED
      zoom: 10,
    });
  }

  componentWillUnmount() {
    this.map.remove();
  }

  render() {
    return (
        <div className="map-wrapper">
          <div data-testid="map" className="map" ref={this.mapContainer} />
        </div>
    );
  }
}*/


// const history = useHistory();
// const handleClick = (e, name) => {
//     switch (name) {
//         case "Login":
//           return  history.push('/login');
//         case "Map":
//           return history.push('/map');
//         case "Register":
//           return history.push('/register');
//         case "Profile":
//           return history.push('/profile');
//         default:
//           return console.log(e);
//       }
// }
