import React from 'react';
import s from './CategoryFilter.module.css';
import CategoryInput from '../CategoryInput/CategoryInput';

const CategoryFilter = (props) => {
    return (
        <div className={s.categories}>
            <div className={s.categories__title}>Категории</div>
            <div className={s.categories__wrapper}>
                <CategoryInput
                    name="clothes"
                    selectedCategories={props.selectedCategories}
                    handleSelectCategory={props.handleSelectCategory}
                />
                <CategoryInput
                    name="books"
                    selectedCategories={props.selectedCategories}
                    handleSelectCategory={props.handleSelectCategory}
                />
            </div>
        </div>
    );
}

export default CategoryFilter;
