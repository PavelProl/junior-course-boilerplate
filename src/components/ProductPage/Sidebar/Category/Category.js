import React from 'react';
// import { CategoryContext } from '../../../../App.js';
import s from './Category.module.css';

export const Category = (props) => {
    return (
        <label className={s.checkboxCategory}>
            <input 
                type="checkbox"
                checked={props.selectedCategories.includes(props.name)}
                onChange={props.handleSelectCategory}
                name={props.name}
            />
            <span>{props.name}</span>
        </label>
    );
}
