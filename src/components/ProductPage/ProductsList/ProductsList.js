import React from 'react';
import s from './ProductsList.module.css';
import Product from '../Product';
import LogRender from '../../../LogRender';
// import { CategoryContext } from '../../../App';

class ProductsList extends LogRender {

    render() {
        console.log('filteredProducts from ProductsList', this.props.filteredProducts)
        return (
            <ul className={s.productsList}>
                {this.props.filteredProducts.map((product) => (
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
        );
    }
}

export default ProductsList;
