import React from 'react';
import s from './CategoryFilter.module.css';
import HoccedCategoryCheckbox from '../CategoryCheckbox/HoccedCategoryCheckbox';

const CategoryFilter = (props) => {
    return (
        <div className={s.categories}>
            <div className={s.categories__title}>Категории</div>
            <div className={s.categories__wrapper}>
                <HoccedCategoryCheckbox
                    name="clothes"
                    selectedCategories={props.selectedCategories}
                    handleSelectCategory={props.handleSelectCategory}
                />
                <HoccedCategoryCheckbox
                    name="books"
                    selectedCategories={props.selectedCategories}
                    handleSelectCategory={props.handleSelectCategory}
                />
            </div>
        </div>
    );
}

export default CategoryFilter;
