import React from 'react';
import s from './ProductsList.module.css';
import Product from '../Product';
import LogRender from '../../../LogRender';
import { CategoryContext } from '../../../App';

class ProductsList extends LogRender {
    render() {
        return (
            <CategoryContext.Consumer>
                {({ filteredProducts }) => (
                    <ul className={s.productsList}>

                        {filteredProducts.map((product) => (
                            <li key={product.id}>
                                <Product
                                    category={product.category}
                                    isInStock={product.isInStock}
                                    img={product.img}
                                    title={product.title}
                                    price={product.price}
                                    subPriceContent={product.subPriceContent}
                                    maxRating={product.maxRating}
                                    rating={product.rating}
                                />
                            </li>
                        ))}

                    </ul>
                )}
            </CategoryContext.Consumer>
        );
    }
}

export default ProductsList;
