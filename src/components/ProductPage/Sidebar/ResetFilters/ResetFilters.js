import React from 'react';
import s from './ResetFilters.module.css';

export const ResetFilters = (props) => {
    return (
        <div>
            <button
                type="button" 
                className={s.button_reset}
                onClick={props.handleClick}>Сбросить фильтры
            </button>
        </div>
    );
}
