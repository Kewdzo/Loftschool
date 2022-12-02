import React from 'react';
import AuthForm from '../../components/AuthForm';
import logo from '../../assets/icons/Main.png';
import map from '../../assets/images/Map.jpg';
import './style.css';
import { connect } from 'react-redux';
import { logIn, authenticate } from "../../modules/redux";


function Unauthorized(events) {

    const { logIn } = events;

    const send = (e) => {
        //logIn(e.email, e.password).catch(err => { alert('не правильный логин или пароль') });
        logIn();
        console.log(e);
    }

    return (<>
        <div className="Unauthorized" style={{ backgroundImage: `url(${map})` }}>
            <div className="Unauthorized__block" data-name='logo'>
                <img src={logo} alt="Logo" style={{ height: '20%' }} />;
            </div>
            <div className="Unauthorized__block" data-name='form'>
                <AuthForm formSend={send} />
            </div>

        </div>
    </>);
}

export default connect(
    (state) => ({ isLoggedIn: state.serverAPI.isLoggedIn }),
    { logIn, authenticate }
)(Unauthorized);
