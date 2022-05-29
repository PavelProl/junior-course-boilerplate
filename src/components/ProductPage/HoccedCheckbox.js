import React from 'react';

function selectCategory(e, state) {
    const selectedItem = e.target.name;
    const { selectedCategories } = state;
    let selected = [];
    // let url = '';

    if (selectedCategories.includes(selectedItem) && selectedCategories.length === 1) {
        selected = [];
        // window.history.pushState({ url }, '', url);
        window.history.pushState({}, '', '/');
    } else if (selectedCategories.includes(selectedItem) && selectedCategories.length > 1) {
        selected = selectedCategories.filter((item) => item !== selectedItem);
    } else {
        selected = [...selectedCategories, selectedItem];
    }

    return selected;
}

const HoccedCheckbox = (WrappedComponent) => {
    return class HOC extends React.Component {
        constructor(props) {
            super(props);
            this.handleSelectCategory = this.handleSelectCategory.bind(this);
        }
    
        handleSelectCategory(event, state) {
            let selectedCategories = selectCategory(event, state);
            this.props.handleSelectCategory(selectedCategories);
        }
    
        render() {
            return (
                <WrappedComponent 
                    {...this.props}
                    handleSelectCategory={this.handleSelectCategory}
                />
            );
        }
    }
 }

 export default HoccedCheckbox;
