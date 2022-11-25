import React from "react";

export const MainContext = React.createContext();

export const MainContextProvider = ({children}) => {
    const [isLoggedIn, setIsLoggedIn] = React.useState(false);
    const logIn = (email, password) => {
        setIsLoggedIn(true);
        console.log('Пользователь залогинился');
        console.log('Логин: ' + email);
        console.log('Пароль: ' + password);
    };
    const logOut = () => {
        setIsLoggedIn(false);
    };
    return (
        <MainContext.Provider value={{ logIn, logOut, isLoggedIn }}>
            {children}
        </MainContext.Provider>
    );
}