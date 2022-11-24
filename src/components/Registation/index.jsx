//import { useHistory } from 'react-router-dom';
import React, { useState } from "react";
import PropTypes from "prop-types";
import Input from '@mui/material/Input';



const RegisterPage = (props) => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
   
    return ( 
        <div className="RegisterPage">
        <header className="RegisterPage-header">
        <div className="RegisterPageForm">
            <p className="RegistrationCaption">Регистрация</p>  
            <form onSubmit={() => props.parentFunc('map')}>
              <div className='Email'>
                <label htmlFor="Email" className="EmailLable">Email*</label>
                <input id="Email" name="email" type="Email" className="EmailInput" value={email} onChange={(e) => setEmail(e.target.value)}/>
                <Input id="Email" name="email" type="Email" className="EmailInput" value={email} onChange={(e) => setEmail(e.target.value)}></Input>
              </div>
              <div className='Name'>
                <label htmlFor="Name" className="NameLable">Как вас зовут?*</label>
                <input id="Name" name="name" type="Name" className="NameInput" value={name} onChange={(e) => setName(e.target.value)}/>
              </div>
              <div className='Password'>
                <label htmlFor="Password" className="PasswordLable">Придумайте пароль*</label>
                <input id="Password" name="password" type="Password" className="PasswordInput" value={password} onChange={(e) => setPassword(e.target.value)}/>
              </div>
              <p className="Lost">Забыли пароль?</p>
              <input type="submit" value="Зарегистрироваться" className="LogIn"/>
              <p className="Registration">Уже зарегистрированы? <a href="#Foo" onClick={() => props.parentFunc('login')}>Войти</a></p>
            </form> 
        </div>
        </header>
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