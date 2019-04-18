import React from 'react';
import { Router, Route } from 'react-router-dom';
import { connect } from 'react-redux';

import { History } from './backend/History';
import { AlertActions } from './actions/AlertActions';
import { PRoute } from './PRoute';
import  Dashboard  from './Dashboard';
import LoginPage  from './LoginPage';
import RegisterPage from './RegisterPage';

class App extends React.Component {
    constructor(props) {
        super(props);
        const { dispatch } = this.props;
        History.listen((location, action) => {
            dispatch(AlertActions.clear());
        });
    }

    render() {
        const { alert } = this.props;
        return (
            <div className="jumbotron">
                <div className="container">
                    <div className="col-sm-8 col-sm-offset-2">
                        {alert.message &&
                            <div className={`alert ${alert.type}`}>{alert.message}</div>
                        }
                        <Router History={History}>
                            <div>
                                <PRoute exact path="/" component={Dashboard} />
                                <Route path="/login" component={LoginPage} />
                                <Route path="/register" component={RegisterPage} />
                            </div>
                        </Router>
                    </div>
                </div>
            </div>
        );
    }
}

function mapStateToProps(state) {
    const { alert } = state;
    return {
        alert
    };
}

export default connect(mapStateToProps)(App);