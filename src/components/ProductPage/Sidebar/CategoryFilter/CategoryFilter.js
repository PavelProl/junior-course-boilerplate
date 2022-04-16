import React from 'react';
import s from './CategoryFilter.module.css';
import CategoryInput from '../CategoryInput/CategoryInput';

const CategoryFilter = () => {
    return (
        <div className={s.categories}>
            <div className={s.categories__title}>Категории</div>
            <div className={s.categories__wrapper}>
                <CategoryInput
                    name="clothes"
                />
                <CategoryInput
                    name="books"
                />
            </div>
        </div>
    );
}

export default CategoryFilter;
