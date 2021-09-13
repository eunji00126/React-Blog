import React, {Component} from 'react';
import Store from '../Store/Store';
import Login from './Login';

const LoginContainer = () => (
    <Store.Consumer>
        {store => (
            <Login onLogin={store.onLogin}/>)}
    </Store.Consumer>
)


export default LoginContainer; 