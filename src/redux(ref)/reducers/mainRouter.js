export default mainRouter;
export {set_main_router};


const defaultState = [
	{
		name: 'Accounting table',
		rout: 'table',
		icon: 'app'
	},
	{
		name: 'News',
		rout: 'news',
		icon: 'info'
	},
	{
		name: 'Current schemes',
		rout: 'scheme',
		icon: 'statistic'
	},
	{
		name: 'Bot list',
		rout: 'bots',
		icon: 'files'
	},
];

const SET = 'SET_MAIN_ROUTER';

// ____ funcs _____
function mainRouter(state = defaultState, action){
	switch (action.type) {
		case SET:	return action.data;

		default: return state
	}
}

// _____ actions ______
function set_main_router(options){
	return {type: OPEN,	data: options}
}
