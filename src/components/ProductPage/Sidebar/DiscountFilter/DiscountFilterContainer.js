import { connect } from 'react-redux';
import HoccedDiscountForm from '../DiscountFilter/DiscountFilter';

const mapStateToProps = (state) => {
    return {
        value: state.sale
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        handleChange: (value) => dispatch({
            type: 'CHANGE_DISCOUNT_VALUE',
            payload: value === '' ? 0 : parseInt(value)
        })
    }
};

export const DiscountFilterContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(HoccedDiscountForm);
