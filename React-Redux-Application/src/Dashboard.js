import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { UserActions } from './actions/UserActions';

class Dashboard extends React.Component {
    componentDidMount() {
        this.props.dispatch(UserActions.getAll());
    }

    handleDeleteUser(id) {
        return (e) => this.props.dispatch(UserActions.delete(id));
    }

    render() {
        const { user, users } = this.props;
        var columns = [
            'id',
            {key: 'name', label: 'Name'},
            {key: 'age', label: 'Age'},
            {key: 'gender', label: 'Gender'},
            {key: 'email', label: 'Email'},
            {key: 'phoneNo', label: 'PhoneNumber', cell: function( item, columnKey ){
                return <span>{ item.id }</span>;
            }}
        ];
        return (
            <div>
                <JsonTable rows={ items } columns={ columns } />
    
                <p>
                    <Link to="/login">Logout</Link>
                </p>
            </div>
        );
    }
}

function mapStateToProps(state) {
    const { users, authentication } = state;
    const { user } = authentication;
    return {
        user,
        users
    };
}

export default connect(mapStateToProps)(Dashboard);