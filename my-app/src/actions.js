import axios from 'axios';

import {
    FETCH_PRODUCT_REQUEST,
    FETCH_PRODUCT_SUCCESS,
    FETCH_PRODUCT_FAILURE,
    } from './constants';

const fetchProductRequest = () => {
  return {
    type: FETCH_PRODUCT_REQUEST,
  };
};

export const fetchProductSuccess = (asin, product) => {
  return {
    type: FETCH_PRODUCT_SUCCESS,
    asin,
    product,
  };
};

export const fetchProductError = (error) => {
  return {
    type: FETCH_PRODUCT_FAILURE,
    error,
  };
};

export const fetchProductByAsin = asin => (dispatch) => {
  dispatch(fetchProductRequest);
  return axios.get(`http://127.0.0.1:8000/products/${asin}`)
    .then(res => dispatch(fetchProductSuccess(asin, res.data)))
    .catch(err => dispatch(fetchProductError(err)));
};
