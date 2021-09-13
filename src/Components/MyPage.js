import React, {Component} from 'react';
import withLogin from './LoginHOC';


class MyPage extends Component{
    render(){
        return(
            <div>
                나의 페이지
            </div>
        )
    }
}

export default withLogin(MyPage);
