import './styles.css'
import React from "react";
import Input from '@mui/material/Input';

const SignIn = (events) => {
    const { changeSing } = events;


    return (<>
        <div className="AuthForm__container">
            <h2 className="title">Войти</h2>
            <div className='Email' style={{ display: 'contents' }} >
                <label htmlFor="Email" className="EmailLable">Email</label>
                <Input id="Email" name="email" type="Email" />
            </div>
            <div className='Password' style={{ display: 'contents' }} >
                <label htmlFor="Password" className="PasswordLable">Пароль</label>
                <Input id="Password" name="password" type="Password" />
                <p className="text" data-link='forgot-pass'>Забыли пароль?</p>
            </div>
            <button type="submit" className="btn">Войти</button>
            <p className='text'>Новый пользователь? <a href="/registration" onClick={changeSing} style={{ color: '#FDBF5A' }}>Регистрация</a></p>
        </div>
    </>
    )
}


export default SignIn;