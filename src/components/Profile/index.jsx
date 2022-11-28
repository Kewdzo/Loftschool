import React from 'react';
import scss from './style.module.scss';


function Profile(events) {
  return (<>
    <div className={scss.wrap}>
      <h2>Карточка профиля</h2>
      <p className="text">Модальное окно</p>
    </div>
  </>);
}

export default Profile;
