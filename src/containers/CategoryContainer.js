import { connect } from 'react-redux';
import { Category } from '../components/ProductPage/Sidebar/Category/Category';

const mapStateToProps = (state) => {
    return {
        selectedCategories: state.selectedCategories
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        handleSelectCategory: (value) => dispatch({
            type: 'SELECT_CATEGORY',
            payload: value
        })
    }
}

const CategoryContainer = connect(mapStateToProps, mapDispatchToProps)(Category);

export default CategoryContainer;
