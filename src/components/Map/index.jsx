//import { useHistory } from 'react-router-dom';
import PropTypes from "prop-types";

const MapPage = (props) => {   
    return ( 
        <div className="MapPage">
        <header className="MapPage-header">
        <div className="MapPageForm">
              <p>MAP</p>
              <button onClick={() => props.parentFunc('login')}>Login</button>
              <button onClick={() => props.parentFunc('map')}>Map</button>
              <button onClick={() => props.parentFunc('register')}>Register</button>
              <button onClick={() => props.parentFunc('profile')}>Profile</button>
        </div>
        </header>
    </div> 
  );
}
MapPage.propTypes = {
  parentFunc: PropTypes.func
}

export default MapPage;

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