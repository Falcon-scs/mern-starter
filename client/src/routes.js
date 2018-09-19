import React, {Component} from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Login from './components/login/login';

class Routes extends Component {
    render() {
        return(
            <Router >
                <Route path="/" component={Login} />
            </Router>
        );
    }
}

export default Routes;