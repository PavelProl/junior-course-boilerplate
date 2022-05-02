import { connect } from 'react-redux';
import { ResetFilters } from './ResetFilters';
import getMinValue from '../../../../utils/getMinValue';
import getMaxValue from '../../../../utils/getMaxValue';
import data from '../../../../products.json';

const mapDispatchToProps = (dispatch) => {
    return {
        handleClick: () => dispatch({
            type: 'RESET_FILTERS',
            payload: {
                payloadMin: getMinValue(data),
                payloadMax: getMaxValue(data),
                payloadSale: 0
            }
        })
    }
};

export const ResetFiltersContainer = connect(null, mapDispatchToProps)(ResetFilters);
