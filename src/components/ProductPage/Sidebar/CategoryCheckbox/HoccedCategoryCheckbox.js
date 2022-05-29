import React from 'react';
// import { CategoryContext } from '../../../../App.js';
import s from './CategoryCheckbox.module.css';
import HoccedCheckbox from '../../HoccedCheckbox';

const CategoryCheckbox = (props) => {
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

const HoccedCategoryCheckbox = HoccedCheckbox(CategoryCheckbox);

export default HoccedCategoryCheckbox;
