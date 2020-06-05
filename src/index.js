import React from 'react';  
import ReactDOM from 'react-dom';  
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'  
import 'bootstrap/dist/css/bootstrap.css';
import './index.css'; 
import HeaderNavbar from './HeaderNavbar' 
import Home from './Home'
import Footer from './Footer'
import About from './About'  
import Contact from './Contact'  
import Notfound from './NotFound'  
  
const routing = (  
  <Router>  
    <div>
      <HeaderNavbar /> 
      <Switch>  
         <Route exact path="/" component={Home} />  
         <Route path="/About" component={About} />  
         <Route path="/Contact" component={Contact} />  
         <Route component={Notfound} />  
      </Switch>
      <Footer />  
    </div>  
  </Router>  
)  
ReactDOM.render(routing, document.getElementById('root'));  