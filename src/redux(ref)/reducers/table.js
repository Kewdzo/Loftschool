import tableData from '@resources/data/tableData_test.json';

export default table;
export {
	set_table,
	change_visible_table,
	add_field_table,
	remove_field_table,
	edit_field_table,
	add_bot_table,
	add_dist_table,

};


const defaultState = tableData;

const SET = 'SET_TABLE';
const CHANGE_VISIBLE = 'CHANGE_VISIBLE_TABLE';
const ADD_FIELD = 'ADD_FIELD_TABLE';
const REMOVE_FIELD = 'REMOVE_FIELD_TABLE';
const EDIT_FIELD = 'EDIT_FIELD_TABLE';
const ADD_BOT = 'ADD_BOT_TABLE';
const ADD_DIST = 'ADD_DIST_TABLE';

// ____ funcs _____
function table(state = defaultState, action){
	switch (action.type) {
		case SET:	return action.data;
		case CHANGE_VISIBLE:	return func_change_visible(state, action.data);
		case ADD_FIELD:	return func_add_field(state, action.data);
		case REMOVE_FIELD:	return func_remove_field(state, action.data);
		case EDIT_FIELD:	return func_edit_field(state, action.data);
		case ADD_BOT:	return func_add_bot(state, action.data);
		case ADD_DIST:	return func_add_dist(state, action.data);

		default: return state
	}
}

// _____ actions ______
function set_table(options){
	const {head, bots} = options;
	let result = {
		head: [],
		bots: []
	}

	head.forEach((el, i) => {
		const {active, name, type, _id, deadline, url} = el;
		let obj = {id: _id, type, active, name};

		if(type === 'scheme'){
			obj.deadline = deadline;
			obj.url = url;
		}

		result.head.push(obj);
	});


	bots.forEach((el, i) => {
		let obj = {
			id: el._id,
			data: el.data.map(el => ({
				id: el.refID,
				value: el.value
			})),
		};
		
		result.bots.push(obj);
	});



	return {type: SET,	data: result}
}
function change_visible_table(id){
	return {type: CHANGE_VISIBLE,	data: {id} }
}
function add_field_table(options={}){
	// const {active=true, id, name} = options;
	return {type: ADD_FIELD,	data: options }
}
function remove_field_table(id){
	return {type: REMOVE_FIELD,	data: {id} }
}
function edit_field_table(id, newValue){
	return {type: EDIT_FIELD,	data: {id, newValue} }
}
function add_bot_table(options={}){
	return {type: ADD_BOT,	data: options}
}
function add_dist_table(options={}){
	// const {id, name, url, dedline, active} = options;
	return {type: ADD_DIST,	data: options}
}


// _________________


function func_change_visible(state, options){
	const {id} = options;
	let newState = {...state};
	let fields = state.head;

	let newFields = fields.map(el=>{
		if(el.id === id) el.active = !el.active;
		return el;
	})

	newState.head = newFields;

	return newState;
}
function func_add_field(state, options){
	const {name, active=true, id} = options;
	let newState = {...state};
	let obj = {	name, active, type: 'field', id };
	newState.head.push(obj);
	return newState;
}
function func_remove_field(state, options){
	const {id} = options;
	let newState = {...state};
	let fields = newState.head.filter(el => el.id !== id);
	newState.head = fields;
	return newState;
}
function func_edit_field(state, options){
	const {id, newValue} = options;
	let newState = {...state};
	let fields = newState.head.map(el => {
		let item = el;
		if(el.id === id) item.name = newValue;
		return item;
	});
	newState.head = fields;
	return newState;
}
function func_add_bot(state, options){
	const newBot = options;
	let newState = {...state};
	newState.bots.push(newBot);
	return newState;
}
function func_add_dist(state, options){
	let newState = {...state};
	const {id, name, url, dedline, active=true} = options;

	let obj = {
		...options,
		type: 'scheme',
		active,
	}

	newState.head.push(obj);
	return newState;
}
