import { createBrowserHistory } from 'history';
import { Route, Router, Switch } from 'react-router-dom'
import './App.css';
import React from 'react';
import Header from './templates/HomeTemplate/Layout/Header/Header';
import HomeTemplate from './templates/HomeTemplate/HomeTemplate';
import Footer from './templates/HomeTemplate/Layout/Footer/Footer';
import Home from './pages/Home/Home';



export const history = createBrowserHistory();


function App() {
  return (
    <Router history={history}>
      <Header />
      <Switch>
        <HomeTemplate path="/" exact component={Home} />
        

      </Switch>
      <Footer />
    </Router>
  )
}

export default App;
