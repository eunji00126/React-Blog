import React, {Component} from 'react';
import styled from 'styled-components';
import {Link} from 'react-router-dom';

class Header extends Component {

    render(){

        const {logged, onLogout} = this.props;

        return(
            <Container>
                <Element>
                    {logged ?
                    <ShortCut><Link to='/' onClick={onLogout}>로그아웃</Link></ShortCut>:
                    <ShortCut><Link to='/Login'>로그인</Link></ShortCut>}
                    <Logo>
                        <p>Eunji's Blog</p>
                    </Logo>
                    <Search>
                        <Link to ='/' style={{textDecoration:'none',color:'#274046'}}>
                        <h1>React Blog</h1>
                        </Link>
                        </Search>
                </Element>
            </Container>
        );
    }
}

export default Header;

const Container = styled.div`
    
width:100%;
border-bottom:1px solid #d1dbe4;
color:#21209c;
font-family:'Poppins';
`

const Element = styled.div`

 margin:0 auto;
 width:1080px;
 height:100px;
 display:flex;
 flex-flow:row wrap;
`

const LoginContainer = styled.div`
 order:1;
 width:100%;
 height:20px;
 text-align:right;
 background:#abff;

`
const ShortCut = styled.div`
 order:1;
 width:100%;
 height:20px;
 text-align:right;
 background:#abff;
 `

 const Logo = styled.div`
 
  order:2;
  width:200px;
  height:80px;
 `

 const Search = styled.div`
 
  order:3;
  width:880px;
  height:80px;
  background:#fdb827;
  text-align:center;
`
