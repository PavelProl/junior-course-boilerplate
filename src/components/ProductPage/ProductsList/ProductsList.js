import React from 'react';
import pt from 'prop-types';
import s from './ProductsList.module.css';
import ProductItem from 'csssr-school-product-card';
import ratingComponent from '../ratingComponent/ratingComponent.js';

function ProductsList(props) {
    const products = props.data.map((product) =>
        <li key={product.id}>
            <ProductItem
                isInStock={product.isInStock}
                img={product.img}
                title={product.title}
                price={product.price}
                subPriceContent={product.subPriceContent}
                maxRating={product.maxRating}
                rating={product.rating}
                ratingComponent={ratingComponent}
            />
        </li>
    );
    return (
        <ul className={s.productsList}>
            {products}
        </ul>
    );
}

ProductsList.propTypes = {
    title: pt.node.isRequired,
    img: pt.string.isRequired,
    price: pt.node.isRequired,
    rating: pt.number.isRequired,
    maxRating: pt.number.isRequired,
    subPriceContent: pt.node.isRequired, 
    ratingComponent: pt.func.isRequired,
    isInStock: pt.bool.isRequired
};

export default ProductsList;