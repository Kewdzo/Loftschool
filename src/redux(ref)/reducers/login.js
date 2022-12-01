export default login;
export {set_login};


const defaultState = {
	login: false,
};

const SET = 'SET_LOGIN';

// ____ funcs _____
function login(state = defaultState, action){
	switch (action.type) {
		case SET:	return func_set_login(action.data, state);

		default: return state
	}
}


function func_set_login(value, state){
	let result = {...state};
	if(typeof value === 'boolean') result.login = value;
	return result;
}



// _____ actions ______
function set_login(options){
	return {type: SET,	data: options}
}
