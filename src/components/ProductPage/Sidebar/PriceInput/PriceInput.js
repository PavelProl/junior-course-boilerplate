import React from 'react';
import HoccedInput from '../../HoccedInput';

const PriceInput = (props) => {
    return (
        <input
            className={props.className}
            name={props.name}
            value={props.value}
            onChange={props.handleChange}
        />
    );
}

const HoccedPriceInput = HoccedInput(PriceInput);

export default HoccedPriceInput;
