export const getAuthToken = (json) => {
    return fetch("https://loft-taxi.glitch.me/auth", { method: "POST", headers: { 'Content-Type': 'application/json' }, body: json, }).then(response => response.json());

};

export const getAuthTokenAfterRegistration = (json) => {
    return fetch("https://loft-taxi.glitch.me/register", { method: "POST", headers: { 'Content-Type': 'application/json' }, body: json, }).then(res => res.json());
};

export const getRouteFromServer = (address1, address2) => {
    return fetch(
        `https://loft-taxi.glitch.me/route?address1=${address1}&address2=${address2}`
    ).then(res => res.json());
};

export const getAddreses = () => {
    return fetch(
        `https://loft-taxi.glitch.me/addressList`
    ).then(res => res.json());
};

export const getCardInfo = (token) => {
    return fetch(
        `https://loft-taxi.glitch.me/card?token=${token}`
    ).then(res => res.json());
};

export const getCardInfoFake = () => {
    return fetch(
        `https://loft-taxi.glitch.me/card?token=AUTH_TOKEN`
    ).then(res => res.json());
};


export const postCardInfo = (json) => {
    return fetch("https://loft-taxi.glitch.me/card", { method: "POST", body: json, }).then(res => res.json());
};
