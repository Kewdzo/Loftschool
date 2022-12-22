import React, { useState, useEffect } from 'react';
import './style.css';
import Header from '../../components/Header';
import Map from '../../components/Map';
import Profile from '../../components/Profile';
//import { useDispatch, useSelector } from 'react-redux';
import { connect } from 'react-redux';
import { routeReady, logIn, logOut, getAddressList, getCard, getToken, getAdresses, getRoute, getCardData } from "../../modules/redux";
import CustomSelect from "../../ui/select"
import { Button, ToggleButtonGroup, ToggleButton } from "@mui/material";
import standart_img from '../../assets/images/standart.png';
import premium_img from '../../assets/images/premium.png';
import bussiness_img from '../../assets/images/bussiness.png';

function Authorized(events) {
    const { cardInfo, logOut, getAddressList, getCard, token, addresses, getRoute, routeReady } = events;
    const [content, setContent] = useState('map');
    const [list, setList] = useState([]);
    const [addressForOne, setAddressOne] = useState(null);
    const [addressForTwo, setAddressTwo] = useState(null);
    const [isHavePayCard, setIsHavePayCard] = useState(false);
    const [newOrder, setNewOrder] = useState(true);
    const [isDisableOrder, setIsDisableOrder] = useState(true);
    const [alignment, setAlignment] = React.useState('');



    useEffect(() => {
        if (!!addressForOne && !!addressForTwo) setIsDisableOrder(false);
    }, [addressForOne, addressForTwo])

    useEffect(() => {
        setList(addresses);
    }, [addresses])

    useEffect(() => {
        if (cardInfo.cardName && cardInfo.cardNumber && cardInfo.expiryDate && cardInfo.cvc) {
            setIsHavePayCard(true);
        }
    }, [cardInfo])

    const pages = {
        profile: <Profile />,
    }
    useEffect(() => {
        //Запрос в базу для получения данных по карте и маршрутам.        
        getAddressList();
    }, [])

    function getRouteFromAPI(isOrder) {
        if (isOrder) {
            const type = alignment;
            getRoute(addressForOne, addressForTwo);
            setNewOrder(false)
        }
        else {
            routeReady([]);
            setAddressOne(null);
            setAddressTwo(null);
            setNewOrder(true);
        }
    }

    const handleChange = (event, newAlignment) => {
        setAlignment(newAlignment);
    };


    useEffect(() => {
        if (token) getCard(token);
    }, [token])

    function clickNavItemFunc(e) {
        if (e.name === 'out') logOut();
        else setContent(e.name);
    }
    return (<>
        <div className="Authorized">
            <Header clickNavItem={clickNavItemFunc} activeContent={content} />
            <div className="Authorized__content">
                <Map />
                {
                    isHavePayCard
                        ? <>
                            {
                                newOrder ? <>
                                    <div className="route-modal-page">
                                        <div className="firstSelect">
                                            <CustomSelect list={list.filter((e) => e !== addressForTwo)} onChange={e => setAddressOne(e)} address={addressForOne} lable={"Точка отправления"} select={"SelectOne"} fullWidth/>
                                        </div>
                                        <div className="secondSelect">
                                            <CustomSelect list={list.filter((e) => e !== addressForOne)} onChange={e => setAddressTwo(e)} address={addressForTwo} lable={"Точка прибытия"} select={"SelectTwo"} fullWidth/>
                                        </div>
                                        <ToggleButtonGroup
                                            className='CarConteiner'
                                            value={alignment}
                                            exclusive
                                            color='warning'
                                            onChange={handleChange}
                                            size="small"
                                        >
                                            <ToggleButton className='CarBlock' value="standart"
                                                sx={{
                                                    bgcolor: 'background.paper',
                                                    boxShadow: 1,
                                                    border: (theme) => `1px solid ${theme.palette.divider} !important`
                                                }}>
                                                <div className='CarBlockInside'>
                                                    <h1>Стандарт</h1>
                                                    <p>Стоимость</p>
                                                    <h2>150 р</h2>
                                                    <img src={standart_img} alt="standart_img" />
                                                </div>
                                            </ToggleButton>
                                            <ToggleButton className='CarBlock' value="premium"
                                            sx={{
                                                bgcolor: 'background.paper',
                                                boxShadow: 1,
                                                border: (theme) => `1px solid ${theme.palette.divider} !important`
                                            }}>
                                                <div className='CarBlockInside'>
                                                    <h1>Премиум</h1>
                                                    <p>Стоимость</p>
                                                    <h2>200 р</h2>
                                                    <img src={premium_img} alt="standart_img" />
                                                </div>
                                            </ToggleButton>
                                            <ToggleButton className='CarBlock' value="bussiness"
                                            sx={{
                                                bgcolor: 'background.paper',
                                                boxShadow: 1,
                                                border: (theme) => `1px solid ${theme.palette.divider} !important`
                                            }}>
                                                <div className='CarBlockInside'>
                                                    <h1>Бизнес</h1>
                                                    <p>Стоимость</p>
                                                    <h2>250 р</h2>
                                                    <img src={bussiness_img} alt="standart_img" />
                                                </div>
                                            </ToggleButton>
                                        </ToggleButtonGroup>
                                        <div className="buttonContainer">
                                            <Button disabled={isDisableOrder} sx={{
                                                "&.Mui-disabled": {
                                                    background: "#c0c0c0 !important",
                                                    color: "#000000 !important"
                                                }
                                            }} id="routeButton" variant="contained" onClick={() => getRouteFromAPI(true)}>Заказать</Button>
                                        </div>

                                    </div>
                                </>
                                    : <>
                                        <div className="route-modal-page">
                                            <h1>Заказ размещен</h1>
                                            <p>Ваше такси уже едет к вам. Прибудет приблизительно через 10 минут.</p>
                                            <div className="buttonContainer">
                                                <Button id="routeButton" variant="contained" onClick={() => getRouteFromAPI(false)}>Сделать новый заказ</Button>
                                            </div>
                                        </div>
                                    </>
                            }
                        </>
                        : <></>
                }
                {
                    pages[content] && (
                        <div className="widow-modal" onClick={() => setContent('map')}>
                            <div className="widow-modal__content" onClick={(e) => e.stopPropagation()}>
                                {pages[content]}
                            </div>
                        </div>
                    )
                }
            </div>
        </div>
    </>);
}

export default connect(
    (state) => ({ token: getToken(state), addresses: getAdresses(state), cardInfo: getCardData(state) }),
    { logIn, logOut, getAddressList, getCard, getRoute, routeReady }
)(Authorized);