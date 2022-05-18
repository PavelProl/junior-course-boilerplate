import { connect } from 'react-redux';
import ProductsList from '../components/ProductPage/ProductsList/ProductsList';
import getFilteredProducts from '../utils/getFilteredProducts';
import data from '../products.json';

const mapStateToProps = (state) => {
    return {
        filteredProducts: getFilteredProducts(data, state.minValue, state.maxValue, state.discount, state.selectedCategories)
    }
}

export const ListContainer = connect(mapStateToProps, null)(ProductsList);
