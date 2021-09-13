import React, {Component} from 'react';
import styled from 'styled-components';
import MainGrid from '../Components/MainGrid';

class Main extends Component{
    render(){
        return(
                <Container>
                <MainGrid/>
                </Container>
           
        );
    }
}


export default Main;

const Container = styled.div`
    margin:0 auto;
`
