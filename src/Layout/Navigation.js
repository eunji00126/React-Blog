import React, {Component} from 'react';
import styled from 'styled-components';
import {Link} from 'react-router-dom';

class Navigation extends Component {
    render(){
        return(
           <Nav>
               <NavList>
                   <NavItem><Link to='/about'>소개</Link></NavItem>
                   <NavItem><Link to='/board'>게시판</Link></NavItem>
                   <NavItem><Link to='/myBoard'>내 글보기</Link></NavItem>
                   <NavItem><Link to='/myPage'>마이페이지</Link></NavItem>  
               </NavList>
           </Nav>
        );
    }
}

export default Navigation;

const Nav = styled.div`
  width:100%;
  height:30px;
  border-bottom:1px solid #d1dbe4;
`
const NavList = styled.div`
  width:1080px;
  display:flex;
  margin:0 auto;

`

const NavItem = styled.div`
  width:80px;
  margin-left:60px;
  margin-top:5px;
  display:flex;
  
`