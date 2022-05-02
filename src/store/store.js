import { createStore } from 'redux';
import { reducer }  from './reducer';
import getMinValue from '../utils/getMinValue';
import getMaxValue from '../utils/getMaxValue';
import data from '../products.json';

const initialState = {
    minValue: getMinValue(data),
    maxValue: getMaxValue(data),
    sale: 0
};

export const store = createStore(reducer, initialState);
