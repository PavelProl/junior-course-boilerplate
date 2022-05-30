import React from 'react';
import s from './CategoryFilter.module.css';
// import Category from '../Category/Category';
import CategoryContainer from '../../../../containers/CategoryContainer';

const CategoryFilter = (props) => {
    return (
        <div className={s.categories}>
            <div className={s.categories__title}>Категории</div>
            <div className={s.categories__wrapper}>
                <CategoryContainer
                    name="clothes"
                    // selectedCategories={props.selectedCategories}
                    // handleChange={props.handleSelectCategory}
                />
                <CategoryContainer
                    name="books"
                    // selectedCategories={props.selectedCategories}
                    // handleChange={props.handleSelectCategory}
                />
            </div>
        </div>
    );
}

export default CategoryFilter;
