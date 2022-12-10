import React, { useState, useEffect } from 'react';
import './style.css';
import Header from '../../components/Header';
import Map from '../../components/Map';
import Profile from '../../components/Profile';
//import { useDispatch, useSelector } from 'react-redux';
import { connect } from 'react-redux';
import { logIn, logOut, getAddressList, getCard, getToken, getAdresses,getRoute,getCardData } from "../../modules/redux";
import CustomSelect from "../../ui/select"
import { Button } from "@mui/material";


function Authorized(events) {
    const { cardInfo, logOut, getAddressList, getCard, token, addresses, getRoute } = events;
    const [content, setContent] = useState('map');
    const [list, setList] = useState([]);
    const [addressForOne, setAddressOne] = useState(null);
    const [addressForTwo, setAddressTwo] = useState(null);
    const [isHavePayCard, setIsHavePayCard] = useState(false);

    useEffect(() => {
        setList(addresses);
    }, [addresses])

    useEffect(() => {
        if (cardInfo.cardName) setIsHavePayCard(true);
      }, [cardInfo])

    const pages = {
        profile: <Profile />,
    }
    useEffect(() => {
        //Запрос в базу для получения данных по карте и маршрутам.        
        getAddressList();
    }, [])

    function getRouteFromAPI() {
        console.log("gfds")
        getRoute(addressForOne, addressForTwo);
    }
    


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
                <div className="route-modal-page">
                    <div className="firstSelect">
                        <CustomSelect list={list.filter((e) => e !== addressForTwo)} onChange={e => setAddressOne(e)} address={addressForOne} lable={"Точка отправления"} select={"SelectOne"} />
                    </div>
                    <div className="secondSelect">
                        <CustomSelect list={list.filter((e) => e !== addressForOne)} onChange={e => setAddressTwo(e)} address={addressForTwo} lable={"Точка прибытия"} select={"SelectTwo"} />
                    </div>
                    <div className="buttonContainer">
                        <Button id="routeButton" variant="contained" onClick={() => getRouteFromAPI()}>Построить маршрут</Button>
                    </div>
                </div>
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
    { logIn, logOut, getAddressList, getCard, getRoute }
)(Authorized);