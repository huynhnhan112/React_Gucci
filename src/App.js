import { createBrowserHistory } from 'history';
import { Route, Router, Switch } from 'react-router-dom'
import './App.css';
import React, { Children } from 'react';
import {HomeTemplate} from './templates/HomeTemplate/HomeTemplate';
import Home from './pages/Home/Home';
import Women from './pages/Women/Women';
import Gift from './pages/Gift/Gift';
import New from './pages/New/New';
import HandBag from './pages/HandBag/HandBag';
import Men from './pages/Men/Men';
import MX from './pages/MX/MX';
import Kid from './pages/Kid/Kid';
import Jewelry from './pages/Jewelry/Jewelry';
import Beauty from './pages/Beauty/Beauty';
import Decor from './pages/Decor/Decor';
import Vault from './pages/Vault/Vault';

export const history = createBrowserHistory();


function App() {
  return (
    <Router history={history}>
      <Switch>
        <HomeTemplate path="/home" exact Component={Home} />
        <HomeTemplate path="/gift" exact Component={Gift} />
        <HomeTemplate path="/new" exact Component={New} />
        <HomeTemplate path="/handbag" exact Component={HandBag} />
        <HomeTemplate path="/women" exact Component={Women} />
        <HomeTemplate path="/men" exact Component={Men} />
        <HomeTemplate path="/mx" exact Component={MX} />
        <HomeTemplate path="/kid" exact Component={Kid} />
        <HomeTemplate path="/jewelry" exact Component={Jewelry} />
        <HomeTemplate path="/beauty" exact Component={Beauty} />
        <HomeTemplate path="/decor" exact Component={Decor} />
        <HomeTemplate path="/vault" exact Component={Vault} />


        <HomeTemplate path="/" exact Component={Home} />
      </Switch>
    </Router>
  )
}

export default App;
