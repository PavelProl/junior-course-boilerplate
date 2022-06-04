import React from 'react';
import Discount from 'csssr-school-input-discount';
import HoccecInput from '../../HoccedInput';

const DiscountFilter = (props) => {
    return (
        <Discount
            title="Скидка"
            name="sale"
            value={props.value}
            onChange={props.handleChange}
        />
    );
}

const HoccedDiscountFilter = HoccecInput(DiscountFilter);

export default HoccedDiscountFilter;
