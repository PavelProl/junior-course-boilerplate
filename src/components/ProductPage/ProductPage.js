import React from 'react';

import ProductPageTitle from './ProductPageTitle/ProductPageTitle.js';
import ProductsList from './ProductsList/ProductsList.js';
import ProductsFilter from './ProductsFilter/ProductsFilter.js';

import s from './ProductPage.module.css';

class ProductPage extends React.Component {
    constructor(props) {
        super(props);
        this.handleChangeMin = this.handleChangeMin.bind(this);
        this.handleChangeMax = this.handleChangeMax.bind(this);
        this.formSubmit = this.formSubmit.bind(this);
    }

    handleChangeMin(minValue) {
        this.props.changeMin(minValue);
    }
    
    handleChangeMax(maxValue) {
        this.props.changeMax(maxValue);
    }

    formSubmit(arr, minValue, maxValue) {
        this.props.formSubmit(arr, minValue, maxValue);
    }

    render() {
        return (
            <main>
                <div className={s.productPage}>   
                    <ProductPageTitle />
                    <div className={s.productPageContent}>
                        <div className={s.productPageFilterWrapper}>
                            <ProductsFilter
                                minValue={this.props.minValue}
                                maxValue={this.props.maxValue}
                                changeMin={this.handleChangeMin}
                                changeMax={this.handleChangeMax}
                                formSubmit={this.formSubmit}
                            />
                        </div>
                        <ProductsList
                            // data={this.props.data}
                            data={this.props.filteredProducts}
                        />
                    </div>
                </div>
            </main>
        );
    }
}

export default ProductPage;
