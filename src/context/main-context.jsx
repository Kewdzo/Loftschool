import React from "react";

export const MainContext = React.createContext();

export const MainContextProvider = ({ children }) => {
    const [isLoggedIn, setIsLoggedIn] = React.useState(false);
    /*Переделано для получения подробного ответа
    const logIn = (email, password) => {
        setIsLoggedIn(true);
        console.log('Пользователь залогинился');
        console.log('Логин: ' + email);
        console.log('Пароль: ' + password);
    };*/

    const logIn = (email, password) => new Promise((resolve, reject)=>{
        if(!email || !password) return reject('fail');

		resolve('success');
		setIsLoggedIn(true);
	})


    const logOut = () => {
        setIsLoggedIn(false);
    };
    return (
        <MainContext.Provider value={{ logIn, logOut, isLoggedIn }}>
            {children}
        </MainContext.Provider>
    );
}

export const WithAuth = (WrapComponent) => {
    return class extends React.Component {
        render() {
            return (
                <MainContext.Consumer>
                    {(value) => <WrapComponent {...value} {...this.props} />}
                </MainContext.Consumer>
            )
        }
    }
}