import React from 'react';
import LogRender from '../../../../LogRender';
import HoccedPriceInput from '../PriceInput/PriceInput';

import s from './PriceFilter.module.css';

class PriceFilter extends LogRender {
    constructor(props) {
        super(props);
        this.handleMinChange = this.handleMinChange.bind(this);
        this.handleMaxChange = this.handleMaxChange.bind(this);
    }

    handleMinChange(event) {
        this.props.handleMinChange(event);
    }
    
    handleMaxChange(event) {
        this.props.handleMaxChange(event);
    }

    render() {
        return (
            <div className={s.form}>
                <div className={s.form__title}>Цена</div>
                <form>
                    <div className={s.range__wrapper}>
                        <label>
                            от
                            <HoccedPriceInput
                                className={s.range__input}
                                name="minValue"
                                value={this.props.minValue}
                                handleChange={this.handleMinChange}
                            />
                        </label>
                        <label>
                            до
                            <HoccedPriceInput
                                className={s.range__input}
                                name="maxValue"
                                value={this.props.maxValue}
                                handleChange={this.handleMaxChange}
                            />
                        </label>
                    </div>
                </form>
            </div>
        );
    }
}

export default PriceFilter;
