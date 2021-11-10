import React from 'react';
import ProductPage from './components/ProductPage/ProductPage.js';
import data from './products.json';
import { maxBy, minBy, toInt } from 'csssr-school-utils';
// import * as R from 'ramda';
  
function getMinValue(arr) {
    return toInt(minBy((obj) => toInt(obj.price), arr).price);
}
  
function getMaxValue(arr) {
    return toInt(maxBy((obj) => toInt(obj.price), arr).price);
}

function getFilteredProducts(arr, min, max, sale, category) {
    return arr.filter((item) => {
        const priceItem = toInt(item.price);
        if (item.discount >= sale) {
            if (category == '') {
                return (priceItem >= min) && (priceItem <= max);
            }
            else {
                return (priceItem >= min) && (priceItem <= max) && (item.category === category);
            }
        }
    });
}

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

const categories = {
    clothes: 'clothes',
    books: 'books',
}

const CategoryContext = React.createContext({
    toggleCategory: () => {},
    category: categories.clothes,
});

class App extends React.PureComponent {
    constructor(props) {
        super(props);
        const url = window.location.pathname.substr(1);
        window.history.replaceState({ url }, 'title', window.location.pathname);
        this.state = {
            minValue: getMinValue(data),
            maxValue: getMaxValue(data),
            sale: 0,
            category: '',
            toggleCategory: this.toggleCategory,
        
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleResetClick = this.handleResetClick.bind(this);
        this.toggleCategory = this.toggleCategory.bind(this);
    }

    componentDidMount() {
        window.addEventListener('popstate', this.setFromHistory);
    }

    componentWillUnmount() {
        window.removeEventListener('popstate', this.setFromHistory);
    }

    setFromHistory = (event) => {
        this.setState({ category: event.state['url'] });
    }

    toggleCategory(e) {
        this.setState({
            category: e.target.name === categories.clothes ? categories.books : categories.clothes
        });
        const url = e.target.name;
        window.history.pushState({ url }, 'title', url);
    }

    handleChange(event) {
        if (event.target.value === '') {
            this.setState({
                [event.target.name]: event.target.value
            }); 
        } else {
            this.setState({
                [event.target.name]: parseInt(event.target.value)
            }); 
        }
    }

    handleResetClick() {
        this.setState({ minValue: getMinValue(data),
                        maxValue: getMaxValue(data),
                        sale: 0,
                        category: ''
                    });
    }

    render() {
        const {minValue, maxValue, sale, category} = this.state;
        const filteredProducts = getFilteredProducts(data, minValue, maxValue, sale, category);
        return (
            <CategoryContext.Provider value={{
                ...this.state,
                toggleCategory: this.toggleCategory}}>
                <ProductPage
                    filteredProducts={filteredProducts}
                    minValue={minValue}
                    maxValue={maxValue}
                    sale={sale}
                    handleChange={this.handleChange}
                    handleResetClick={this.handleResetClick}
                />;
            </CategoryContext.Provider>
        );
    }
}

export { App, CategoryContext }; 
