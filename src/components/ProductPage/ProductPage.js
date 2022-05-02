import React from 'react';

import ProductPageTitle from './ProductPageTitle/ProductPageTitle.js';
import ProductsList from './ProductsList/ProductsList.js';
import Sidebar from './Sidebar/Sidebar.js';

import s from './ProductPage.module.css';

class ProductPage extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <main>
                <div className={s.productPage}>   
                    <ProductPageTitle />
                    <div className={s.productPageContent}>
                        <div className={s.productPageFilterWrapper}>
                            <Sidebar 
                                sale={this.props.sale}
                            />
                        </div>
                        <ProductsList />
                    </div>
                </div>
            </main>
        );
    }
}

export default ProductPage;
