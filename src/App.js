import React from 'react';
import { Route, Switch } from 'react-router-dom';

import './App.scss';

import HomePage from './pages/homepage/HomePage';
import ShopPage from './pages/shop/ShopPage';
import Header from './components/header/header';
import SignInAndOutPage from './pages/sign-in-and-up/sign-in-and-up';
import { auth } from './firebase/firebase.utils';

class App extends React.Component {
  state = {
    currentUser: null,
  };

  unsubscribeFromAuth = null;

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(user => {
      this.setState({ currentUser: user });
      console.log(user.displayName);
      console.log(user.photoURL);
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div>
        <Header currentUser={this.state.currentUser} />
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route path='/shop' component={ShopPage} />
          <Route path='/signin' component={SignInAndOutPage} />
        </Switch>
      </div>
    );
  }
}

export default App;
