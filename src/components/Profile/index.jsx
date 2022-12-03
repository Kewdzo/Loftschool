import './style.css'
import React, { useState, useEffect } from "react";
import Input from '@mui/material/Input';
import { connect } from 'react-redux';
import { postCard, getToken, getCardData } from "../../modules/redux";


function Profile(events) {
  const { cardData, token, postCard } = events;

  const [name, setName] = useState('');
  const [card, setCard] = useState('');
  const [date, setDate] = useState('');
  const [cvc, setCVC] = useState('');

  useEffect(() => {
    setName(cardData.cardName);
    setCard(cardData.cardNumber);
    setDate(cardData.expiryDate);
    setCVC(cardData.cvc);
  }, [cardData])


  // {cardNumber: "0000 0000 0000 0000", expiryDate: "", cardName: "", cvc: "", token: AUTH_TOKEN}
  function send(e) {
    e.preventDefault();
    let send_obj = { token: token };
    e.target.querySelectorAll('input').forEach(el => send_obj[el.name] = el.value);
    postCard(send_obj.cardNumber, send_obj.expiryDate, send_obj.cardName, send_obj.cvc, send_obj.token);
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
              <Input id="Name" name="cardName" type="Name" value={name} onChange={(e) => setName(e.target.value)} />
            </div>
            <div className='Inputs'>
              <label htmlFor="Card" className="NameLable">Номер карты</label>
              <Input id="Card" name="cardNumber" type="Card" value={card} onChange={(e) => setCard(e.target.value)} />
            </div>
            <div className="SecretCard">
              <div className='Inputs'>
                <label htmlFor="Date" className="NameLable">MM/YY</label>
                <Input id="Date" name="expiryDate" type="Text" value={date} onChange={(e) => setDate(e.target.value)} />
              </div>
              <div className='Inputs'>
                <label htmlFor="CVC" className="NameLable">CVC</label>
                <Input id="CVC" name="cvc" type="Text" value={cvc} onChange={(e) => setCVC(e.target.value)} />
              </div>
            </div>
          </div>
          <div className="Preview">
            <p>{date}</p>
            <h1>{card}</h1>
          </div>
        </div>
        <button type="submit" className="btn">Сохранить</button>
      </form>
    </div >
  </>);
}

export default connect(
  (state) => ({ token: getToken(state), cardData: getCardData(state) }),
  { postCard }
)(Profile);
