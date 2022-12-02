import { createAction } from 'redux-actions';

export const logIn = createAction('LOG_IN');
export const logOut = createAction('LOG_OUT');

export const routeReady = createAction('ROUTE_READY');
export const addressListReady = createAction('ADDRESS_LIST_READY');

export const cardInfoReady = createAction('CARD_READY');

//к серверу
export const authenticate = createAction('AUTHENTICATE', (email, password) => ({ email, password }));
export const registration = createAction('REGISTRATION', (email, password, name) => ({ email, password, name }));

export const getRoute = createAction('GET_ROUTE', (address1, address2) => ({ address1, address2 }));
export const getAddressList = createAction('GET_ADDRESSLiST');

export const getCard = createAction('GET_CARD', token => token);
export const postCard = createAction('POST_CARD', (cardNumber, expiryDate, cardName, cvc, token) => ({ cardNumber, expiryDate, cardName, cvc, token }));

// getSeriesRequest.toString(); // GET_SERIES_REQUEST

/*

POST /register - возвращает {success: true, token: AUTH_TOKEN} если регистрация прошла успешно, иначе возвращает {success: false, error: Сообщение об ошибке}
Ожидает следущий объект в запросе:
{email: "email@example.com", password: "password", name: "Name", surname: "Surname"}

POST /auth - возвращает {success: true, token: AUTH_TOKEN} если логин и пароль верны, иначе возвращает {success: false, error: Сообщение об ошибке}
Ожидает следущий объект в запросе:
{email: "email@example.com", password: "password"}

POST/card - возвращает {success: true} если добавление или изменение данных кредитной карты произошло успешно, иначе возвращает {success: false, error: Сообщение об ошибке}
Ожидает следущий объект в запросе:
{cardNumber: "0000 0000 0000 0000", expiryDate: "", cardName: "", cvc: "", token: AUTH_TOKEN}

GET /card - возвращает данные кредитной карты
Пример запроса: https://loft-taxi.glitch.me/card?token=AUTH_TOKEN.

GET /route - позволяет получить маршрут. Принимает address1 и address2 в качестве аргументов.
Пример запроса: https://loft-taxi.glitch.me/route?address1=Шаверма на Невском&address2=Пулково (LED).

GET /addressList - выдаёт список доступных адресов
Пример запроса: https://loft-taxi.glitch.me/addressList

*/