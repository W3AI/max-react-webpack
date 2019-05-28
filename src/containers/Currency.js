import React, { Component } from 'react';

import CurrencyImage from '../components/CurrencyImage/CurrencyImage';

class Currency extends Component {
    render () {
        return (
            <div>
                <h1>The Currency</h1>
                <CurrencyImage />
            </div>
        );
    }
}

export default Currency;