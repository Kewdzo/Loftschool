import './styles.css'
import React from "react";
import Input from '@mui/material/Input';
import { useForm } from "react-hook-form";

const SignIn = (events) => {
    const { changeSing, formSend } = events;
    const { register, handleSubmit, formState: { errors } } = useForm();


    function send(e) {
        let send_obj = { sendType: 'SignIn', email: e.email, password: e.Password };
        (typeof formSend === 'function') && formSend(send_obj);
    }

    return (<>
        <form className="AuthForm" onSubmit={handleSubmit(send)}>
            <div className="AuthForm__container">
                <h2 className="title">Войти</h2>
                <div className='Email' style={{ display: 'contents' }} >
                    <label htmlFor="Email" className="EmailLable">Email</label>
                    <Input id="Email"
                        type="Email"
                        {...register('email')}
                    />
                </div>
                <div className='Password' style={{ display: 'contents' }} >
                    <label htmlFor="Password" className="PasswordLable">Пароль</label>
                    <Input id="Password"
                        type="password"
                        {...register('Password')}
                    />
                    <p className="text" data-link='forgot-pass'>Забыли пароль?</p>
                </div>
                <button type="submit" className="btn">Войти</button>
                <p className='text'>Новый пользователь? <a href="/registration" onClick={changeSing} style={{ color: '#FDBF5A' }}>Регистрация</a></p>
            </div>
        </form>

    </>
    )
}


export default SignIn;