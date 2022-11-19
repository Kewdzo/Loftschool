//import { useHistory } from 'react-router-dom';
import './login.css'

const LoginPage = (props) => { 
    //TODO: Необходимо будет перейти от вложенности инпутов к взаимосвязям с lable-input через Id
    //TODO: Пересмотреть реализацию с сохранением логина/пароля как в Registration
    return ( 
        <div className="LoginPage">
        <header className="LoginPage-header">
        <div className="LoginPageForm">
              <p className="LoginCaption">Войти</p>  
              <form onSubmit={() => props.parentFunc('map')}>
              <div className='Email'>
                <label> Email:
                  <input
                    type="text"
                    name="email"
                    value={props.state.email}
                    onChange={(e) => props.formFunc(e)}
                  />
                </label>
              </div>
              <div className='Password'>
                <label> Пароль:
                  <input
                    type="text"
                    name="password"
                    value={props.state.password}
                    onChange={(e) => props.formFunc(e)}
                  />
                </label>
                <p className="Lost">Забыли пароль?</p>
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