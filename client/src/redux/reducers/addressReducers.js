import { SAVE_ADDRESS } from '../constants/address';

let INITIAL_STATE = {
	addressDetails: {},
};

//last edited

if (localStorage.getItem('addressDetails')) {
	INITIAL_STATE.addressDetails = JSON.parse(localStorage.getItem('addressDetails'));
} else {
	INITIAL_STATE.addressDetails = {};
}

const addressReducer = (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case SAVE_ADDRESS:
			return {
				...state,
				addressDetails: action.payload,
			};
		default:
			return state;
	}
};

export default addressReducer;