import React from 'react';
import s from './Category.module.css';
import InputCategory from '../InputCategory/InputCategory';

const Category = () => {
    return (
        <div className={s.categories}>
            <div className={s.categories__title}>Категории</div>
            <div className={s.categories__wrapper}>
                <InputCategory 
                    name="clothes"
                />
                <InputCategory
                    name="books"
                />
            </div>
        </div>
    );
}

export default Category;
