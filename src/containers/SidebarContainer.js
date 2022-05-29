import { connect } from 'react-redux';
import data from '../products.json';
import getMinValue from '../utils/getMinValue';
import getMaxValue from '../utils/getMaxValue';
// import getFilteredProducts from '../utils/getFilteredProducts';
import Sidebar from '../components/ProductPage/Sidebar/Sidebar';

// function selectCategory(e) {
//     const selectedItem = e.target.name;
//     const { selectedCategories } = this.state;
//     let selected = [];
//     let url = '';

//     if (selectedCategories.includes(selectedItem) && selectedCategories.length === 1) {
//         selected = [];
//         // window.history.pushState({ url }, '', url);
//         window.history.pushState({}, '', '/');
//     } else if (selectedCategories.includes(selectedItem) && selectedCategories.length > 1) {
//         selected = selectedCategories.filter((item) => item !== selectedItem);
//     } else {
//         selected = [...selectedCategories, selectedItem];
//     }
// }
        
const mapStateToProps = (state) => {
    console.log('state from SidebarContainer', state); 
    return {
        minValue: state.minValue,
        maxValue: state.maxValue,
        discount: state.discount,
        selectedCategories: state.selectedCategories,
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        handleMinChange: (value) => dispatch({
            type: 'CHANGE_MIN_VALUE',
            payload: value === '' ? 0 : parseInt(value, 10)
        }),
        handleMaxChange: (value) => dispatch({
            type: 'CHANGE_MAX_VALUE',
            payload: value === '' ? 0 : parseInt(value, 10)
        }),
        handleDiscountChange: (value) => dispatch({
            type: 'CHANGE_DISCOUNT_VALUE',
            payload: value === '' ? 0 : parseInt(value, 10)
        }),
        handleResetClick: () => dispatch({
            type: 'RESET_FILTERS',
            payload: {
                payloadMin: getMinValue(data),
                payloadMax: getMaxValue(data),
                payloadSale: 0,
                payloadSelected: []
            }
        }),
        handleSelectCategory: (selected) => dispatch({
            type: 'SELECT_CATEGORY',
            payload: selected
        })
    }
};

export const SidebarContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(Sidebar);
