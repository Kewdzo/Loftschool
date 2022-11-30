import './style.css'
import React, { useState } from "react";
import Input from '@mui/material/Input';

function Profile(events) {
  const [name, setName] = useState("");
  const [card, setCard] = useState("");
  const [date, setDate] = useState("");
  const [cvc, setCVC] = useState("");
  function send(e) {
    e.preventDefault();
    let send_obj = { sendType: 'RegProfile' };
    e.target.querySelectorAll('input').forEach(el => send_obj[el.name] = el.value);
    console.log(send_obj);
  }
  return (<>
    <div className="Profile">
      <form onSubmit={send}>
        <h2 className="title">Профиль</h2>
        <p className="text">Введите платежные данные</p>
        <div className="PayData">
          <div className="InputsGroup">
            <div className='Inputs'>
              <label htmlFor="Name" className="NameLable">Имя владельца</label>
              <Input id="Name" name="Name" type="Name" value={name} onChange={(e) => setName(e.target.value)} />
            </div>
            <div className='Inputs'>
              <label htmlFor="Card" className="NameLable">Номер карты</label>
              <Input id="Card" name="Card" type="Card" value={card} onChange={(e) => setCard(e.target.value)} />
            </div>
            <div className="SecretCard">
              <div className='Inputs'>
                <label htmlFor="Date" className="NameLable">MM/YY</label>
                <Input id="Date" name="Date" type="Text" value={date} onChange={(e) => setDate(e.target.value)} />
              </div>
              <div className='Inputs'>
                <label htmlFor="CVC" className="NameLable">CVC</label>
                <Input id="CVC" name="CVC" type="Text" value={cvc} onChange={(e) => setCVC(e.target.value)} />
              </div>
            </div>
          </div>
          <div className="Preview">
            <p>{date}</p>
            <h1>{card}</h1>
          </div>
        </div>
        <button type="submit" className="btn">Войти</button>
      </form>
    </div >
  </>);
}

export default Profile;
