import React from 'react';

import ProductPageTitle from './ProductPageTitle/ProductPageTitle.js';
import ProductsList from './ProductsList/ProductsList.js';
import Sidebar from './Sidebar/Sidebar.js';
// import PriceFilter from './PriceFilter/PriceFilter.js';
// import HoccedDiscountForm from './DiscountFilter/DiscountFilter.js';
// import CategoryFilter from './CategoryFilter/CategoryFilter.js';
// import ResetFilters from './ResetFilters/ResetFilters.js';

import s from './ProductPage.module.css';

class ProductPage extends React.Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.handleClick = this.handleClick.bind(this);
    }

    handleChange(event) {
        this.props.handleChange(event);
    }

    handleClick() {
        this.props.handleResetClick();
    }

    render() {
        return (
            <main>
                <div className={s.productPage}>   
                    <ProductPageTitle />
                    <div className={s.productPageContent}>

                        <div className={s.productPageFilterWrapper}>
                            <Sidebar 
                                minValue={this.props.minValue}
                                maxValue={this.props.maxValue}
                                handleChange={this.handleChange}
                                handleClick={this.handleClick}
                                sale={this.props.sale}
                            />
                                
                            {/* <PriceFilter
                                minValue={this.props.minValue}
                                maxValue={this.props.maxValue}
                                handleChange={this.handleChange}
                            />
                            <div>
                                <HoccedDiscountForm 
                                    handleChange={this.handleChange}
                                    value={this.props.sale} />
                            </div>
                            <CategoryFilter />
                            <ResetFilters handleClick={this.handleResetClick} /> */}
                        </div>

                        <ProductsList />
                    </div>
                </div>
            </main>
        );
    }
}

export default ProductPage;
