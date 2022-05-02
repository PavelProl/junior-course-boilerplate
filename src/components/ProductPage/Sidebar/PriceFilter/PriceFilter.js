import React from 'react';

import LogRender from '../../../../LogRender';
import { MinInputContainer } from '../PriceFilter/MinInputContainer';
import { MaxInputContainer } from '../PriceFilter/MaxInputContainer';

import s from './PriceFilter.module.css';

class PriceFilter extends LogRender {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className={s.form}>
                <div className={s.form__title}>Цена</div>
                <form>
                    <div className={s.range__wrapper}>
                        <label>
                            от
                            <MinInputContainer
                                className={s.range__input}
                            />
                        </label>
                        <label>
                            до
                            <MaxInputContainer
                                className={s.range__input}
                            />
                        </label>
                    </div>
                </form>
            </div>
        );
    }
}

export default PriceFilter;
