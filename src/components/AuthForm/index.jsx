import React, { useState } from 'react';
import SignIn from './SignIn.jsx';
import SignUp from './SignUp.jsx';
import './styles.css';
import { useHistory } from 'react-router-dom';


const AuthForm = (events) => {
  const { formSend } = events;

  let isOld = true;
  const history = useHistory();
  if (history.location.pathname !== '/login') isOld = false;
  const [isSignIn, setSignIn] = useState(isOld);   

  return (<>
      {
        isSignIn
          ? <SignIn changeSing={() => setSignIn(prev => !prev)} formSend={formSend}/>
          : <SignUp changeSing={() => setSignIn(prev => !prev)} formSend={formSend}/>
      }
  </>);
}

export default AuthForm;