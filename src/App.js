import { createBrowserHistory } from 'history';
import { BrowserRouter, Route, Router, Switch } from 'react-router-dom'
import './App.css';
import React from 'react';
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
import SavedItems from './pages/SavedItems/SavedItems';
import PageNotFound from './pages/PageNotFound/PageNotFound';

export const history = createBrowserHistory();


function App() {
  return (
    <BrowserRouter history={history}>
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
        <HomeTemplate path="/saveditems" exact Component={SavedItems} />

        <HomeTemplate path="/" exact Component={Home} />
        <PageNotFound path="*" exact Component={PageNotFound} />
      </Switch>
    </BrowserRouter>
  )
}

export default App;
