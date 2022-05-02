import React from 'react';
import PriceFilter from './PriceFilter/PriceFilter';
import { DiscountFilterContainer } from './DiscountFilter/DiscountFilterContainer';
import CategoryFilter from './CategoryFilter/CategoryFilter';
import { ResetFiltersContainer } from './ResetFilters/ResetFiltersContainer';

class Sidebar extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <>
            <PriceFilter />
            <DiscountFilterContainer
                // handleChange={this.handleChange}
                // value={this.props.sale}
            />
            <CategoryFilter />
            <ResetFiltersContainer />
            </>
        );
    }
}

export default Sidebar;
