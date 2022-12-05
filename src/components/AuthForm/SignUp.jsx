import React from "react";
import Input from '@mui/material/Input';
import './styles.css';

const SignUp = (events) => {
    const { changeSing } = events;

    return (
        <>
            <div className="AuthForm__container">
                <h2 className="title">Регистрация</h2>
                <div className='Email' style={{ display: 'contents' }}>
                    <label htmlFor="Email" className="EmailLable">Email*</label>
                    <Input id="Email" name="email" type="Email" className="EmailInput"></Input>
                </div>
                <div className='Name' style={{ display: 'contents' }}>
                    <label htmlFor="Name" className="NameLable">Как вас зовут?*</label>
                    <Input id="Name" name="name" type="Name" className="NameInput" />
                </div>
                <div className='Password' style={{ display: 'contents' }}>
                    <label htmlFor="Password" className="PasswordLable">Придумайте пароль*</label>
                    <Input id="Password" name="password" type="Password" className="PasswordInput" />
                </div>
                <button type="submit" className="btn">Зарегистрироваться</button>
                <p className="Registration">Уже зарегистрированы? <a href="/login" onClick={changeSing} style={{ color: '#FDBF5A' }}>Войти</a></p>
            </div>
        </>
    );
}

export default SignUp;