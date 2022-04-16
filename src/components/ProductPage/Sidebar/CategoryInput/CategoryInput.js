import React from 'react';
import { CategoryContext } from '../../../../App.js';
import s from './CategoryInput.module.css';

const InputCategory = (props) => {
    return (
        <CategoryContext.Consumer>
            {({ handleSelectCategory, selectedCategories }) => (
                <label className={s.checkboxCategory}>
                    <input 
                        type="checkbox"
                        checked={selectedCategories.includes(props.name)}
                        onChange={handleSelectCategory}
                        name={props.name}
                    />
                    <span>{props.name}</span>
                </label>
            )}
        </CategoryContext.Consumer>
    );
}

export default InputCategory;
