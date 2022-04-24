import {
	GET_CATEGORIES,
	CREATE_CATEGORY,
	DELETE_CATEGORY
} from '../constants/categoryConstants';

const INITIAL_STATE = {
	categories: []
};

const categoryReducers = (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case GET_CATEGORIES:
			return {
				...state,
				categories: action.payload,
			};
		case CREATE_CATEGORY:
			return {
				...state,
				categories: [...state.categories, action.payload],
			};
		case DELETE_CATEGORY:
			return {
				categories: state.categories.filter(
					p => p._id !== action.payload._id
				),
			};
		default:
			return state;
	}
};

export default categoryReducers;
