export default user;
export {set_user};


const defaultState = {
	mail: '--- ---',
	userId: '',
	avatar: '',
	username: '--- ---',
};

const SET = 'SET_USER';

// ____ funcs _____
function user(state = defaultState, action){
	switch (action.type) {
		case SET:	return func_setUser(state, action.data);

		default: return state
	}
}

// _____ actions ______
const set_user = (options) => ({type: SET,	data: options});

// _____ funcs _____

function func_setUser(state, data){
	let result = {...state};
	let keys = ['userId', 'avatar', 'mail'];

	if(typeof data === 'object'){
		for(let key in data) {
			keys.forEach(el => (key === el) ? result[key] = data[key] : '' );
		}
	}

	return result;
}
