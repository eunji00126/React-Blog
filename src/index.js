import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter as Router } from 'react-router-dom';
import {GraphQLServer} from 'graphql-yoga';
import mongoose from 'mongoose';
import resolvers from './resolvers';
import typeDefs from './typeDefs';
require("dotenv").config(); // 환경변수를 위한 dotenv

//mongoDB server connect



mongoose.connect('mongodb+srv://eunji0126:1482@cluster0.0poqf.mongodb.net/react-blog?retryWrites=true&w=majority'); // 기본 설정에 따라 포트가 상이 할 수 있습니다.
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function callback () {
	console.log("mongo db connection OK.");
});


//graphql server connect

const server = new GraphQLServer({typeDefs,resolvers});
server.start(()=> console.log(`server is running at http://localhost:3000`));

ReactDOM.render(
  <Router>
    <App />
  </Router>
  ,document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
//reportWebVitals();
