import { useHistory } from 'react-router-dom';

const RegisterPage = () => {
    const history = useHistory();
    const handleClick = (e, name) => {
        switch (name) {
            case "Login":
              return  history.push('/login');
            case "Map":
              return history.push('/map');
            case "Register":
              return history.push('/register');
            case "Profile":
              return history.push('/profile');
            default:
              return console.log(e);
          }
    }
    return ( 
        <div className="RegisterPage">
        <header className="RegisterPage-header">
        <div className="RegisterPageForm">
            <p>RegisterPage</p>
            <button onClick={e => handleClick(e,'Login')}>Login</button>
              <button onClick={e => handleClick(e,'Map')}>Map</button>
              <button onClick={e => handleClick(e,'Register')}>Register</button>
              <button onClick={e => handleClick(e,'Profile')}>Profile</button>
        </div>
        </header>
    </div> 
  );
}
 
export default RegisterPage;