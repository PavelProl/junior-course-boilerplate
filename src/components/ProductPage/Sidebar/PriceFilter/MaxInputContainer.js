import { connect } from 'react-redux';
import HoccedPriceInput from '../PriceInput/PriceInput';

const mapStateToProps = (state) => {
    console.log('state from MaxInputContainer', state);
    return {
        value: state.maxValue
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        handleChange: (value) => dispatch({
            type: 'CHANGE_MAX_VALUE',
            payload: value === '' ? 0 : parseInt(value)
        })
    }
};

export const MaxInputContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(HoccedPriceInput);
