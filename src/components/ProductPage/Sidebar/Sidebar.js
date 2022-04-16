import React from 'react';
import PriceFilter from './PriceFilter/PriceFilter';
import DiscountFilter from './DiscountFilter/DiscountFilter';
import CategoryFilter from './CategoryFilter/CategoryFilter';
import ResetFilters from './ResetFilters/ResetFilters';

class Sidebar extends React.Component {
    constructor(props) {
        super(props);
        // this.handlePriceChange = this.handlePriceChange.bind(this);
        // this.handleDiscountChange = this.handleDiscountChange.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleClick = this.handleClick.bind(this);
    }

    handleChange(event) {
        this.props.handleChange(event);
    }

    handleClick() {
        this.props.handleClick();
    }

    render() {
        return (
            <>
            <PriceFilter 
                minValue={this.props.minValue}
                maxValue={this.props.maxValue}
                handleChange={this.handleChange}
            />
            <DiscountFilter 
                handleChange={this.handleChange}
                value={this.props.sale}
            />
            <CategoryFilter />
            <ResetFilters 
                handleClick={this.handleClick}
            />
            </>
        );
    }
}

export default Sidebar;
