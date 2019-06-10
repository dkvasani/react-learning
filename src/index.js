import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import { Route, Link, BrowserRouter as Router } from 'react-router-dom';
import * as serviceWorker from './serviceWorker';
import ContainerCom from './components/container';
import Header from './components/header';
import Users from './components/users';
import Contact from './components/contact';
import StockDetails from './components/details';
import 'bootstrap/dist/css/bootstrap.css';

const routing = (
    
    <Router>
      <div>
      <Header />
        <Route path="/users" component={Users} />
        <Route path="/contact" component={Contact} />
        <Route path="/details/:stockCode" component={StockDetails} />
        <Route exact path="/" component={ContainerCom} />
      </div>
    </Router>
  )
  ReactDOM.render(routing, document.getElementById('root'))

//ReactDOM.render(<Counters />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
