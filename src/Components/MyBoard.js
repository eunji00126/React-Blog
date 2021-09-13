import React, {Component} from 'react';
import withLogin from './LoginHOC';


class MyBoard extends Component{
    render(){
        return(
            <div>
             나의 게시판
            </div>
        );
    }
}

export default withLogin(MyBoard);