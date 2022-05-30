import { connect } from 'react-redux';
import { Category } from '../components/ProductPage/Sidebar/Category/Category';
// import { selectCategory } from '../store/actions';
import  { selectCategory } from '';

const mapStateToProps = (state) => {
    return {
        selectedCategories: state.selectedCategories
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        handleSelectCategory: (value) => dispatch({
            type: 'SELECT_CATEGORY',
            payload: selectCategory(value)
        })
    }
}

const CategoryContainer = connect(mapStateToProps, mapDispatchToProps)(Category);

export default CategoryContainer;
