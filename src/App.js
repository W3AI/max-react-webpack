import React, { Component } from 'react';
import { Link, Route } from 'react-router-dom';

import Users from './containers/Users';
import asyncComponent from './hoc/asyncComponent';

const AsyncCurrency = asyncComponent(() => {
    return import('./containers/Currency.js');
});

class App extends Component {
    render () {
        return (
            <div>
                <div>
                    <Link to="/">Users</Link> | 
                    <Link to="/currency">Currency</Link>
                </div>
                <div>
                    <Route path="/" exact component={Users} />
                    <Route path="/currency" component={AsyncCurrency} />
                </div>
            </div>
        );
    }
}