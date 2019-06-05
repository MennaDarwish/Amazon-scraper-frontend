import { combineReducers } from 'redux';

import {
    FETCH_PRODUCT_REQUEST,
    FETCH_PRODUCT_SUCCESS,
    FETCH_PRODUCT_FAILURE,
  } from './constants';
  
  const INITIAL_STATE = {
    products: {},
    loading: false,
    error: null,
  };
  
  const productReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
      case FETCH_PRODUCT_REQUEST:
        return {
          ...state,
          products: {},
          loading: true,
          error: null,
        };
      case FETCH_PRODUCT_SUCCESS:
        return {
          ...state,
          products: { ...state.products, [action.asin]: action.product },
          loading: false,
          error: null,
        };
      case FETCH_PRODUCT_FAILURE:
        return {
          ...state,
          products: {},
          loading: false,
          error: action.error,
        };
      default: return state;
    }
  }
  

const rootReducer = combineReducers({
    productInStore: productReducer
});
export default rootReducer;