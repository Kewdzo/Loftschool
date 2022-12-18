import './style.css'
import React from "react";
import Input from '@mui/material/Input';
import { connect } from 'react-redux';
import { postCard, getToken, getCardData } from "../../modules/redux";
import card_icon_img from '../../assets/icons/CardIcon.png';
import card_mastercard_img from '../../assets/icons/CardMasterCard.png';
import card_cgip_img from '../../assets/icons/CardChip.svg';
import { useForm } from "react-hook-form";

function Profile(events) {
  const { cardData, token, postCard } = events;
  const { register, handleSubmit, formState: { errors }, setValue } = useForm();

  // {cardNumber: "0000 0000 0000 0000", expiryDate: "", cardName: "", cvc: "", token: AUTH_TOKEN}
  function send(send_obj) {
    postCard(send_obj.cardNumber.split(' ').join(''), send_obj.expiryDate, send_obj.cardName, send_obj.cvc, token);
  }

  const intialValues = {
    name: cardData.cardName,
    card: cardData.cardNumber ? cardData.cardNumber.replace(/(\d{1,4}(?=(?:\d\d\d\d)+(?!\d)))/g, "$1" + ' ') : "",
    date: cardData.expiryDate,
    cvc: cardData.cvc
  };

  console.log(errors)

  return (<>
    <div className="Profile">
      <form onSubmit={handleSubmit(send)}>
        <h2 className="title">Профиль</h2>
        <p className="text">Введите платежные данные</p>
        <div className="PayData">
          <div className="InputsGroup">
            <div className='Inputs'>
              <label htmlFor="Name" className="NameLable">Имя владельца</label>
              <Input id="Name"
                type="Name"
                defaultValue={intialValues.name}
                {...register('cardName', {
                  validate: {
                    hasValue: (value) => value.length > 3
                  }
                })}
              />
              {errors.cardName && errors.cardName.type === "hasValue" && <p>Необходимо указать ФИО</p>}

            </div>
            <div className='Inputs'>
              <label htmlFor="Card" className="NameLable">Номер карты</label>
              <Input id="Card"
                defaultValue={intialValues.card}

                {...register('cardNumber', {
                  //TODO: скорее всего из-за onChange не работает нормально валидация
                  onChange: (e) => setValue('cardNumber', e.target.value.replace(/\D/g, "").substr(0, 16).replace(/(\d{1,4}(?=(?:\d\d\d\d)+(?!\d)))/g, "$1" + ' ')),
                  validate: {
                    length: (value) => value.length === 19
                  }
                })}
              />
              {errors.cardNumber && errors.cardNumber.type === "length" && <p>Номер карты из 16 цифр</p>}
            </div>
            <div className="SecretCard">
              <div className='Inputs'>
                <label htmlFor="Date" className="NameLable">MM/YY</label>
                <Input id="Date"
                  type="Text"
                  defaultValue={intialValues.date}
                  {...register('expiryDate', {
                    validate: {
                      month: (value) => value.split('/')[0] < 13 && value.split('/')[0].length === 2,
                      year: (value) => value.split('/')[1] ? value.split('/')[1].length === 2 : false,
                    }
                  })}
                />
                {errors.expiryDate && errors.expiryDate.type === "month" && <p>Неверный формат месяца</p>}
                {errors.expiryDate && errors.expiryDate.type === "year" && <p>Неверный формат года</p>}
              </div>
              <div className='Inputs'>
                <label htmlFor="CVC" className="NameLable">CVC</label>
                <Input id="CVC"
                  type="Text"
                  defaultValue={intialValues.cvc}
                  {...register('cvc', {
                    onChange: (e) => setValue('cvc', e.target.value.replace(/\D/g, "").substr(0, 3)),
                    validate: {
                      length: (value) => value.length === 3
                    }
                  })}
                />
                {errors.cvc && errors.cvc.type === "length" && <p>Код из 3 цифр</p>}
              </div>
            </div>
          </div>
          <div className="Preview">
            <div className="first">
              <img src={card_icon_img} alt="CardIcon" />
              <p>{intialValues.date}</p>
            </div>
            <div className="second">
              <h1>{intialValues.card.replace(/(\d{1,4}(?=(?:\d\d\d\d)+(?!\d)))/g, "$1" + ' ')}</h1>
            </div>
            <div className="third">
              <img src={card_cgip_img} alt="CardChip" />
              <img src={card_mastercard_img} alt="CardMasterCard" />
            </div>
          </div>
        </div>
        <div className='SubmitContainer'>
          <button type="submit" className="btn">Сохранить</button>
        </div>
      </form>
    </div >
  </>);
}

export default connect(
  (state) => ({ token: getToken(state), cardData: getCardData(state) }),
  { postCard }
)(Profile);
