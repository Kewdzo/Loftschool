import { takeEvery, call, put } from 'redux-saga/effects';
import { logIn, authenticate, registration, getRoute, routeReady, getAddressList, addressListReady, getCard, postCard, cardInfoReady } from './actions';
import { getAuthToken, getAuthTokenAfterRegistration, getRouteFromServer, getAddreses, getCardInfo, postCardInfo, getCardInfoFake } from '../../API_sagas'

//Вход в систему
export function* handleAuth() {
    yield takeEvery(authenticate, authenticateSaga(action));
};

export function* authenticateSaga(action) {
    const { email, password } = action.payload;
    const json = JSON.stringify({
        email: email,
        password: password
    });
    const result = yield call(getAuthToken, json);
    if (result.success) {
        const token = result.token;
        yield put({ type: logIn.toString(), payload: token });
    }
    else {
        alert('Ошибка: ' + result.error)
    }
};

//Регистрация нового пользователя и вход в систему
export function* handleReg() {
    yield takeEvery(registration, registrationSaga(action));
};

export function* registrationSaga(action) {
    const { email, password, name } = action.payload;
    const json = JSON.stringify({
        email: email,
        password: password,
        name: name,
        surname: name
    });
    const result = yield call(getAuthTokenAfterRegistration, json);
    if (result.success) {
        const token = result.token;
        yield put({ type: logIn.toString(), payload: token });
    }
    else {
        alert('Ошибка: ' + result.error)
    }
};


//Получение маршрута из двух адресов
export function* handleRoute() {
    yield takeEvery(getRoute, getRouteSaga(action));
};

export function* getRouteSaga(action) {
    const { address1, address2 } = action.payload;
    const result = yield call(getRouteFromServer, address1, address2);
    if (result.success) {
        yield put({ type: routeReady.toString(), payload: result });
    }
    else {
        alert('Ошибка: ' + result.error)
    }
};

//Получение списка адресов
export function* handleAddreses() {
    yield takeEvery(getAddressList, getAddressListSaga());
};

export function* getAddressListSaga(action) {
    const result = yield call(getAddreses);
    if (result.success) {
        const addreses = result.addresses;
        yield put({ type: addressListReady.toString(), payload: addreses });
    }
    else {
        alert('Ошибка: ' + result.error)
    }
};

//Получение данных по карте
export function* handleGetCard() {
    yield takeEvery(getCard, getCardSaga(action));
};

export function* getCardSaga(action) {
    const token = action.payload;
    const result = yield call(getCardInfo, token);
    if (result.cardName) {
        yield put({ type: cardInfoReady.toString(), payload: result });
    }
    else {
        const resultFake = yield call(getCardInfoFake);
        if (resultFake.cardName) {
            yield put({ type: cardInfoReady.toString(), payload: resultFake });
        }
        else {
            alert('Ошибка: ' + result.error)
        }
    }
};

//Обновление данных по карте
export function* handlePostCard() {
    yield takeEvery(postCard, postCardSaga(action));
};

export function* postCardSaga(action) {
    const { cardNumber, expiryDate, cardName, cvc, token } = action.payload;
    const json = JSON.stringify({
        cardNumber: cardNumber,
        expiryDate: expiryDate,
        cardName: cardName,
        token: token,
        cvc: cvc
    });
    const result = yield call(postCardInfo, json);
    if (result.success) {
        alert('Данные обновлены: ' + JSON.stringify(result));
        yield put({ type: getCard.toString(), payload: token });
    }
    else {
        alert('Ошибка: ' + result.error)
    }
};