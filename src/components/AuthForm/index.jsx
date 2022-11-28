import React, { useState } from 'react';
import SignIn from './SignIn.jsx';
import SignUp from './SignUp.jsx';
import './styles.css';

const AuthForm = (events) => {
  const { formSend } = events;
  const [isSignIn, setSignIn] = useState(true);

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