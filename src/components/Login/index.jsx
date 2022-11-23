//import { useHistory } from 'react-router-dom';
import './style.css'
import React, { useState, useContext } from "react";
import { MainContext } from '../../context/main-context';

const LoginPage = (props) => { 
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const myContext = useContext(MainContext);  

    return ( 
        <div className="LoginPage">
        <header className="LoginPage-header">
        <div className="LoginPageForm">
              <p className="LoginCaption">Войти</p>  
              <form onSubmit={() => myContext.login(email,password)}>
              <div className='Email'>
                <label htmlFor="Email" className="EmailLable">Email:</label>
                <input id="Email" name="email" type="Email" className="EmailInput" value={email} onChange={(e) => setEmail(e.target.value)}/>
              </div>
              <div className='Password'>
                <label htmlFor="Password" className="PasswordLable">Пароль:</label>
                <input id="Password" name="password" type="Password" className="PasswordInput" value={password} onChange={(e) => setPassword(e.target.value)}/>
              </div>             
              <input type="submit" value="Войти" className="LogIn"/>
              <p className="Registration">Новый пользователь? <a href="#Foo" onClick={() => props.parentFunc('register')}>Регистрация</a></p>              
            </form>     
        </div>
        </header>
    </div> 
  );
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