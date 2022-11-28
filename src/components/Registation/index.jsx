//import { useHistory } from 'react-router-dom';
import React, { useState } from "react";
import PropTypes from "prop-types";
import Input from '@mui/material/Input';
import logo from '../../assets/icons/Main.png';
import map from '../../assets/images/Map.jpg';
import './style.css';
import { MainContext } from '../../context/main-context';



const RegisterPage = (props) => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const myContext = useContext(MainContext);


  return (
    <div className="RegistrationPage" style={{ backgroundImage: `url(${map})` }}>
      <div className="LeftPanel">
        <img src={logo} alt="Logo" style={{ alignSelf: 'center', height: '20%' }} />;
      </div>
      <div className="CenterPanel">
        <div className="RegistrationPageForm">
          <p className="RegistrationCaption">Регистрация</p>
          <form onSubmit={() => props.parentFunc('map')}>
            <div className='Email' style={{ display: 'contents' }}>
              <label htmlFor="Email" className="EmailLable">Email*</label>
              <Input id="Email" name="email" type="Email" className="EmailInput" value={email} onChange={(e) => setEmail(e.target.value)}></Input>
            </div>
            <div className='Name' style={{ display: 'contents' }}>
              <label htmlFor="Name" className="NameLable">Как вас зовут?*</label>
              <Input id="Name" name="name" type="Name" className="NameInput" value={name} onChange={(e) => setName(e.target.value)} />
            </div>
            <div className='Password' style={{ display: 'contents' }}>
              <label htmlFor="Password" className="PasswordLable">Придумайте пароль*</label>
              <Input id="Password" name="password" type="Password" className="PasswordInput" value={password} onChange={(e) => setPassword(e.target.value)} />
            </div>
            <Input type="submit" value="Зарегистрироваться" className="LogIn" />
            <p className="Registration">Уже зарегистрированы? <a href="#Foo" onClick={() => props.parentFunc('login')} style={{ color: '#FDBF5A' }}>Войти</a></p>
          </form>
        </div>
      </div>
    </div>
  );
}
RegisterPage.propTypes = {
  parentFunc: PropTypes.func
}

export default RegisterPage;

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