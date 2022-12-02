export const serverLogIn = async (email, password) => {
  return fetch(
    `https://loft-taxi.glitch.me/auth?username=${email}&password=${password}`
  ).then(res => res.json());
};

/*export const serverRegistration = async (email, password, name) => {
  return fetch(
    `https://loft-taxi.glitch.me/register?username=${email}&password=${password}&name=${name}&surname=${name}`
  ).then(res => res.json());
};*/

export const serverRegistration = async (email, password, name) => {
  const json = JSON.stringify({
    email: email,
    password: password,
    name: name,
    surname: name
  });
  return fetch("https://loft-taxi.glitch.me/register", {  method: "POST",  body: json,}).then(res => res.json());
};

export const serverRoute = async (email, password, name) => {
  const json = JSON.stringify({
    email: email,
    password: password,
    name: name,
    surname: name
  });
  return fetch("https://loft-taxi.glitch.me/register", {  method: "POST",  body: json,}).then(res => res.json());
};

export const serverAddress = async (email, password, name) => {
  const json = JSON.stringify({
    email: email,
    password: password,
    name: name,
    surname: name
  });
  return fetch("https://loft-taxi.glitch.me/register", {  method: "POST",  body: json,}).then(res => res.json());
};

export const serverGetCard = async (email, password, name) => {
  const json = JSON.stringify({
    email: email,
    password: password,
    name: name,
    surname: name
  });
  return fetch("https://loft-taxi.glitch.me/register", {  method: "POST",  body: json,}).then(res => res.json());
};

export const serverPostGard = async (email, password, name) => {
  const json = JSON.stringify({
    email: email,
    password: password,
    name: name,
    surname: name
  });
  return fetch("https://loft-taxi.glitch.me/register", {  method: "POST",  body: json,}).then(res => res.json());
};

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