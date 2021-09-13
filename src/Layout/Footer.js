import React, {Component} from 'react';
import styled from 'styled-components';

class Footer extends Component{
    render(){
        return(
            <>
            <FooterContainer>
            <footer class="footer mt-auto py-3 bg-primary">
                <div class="container">
                <span class="align-items-center justify-content-center my-auto">Eunji's Test Blog</span>
            </div>
        </footer>
            </FooterContainer>
            </>
        )
    }
}

export default Footer;

const FooterContainer = styled.div`
    width:100%;
`