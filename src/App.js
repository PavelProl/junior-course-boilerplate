import React from 'react';
import ProductPage from './components/ProductPage/ProductPage.js';

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

class App extends React.PureComponent {
    constructor(props) {
        super(props);

        //перезаписываем первоначальный URL, чтобы при возвращении к самому первому реальному URL в нашей истории не было ошибки (когда свойство state события popstate будет равно null)
        // const url = window.location.pathname.substr(1);
        // window.history.replaceState({ url }, 'title', window.location.pathname);
        
        // if (selectedCategories.length === 0) {
        //     window.history.replaceState({ url: selectedCategories }, '', '/');
        // } else {
        //     window.history.replaceState({ url: selectedCategories }, '', '?category=' + selectedCategories);
        // }
    }

    componentDidMount() {
        window.addEventListener('popstate', this.props.setFromHistory);
    }

    componentWillUnmount() {
        window.removeEventListener('popstate', this.props.setFromHistory);
    }

    // setFromHistory = (event) => {
    //     this.props.selectedCategories = event.state['url'];
    // }

    render() {
        return <ProductPage />
    }
}

export { App };
