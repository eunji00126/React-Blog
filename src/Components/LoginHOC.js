import React, {Component} from 'react';
import Store from '../Store/Store';
import LoginContainer from './LoginContainer';

const withLogin = (WrappedComponent) =>

class MyLogin extends Component {
    render(){
        return(
            <Store.Consumer>
                {
                    store => {
                        if(store.logged === false)
                            return <LoginContainer/>;
                        else
                            return <WrappedComponent/>;
                    }
                }
            </Store.Consumer>
        );
    }
};

export default withLogin;