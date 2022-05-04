import { createStore } from 'redux';
import { reducer }  from './reducer';
import getMinValue from '../utils/getMinValue';
import getMaxValue from '../utils/getMaxValue';
import getFilteredProducts from '../utils/getFilteredProducts';
import data from '../products.json';

const initialState = {
    minValue: getMinValue(data),
    maxValue: getMaxValue(data),
    sale: 0,
    filteredProducts: getFilteredProducts(data, getMinValue(data), getMaxValue(data), 0, [])
};

export const store = createStore(reducer, initialState);
