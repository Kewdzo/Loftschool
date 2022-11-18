//import { useHistory } from 'react-router-dom';

const RegisterPage = (props) => {
   
    return ( 
        <div className="RegisterPage">
        <header className="RegisterPage-header">
        <div className="RegisterPageForm">
            <p className="RegistrationCaption">Регистрация</p>  
            <form onSubmit={() => props.parentFunc('map')}>
              <div className='Email'>
                <label htmlFor="Email" className="EmailLable">Email*</label>
                <input id="Email" name="email" type="Email" className="EmailInput" value={props.state.email} onChange={(e) => props.formFunc(e)}/>
              </div>
              <div className='Name'>
                <label htmlFor="Name" className="NameLable">Как вас зовут?*</label>
                <input id="Name" name="name" type="Name" className="NameInput" value={props.state.name} onChange={(e) => props.formFunc(e)}/>
              </div>
              <div className='Password'>
                <label htmlFor="Password" className="PasswordLable">Придумайте пароль*</label>
                <input id="Password" name="password" type="Password" className="PasswordInput" value={props.state.password} onChange={(e) => props.formFunc(e)}/>
              </div>
              <p className="Lost">Забыли пароль?</p>
              <input type="submit" value="Зарегистрироваться" className="LogIn"/>
              <p className="Registration">Уже зарегистрированы? Войти</p>
            </form> 
        </div>
        </header>
    </div> 
  );
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