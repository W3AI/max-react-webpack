import React, { Component } from 'react';
import { Link, Route } from 'react-router-dom';

import Users from './containers/Users';
import Currnecy from './containers/Currency';

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
                    <Route path="/currency" component={} />
                </div>
            </div>
        );
    }
}