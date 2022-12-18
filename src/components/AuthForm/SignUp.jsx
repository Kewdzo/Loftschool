import React from "react";
import Input from '@mui/material/Input';
import './styles.css';
import { useForm } from "react-hook-form";

const SignUp = (events) => {
    const { changeSing, formSend } = events;
    const { register, handleSubmit, formState: { errors } } = useForm();


    function send(e) {
        let send_obj = { sendType: 'SignUp', email: e.email, password: e.password, name: e.name };
        (typeof formSend === 'function') && formSend(send_obj);
    }

    return (
        <>
            <form className="AuthForm" onSubmit={handleSubmit(send)}>
                <div className="AuthForm__container">
                    <h2 className="title">Регистрация</h2>
                    <div className='Email' style={{ display: 'contents' }}>
                        <label htmlFor="Email" className="EmailLable">Email*</label>
                        <Input id="Email" className="EmailInput"
                            type="Email"
                            {...register('email')}
                        />
                    </div>
                    <div className='Name' style={{ display: 'contents' }}>
                        <label htmlFor="Name" className="NameLable">Как вас зовут?*</label>
                        <Input id="Name" className="NameInput"
                            type="Name"
                            {...register('name')}
                        />
                    </div>
                    <div className='Password' style={{ display: 'contents' }}>
                        <label htmlFor="Password" className="PasswordLable">Придумайте пароль*</label>
                        <Input id="Password" className="PasswordInput"
                            type="Password"
                            {...register('password')}
                        />
                    </div>
                    <button type="submit" className="btn">Зарегистрироваться</button>
                    <p className="Registration">Уже зарегистрированы? <a href="/login" onClick={changeSing} style={{ color: '#FDBF5A' }}>Войти</a></p>
                </div>
            </form>

        </>
    );
}

export default SignUp;