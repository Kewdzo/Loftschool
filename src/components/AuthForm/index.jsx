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
  

  function send(e) {
    e.preventDefault();
    let send_obj = { sendType: isSignIn ? 'SignIn' : 'SignUp', };
    e.target.querySelectorAll('input').forEach(el => send_obj[el.name] = el.value);

    (typeof formSend === 'function') && formSend(send_obj);
  }

  return (<>
    <form className="AuthForm" onSubmit={send}>
      {
        isSignIn
          ? <SignIn changeSing={() => setSignIn(prev => !prev)} />
          : <SignUp changeSing={() => setSignIn(prev => !prev)} />
      }
    </form>
  </>);
}

export default AuthForm;