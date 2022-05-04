import React from 'react';
import ProductPage from './components/ProductPage/ProductPage.js';
import data from './products.json';
import getMinValue from './utils/getMinValue';
import getMaxValue from './utils/getMaxValue';
import getFilteredProducts from './utils/getFilteredProducts';

import { store } from './store/store';

// import * as R from 'ramda'; для мемоизации (введу позже)

/* на будущее
function memoizeByResult(fn) {
    let memoizedResult = null;
    return (callback, ...args) => {
      fn.apply(null, [(result) => {
        if (!R.equals(memoizedResult, result)) {
          memoizedResult = result;
        }
        callback(memoizedResult);
      }, ...args]);
    }
}

let memoizedGetFilteredProducts = memoizeByResult(getFilteredProducts);
*/

const CategoryContext = React.createContext({
    handleSelectCategory: () => {},
});

// store.subscribe(() => {
//     console.log('minValue', store.getState().minValue);
//     console.log('maxValue', store.getState().maxValue);
// })

class App extends React.PureComponent {
    constructor(props) {
        super(props);
        //перезаписываем первоначальный URL, чтобы при возвращении к самому первому реальному URL в нашей истории не было ошибки (когда свойство state события popstate будет равно null)
        // const url = window.location.pathname.substr(1);
        // window.history.replaceState({ url }, 'title', window.location.pathname);

        const urlFilterParams = decodeURIComponent(window.location.search);

        this.state = {
            selectedCategories: this.getSelectedCategoryFromUrl(urlFilterParams),
        };
        
        this.handleSelectCategory = this.handleSelectCategory.bind(this);

        if (this.state.selectedCategories.length === 0) {
            window.history.replaceState({ url: this.state.selectedCategories }, '', '/');
        } else {
            window.history.replaceState({ url: this.state.selectedCategories }, '', '?category=' + this.state.selectedCategories);
        }
    }

    getSelectedCategoryFromUrl = (url) => {
        let parseUrl = url.split('=')
        parseUrl = parseUrl.pop()
        // получаем массив выбранных категорий, либо []
        return parseUrl ? parseUrl.split(',') : []
      };

    componentDidMount() {
        window.addEventListener('popstate', this.setFromHistory);
    }

    componentWillUnmount() {
        window.removeEventListener('popstate', this.setFromHistory);
    }

    setFromHistory = (event) => {
        this.setState({ selectedCategories: event.state['url'] });
    }

    handleSelectCategory(e) {
        const selectedItem = e.target.name;
        const { selectedCategories } = this.state;
        let selected = [];
        let url = '';

        if (selectedCategories.includes(selectedItem) && selectedCategories.length === 1) {
            selected = [];
            // window.history.pushState({ url }, '', url);
        } else if (selectedCategories.includes(selectedItem) && selectedCategories.length > 1) {
            selected = selectedCategories.filter((item) => item !== selectedItem);
        } else {
            selected = [...selectedCategories, selectedItem];
        }
        
        this.setState({
            selectedCategories: selected
        });
        
        if (selected.length === 1) {
            url += '/?categories=' + selected[0];
        } else if (selected.length > 1) {
            url += '/?categories=' + selected[0];
            for (let i = 1; i < selected.length; i++) {
                url += ',' + selected[i];
            }
        }

        window.history.pushState({ url }, '', url);
    }

    // handleResetClick() {
    //     this.setState({
    //                     sale: 0,
    //                     selectedCategories: []
    //                 });
    //     window.history.pushState({}, '', '/');
    // }

    render() {
        const {selectedCategories} = this.state;
        const { minValue, maxValue, sale, filteredProducts } = store.getState();
        // const filteredProducts = getFilteredProducts(data, minValue, maxValue, sale, selectedCategories);
        // временные логи
        console.log('selectedCategories from render', selectedCategories);
        console.log('filteredProducts from render', filteredProducts);
        console.log('minValue from render', minValue);
        console.log('maxValue from render', maxValue);

        return (
            <CategoryContext.Provider value={{
                ...this.state,
                filteredProducts,
                handleSelectCategory: this.handleSelectCategory}}>
                <ProductPage />
            </CategoryContext.Provider>
        );
    }
}

export { App, CategoryContext };
