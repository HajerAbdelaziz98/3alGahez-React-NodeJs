import {
	CREATE_PRODUCT,
	GET_PRODUCTS,
	GET_PRODUCT,
	DELETE_PRODUCT,
	PRODUCT_LIST_FAIL,
	PRODUCT_LIST_REQUEST,
	PRODUCT_LIST_SUCCESS,
} from '../constants/productConstants';

// ALL PRODUCTS
export const productListReducer = (state = { products: [] }, action) => {
	switch (action.type) {
	  case PRODUCT_LIST_REQUEST:
		return { loading: true, products: [] };
	  case PRODUCT_LIST_SUCCESS:
		return { loading: false, products: action.payload };
	  case PRODUCT_LIST_FAIL:
		return { loading: false, error: action.payload };
	  default:
		return state;
	}
  };
const INITIAL_STATE = {
	products: [],
};

const productReducer = (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case CREATE_PRODUCT:
			return {
				products: [...state.products, action.payload],
			};
		case GET_PRODUCTS:
			return {
				products: [...action.payload],
			};
		case GET_PRODUCT:
			return {
				product: action.payload,
			};
		case DELETE_PRODUCT:
			return {
				products: state.products.filter(
					p => p._id !== action.payload._id
				),
			};

		default:
			return state;
	}
};

export default productReducer;
