import { toInt } from 'csssr-school-utils';

export default (data, minPrice, maxPrice, discount, selectedCategories) => {
    return data.filter(item => {
        const priceItem = toInt(item.price);
        return priceItem >= minPrice
            && priceItem <= maxPrice
            && item.discount >= discount
            && (selectedCategories.length > 0 ? selectedCategories.includes(item.category) : true)
    });
}
