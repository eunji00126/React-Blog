import React, {Component} from 'react';
import styled from 'styled-components';
import Header from './Layout/Header';
import Navigation from './Layout/Navigation';
import Footer from './Layout/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import Router from './Routes/Router';
import Store from './Store/Store';
import { ApolloProvider } from "react-apollo";
import createApolloClient from "./apollo";


class App extends Component {

  constructor(props){
    super(props)
    this.state = {
      logged:false,
      onLogin:this.onLogin,
      onLogout:this.onLogout
    }
  }

  //login func

  onLogin = () => {
    this.setState({
      logged:true
    });
  }
//logout func
  onLogout = () => {
    this.setState({
      logged:false
    });

    const provider = window.sessionStorage.getItem('provider');
    if(provider==='kakao'){
       window.Kakao.Auth.logout(function(){
        console.log("Kakao Logout");
      });
    }
    window.sessionStorage.clear();
  }

  componentDidMount(){
    const id = window.sessionStorage.getItem('id');
    if(id){
      this.onLogin();
    }else{
      this.onLogout();
    }
  }
  
  

  render(){

    const { logged, onLogout } = this.state;
    const client = createApolloClient();

    return(
      <ApolloProvider client={client}>
          <Store.Provider value={this.state}>
          <Layout>
            <Header logged={logged} onLogout={onLogout}/>
            <Navigation/>
            <Content>
            <Router/>
              </Content>
              <FooterContainer>
                <Footer/>
              </FooterContainer>
            </Layout>
        </Store.Provider>
        </ApolloProvider>
    );
  }
}

const Layout = styled.div`
  margin:0 auto;
  display:flex;
  width:100%;
  flex-flow:row wrap;
`
const Content = styled.div`
  margin:0 auto;
  `
  
const FooterContainer = styled.div`
  width:100%;
`

export default App;