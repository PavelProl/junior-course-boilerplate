import React from 'react';
import PriceFilter from './PriceFilter/PriceFilter';
import HoccedDiscountFilter from './DiscountFilter/DiscountFilter';
import CategoryContainer  from '../../../containers/CategoryContainer';
import { ResetFilters } from './ResetFilters/ResetFilters';

const Sidebar = (props) => {
    return (
        <>
        <PriceFilter 
            minValue={props.minValue}
            maxValue={props.maxValue}
            handleMinChange={props.handleMinChange}
            handleMaxChange={props.handleMaxChange}
        />
        <HoccedDiscountFilter
            value={props.discount}
            handleChange={props.handleDiscountChange}
        />
        <CategoryContainer />
        <ResetFilters 
            handleClick={props.handleResetClick}
        />
        </>
    );
}

export default Sidebar;
