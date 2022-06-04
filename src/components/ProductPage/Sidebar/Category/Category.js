import React from 'react';
import s from './Category.module.css';

export const Category = props => {
    const {selectedCategories} = props;

    const handleSelectCategory = (event) => {
        const selectedItem = event.target.name;
        let selected;
        let url = '';

        if (selectedCategories.includes(selectedItem) && selectedCategories.length === 1) {
            selected = [];
            // window.history.pushState({ url }, '', url);
            window.history.pushState({}, '', '/');
        } else if (selectedCategories.includes(selectedItem) && selectedCategories.length > 1) {
            selected = selectedCategories.filter((item) => item !== selectedItem);
        } else {
            selected = [...selectedCategories, selectedItem];
        }

        if (selected.length === 1) {
            url += '/?categories=' + selected[0];
        } else if (selected.length > 1) {
            url += '/?categories=' + selected[0];
            for (let i = 1; i < selected.length; i++) {
                url += ',' + selected[i];
            }
        }
        console.log(url);

        window.history.pushState({ url }, '', url);

        // этот пропс из mapDispatchToProps
        props.handleSelectCategory(selected);
    };

    return (
        <div className={s.categories}>
            <div className={s.categories__title}>Категории</div>
            <div className={s.categories__wrapper}>
                {['clothes', 'books'].map((item, key) => {
                    return (
                        <label className={s.categoryButton} key={key}>
                            <input
                                type="checkbox"
                                checked={selectedCategories.includes(item)}
                                onChange={handleSelectCategory}
                                name={item}
                            />
                            <span>{item}</span>
                        </label>
                    )
                })}
            </div> 
        </div>
    )
};
