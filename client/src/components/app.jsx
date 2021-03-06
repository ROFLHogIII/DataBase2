import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';

import BlogsList from './BlogsList';
import SingleBlog from './SingleBlog';
import PrivateRoute from './auth/privateRoute';
import Login from './auth/login';
import Logout from './auth/logout';

class Navigation extends Component {

    render() {
        return (
            <Router>
                <Fragment>
                    <Switch>
                        <Route exact path="/" component={BlogsList} />
                        <Route exact path="/singleblog/:id" component={SingleBlog}/>
                        <Route path="/login" component={Login} />
                        <Route path="/logout" component={Logout} />
                    </Switch>
                </Fragment>
            </Router>
        )
    }
}

export default Navigation;