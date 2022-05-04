import { connect } from 'react-redux';
import HoccedPriceInput from '../PriceInput/PriceInput';

const mapStateToProps = (state) => {
    console.log('state from MinInputContainer', state); 
    return {
        value: state.minValue
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        handleChange: (value) => dispatch({
            type: 'CHANGE_MIN_VALUE',
            payload: value === '' ? 0 : parseInt(value)
        })
    }
};

export const MinInputContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(HoccedPriceInput);

