import React, { useState, useEffect } from 'react';
import './style.css';
import Header from '../../components/Header';
import Map from '../../components/Map';
import Profile from '../../components/Profile';
//import { useDispatch, useSelector } from 'react-redux';
import { getAdresses } from '../../modules/redux';
import { connect} from 'react-redux';
import { logIn, logOut } from "../../modules/redux";


function Authorized(events) {
    const { logOut } = events;
    const [content, setContent] = useState('map');

    const pages = {
        profile: <Profile />,
    }

    const adresses = getAdresses();

    useEffect(() => {
        console.log("АДРЕСА:");
        console.log(adresses);
    }, [adresses])




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
    null,
    { logIn, logOut }
  )(Authorized);