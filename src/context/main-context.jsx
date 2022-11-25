import React from "react";

export const MainContext = React.createContext();

export const MainContextProvider = ({children}) => {
    const [isLoggedIn, setIsLoggedIn] = React.useState(false);
    const login = (email, password) => {
        setIsLoggedIn(true);
        console.log('Пользователь залогинился');
        console.log('Логин: ' + email);
        console.log('Пароль: ' + password);
    };
    const logout = () => {
        setIsLoggedIn(false);
    };
    return (
        <MainContext.Provider value={{ login, logout, isLoggedIn }}>
            {children}
        </MainContext.Provider>
    );
}