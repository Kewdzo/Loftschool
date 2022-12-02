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
  console.log(json);
  return fetch("https://loft-taxi.glitch.me/register", {  method: "POST",  body: json,}).then(res => res.json());
};