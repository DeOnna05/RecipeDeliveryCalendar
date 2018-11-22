import React from 'react';
import axios from 'axios';
import { withRouter } from 'react-router-dom';
import { getJwt } from './Bearer';

class Auth extends React.Component {
    state = {
        user: undefined
    }

    componentDidMount() {
        this.getUser();
    }

    getUser() {
        const jwt = getJwt();
        if (!jwt) {
            this.setState({
                user: null
            });
            return
        }
        axios.get('/getUser', {
            headers: { Authorization: getJwt() }
        }).then(res => {
            this.setState({
                user: res.data
            })
        });
    }

    render() {
        const {user} = this.state;
        if (user === undefined) {
            return (
                <div>Loading...</div>
            );
        }
        if(user === null) {
            this.props.history.push('/login');
        }
        return this.props.children;
    }
}

export default withRouter(Auth);