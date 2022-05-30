import React from 'react';
import PriceFilter from './PriceFilter/PriceFilter';
import HoccedDiscountFilter from './DiscountFilter/DiscountFilter';
import CategoryFilter from './CategoryFilter/CategoryFilter';
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
        <CategoryFilter 
            // handleSelectCategory={props.handleSelectCategory}
            // selectedCategories={props.selectedCategories}
        />
        <ResetFilters 
            handleClick={props.handleResetClick}
        />
        </>
    );
}

export default Sidebar;
