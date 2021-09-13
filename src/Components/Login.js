import React, { Component } from 'react';
import styled from 'styled-components';
import KaKaoLogin from 'react-kakao-login';
import { graphql} from 'react-apollo';
import {flowRight as compose} from 'lodash';
import { login } from '../queries';
import {withRouter} from 'react-router-dom';

interface State {
    data: any;
}

class Login extends Component<any, State> {
    constructor(props: any) {
        super(props);
        this.state = {
            data: 'kakao'
        }
    }

    //login success

    responseKaKao = (res: any) => {
        this.setState({
            data: res
        });
        alert(JSON.stringify(this.state.data))
        this.doSignUp();
    }

    //login fail

    responseFail = (err) => {
        alert(err);
    }

    //login mutation

    doSignUp = async() => {
        const {id, name, provider} = this.state;
        const user = await this.props.LoginMutation({
            variables:{
                id:String(id),
                name,
                provider
            }
        });
        if(user.data.login){
            window.sessionStorage.setItem('id',id);
            window.sessionStorage.setItem('name',user.data.login.name);
            window.sessionStorage.setItem('provider',provider);
            this.props.onLogin();
            this.props.history.push('/');
        }else
            alert('로그인에 실패하셨습니다.');
        
        
    }

    render() {
        return (
            <>
                <Text>
                    <h1>카카오톡 간편 로그인</h1>
                    <h4>로그인 후 더 많은 혜택을 누리세요!</h4>
                    {/* <StKaKaoLogin>
                        <img src={img} alt="a" onClick={this.loginWithKakao} />
                    </StKaKaoLogin> */}
                    <br></br>
                    <KaKaoBtn
                        jsKey={'cb7e85d5124e2a89376237eaf879e075'}
                        buttonText="KaKao"
                        onSuccess={this.responseKaKao}
                        onFailure={this.responseFail}
                        getProfile={true}
                    />

                </Text>

            </>
        );
    }
}

const Text = styled.div`
    cursor: pointer;
    /* border-radius:10px; */
    /* width: 200px; */
    /* &:hover{
        box-shadow: 0 0px 0px 0 rgba(0, 0, 0, 0.2), 0 0px 20px 0 rgba(0, 0, 0, 0.19);
    } */
`

const KaKaoBtn = styled(KaKaoLogin)`
    padding: 0;
    width: 190px;
    height: 44px;
    line-height: 44px;
    color: #783c00;
    background-color: #FFEB00;
    border: 1px solid transparent;
    border-radius: 3px;
    font-size: 16px;
    font-weight: bold;
    text-align: center;
    cursor: pointer;
    &:hover{
        box-shadow: 0 0px 15px 0 rgba(0, 0, 0, 0.2)
    }
`

export default compose(
    graphql(login,{name:'LoginMutation'})
)(withRouter(Login));