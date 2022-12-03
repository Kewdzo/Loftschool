import React, { useState, useEffect } from 'react';
import './style.css';
import Header from '../../components/Header';
import Map from '../../components/Map';
import Profile from '../../components/Profile';
//import { useDispatch, useSelector } from 'react-redux';
//import { getAdresses } from '../../modules/redux';
import { connect} from 'react-redux';
import { logIn, logOut, getAddressList, getCard, getToken } from "../../modules/redux";


function Authorized(events) {
    const { logOut, getAddressList, getCard, token } = events;
    const [content, setContent] = useState('map');

    const pages = {
        profile: <Profile />,
    }
    useEffect(() => {
        //Запрос в базу для получения данных по карте и маршрутам.        
        getAddressList();
      },[])


      useEffect(() => {
        debugger;
        if (token) getCard(token);
      },[token])

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
    (state) => ({ token: getToken(state) }),
    { logIn, logOut, getAddressList, getCard }
  )(Authorized);