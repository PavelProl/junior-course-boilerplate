import React from 'react';
import s from './ResetFilters.module.css';

class ResetFilters extends React.Component {

    handleClick = () => {
        this.props.handleClick();
    }

    render() {
        return (
            <div>
                <button
                    type="button" 
                    className={s.button_reset}
                    onClick={this.handleClick}>Сбросить фильтры
                </button>
            </div>
        );
    }
}

export default ResetFilters;
