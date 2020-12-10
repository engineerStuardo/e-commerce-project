import React from 'react';
import { Route, Switch } from 'react-router-dom';

import './App.scss';

import HomePage from './pages/homepage/HomePage';
import ShopPage from './pages/shop/ShopPage';
import Header from './components/header/header';
import SignInAndOutPage from './pages/sign-in-and-up/sign-in-and-up';

function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route path='/shop' component={ShopPage} />
        <Route path='/signin' component={SignInAndOutPage} />
      </Switch>
    </div>
  );
}

export default App;
