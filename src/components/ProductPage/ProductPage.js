import React from 'react';

import ProductPageTitle from './ProductPageTitle/ProductPageTitle.js';
import { ListContainer } from '../../containers/ListContainer';
import { SidebarContainer } from '../../containers/SidebarContainer';

import s from './ProductPage.module.css';

class ProductPage extends React.Component {
    render() {
        return (
            <main>
                <div className={s.productPage}>   
                    <ProductPageTitle />
                    <div className={s.productPageContent}>
                        <div className={s.productPageFilterWrapper}>
                            <SidebarContainer />
                        </div>
                        <ListContainer />
                    </div>
                </div>
            </main>
        );
    }
}

export default ProductPage;
