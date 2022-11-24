//import { useHistory } from 'react-router-dom';
import './style.css'
import React, { useState, useContext } from "react";
import { MainContext } from '../../context/main-context';
import PropTypes from "prop-types";
import logo from '../../assets/icons/Main.png';
import map from '../../assets/images/Map.jpg';
//import { Logo,MCIcon } from "loft-taxi-mui-theme";
import Input from '@mui/material/Input';



const LoginPage = (props) => { 
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const myContext = useContext(MainContext);  

  return ( 
      <div className="LoginPage" style={{ backgroundImage: `url(${map})` }}>
        <div className="LeftPanel">
          <img src={logo} alt="Logo" style={{ alignSelf: 'center', height:'20%'}} />;
        </div>
        <div className="CenterPanel">
        <div className="LoginPageForm">
          <p className="LoginCaption">Войти</p>  
          <form onSubmit={() => myContext.login(email,password)}>
            <div className='Email' style={{ display: 'contents'}} >              
              <label htmlFor="Email" className="EmailLable">Email</label>
              <Input id="Email" name="email" type="Email" value={email} onChange={(e) => setEmail(e.target.value)}/>
            </div>
            <div className='Password' style={{ display: 'contents'}} >
              <label htmlFor="Password" className="PasswordLable">Пароль</label>
              <Input id="Password" name="password" type="Password" value={password} onChange={(e) => setPassword(e.target.value)}/>
              <p className="Lost">Забыли пароль?</p>              
            </div>             
            <Input type="submit" value="Войти" className="LogIn"/>
            <p className="Registration">Новый пользователь? <a href="#Foo" onClick={() => props.parentFunc('register')} style={{ color: '#FDBF5A'}}>Регистрация</a></p>              
        </form>     
        </div>
        </div>
        
    </div>
  );
}

LoginPage.propTypes = {
  parentFunc: PropTypes.func
}
 
export default LoginPage;

//Для будущего роутинга
// const history = useHistory();
// const handleClick = (e, name) => {
//   switch (name) {
//       case "Login":
//         return  history.push('/login');
//       case "Map":
//         return history.push('/map');
//       case "Register":
//         return history.push('/register');
//       case "Profile":
//         return history.push('/profile');
//       default:
//         return console.log(e);
//     }  
// }
// <button onClick={e => handleClick(e,'profile')}>Profile</button>