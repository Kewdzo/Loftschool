//import { useHistory } from 'react-router-dom';

const ProfilePage = (props) => {
    
    return ( 
        <div className="ProfilePage">
        <header className="ProfilePage-header">
        <div className="ProfilePageForm">
            <p>ProfilePage</p>
            <button onClick={() => props.parentFunc('login')}>Login</button>
              <button onClick={() => props.parentFunc('map')}>Map</button>
              <button onClick={() => props.parentFunc('register')}>Register</button>
              <button onClick={() => props.parentFunc('profile')}>Profile</button>
        </div>
        </header>
    </div> 
  );
}
 
export default ProfilePage;


// const history = useHistory();
//     const handleClick = (e, name) => {
//         switch (name) {
//             case "Login":
//               return  history.push('/login');
//             case "Map":
//               return history.push('/map');
//             case "Register":
//               return history.push('/register');
//             case "Profile":
//               return history.push('/profile');
//             default:
//               return console.log(e);
//           }
//     }