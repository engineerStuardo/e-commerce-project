import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { withAlert } from 'react-alert';

import { GlobalStyle } from './global-styles';

import HomePage from './pages/homepage/home-component';
import ShopPage from './pages/shop/shop-component';
import SignInAndOutPage from './pages/sign-in-and-up/sign-in-and-up-component';
import CheckoutPage from './pages/checkout/checkout-component';

import Header from './components/header/header-component';

import { selectCurrentUser } from './redux/user/user-selector';
import { checkUserSession } from './redux/user/user-actions';

class App extends React.Component {
  unsubscribeFromAuth = null;

  componentDidMount() {
    const { checkUserSession } = this.props;
    checkUserSession();
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    const { currentUser } = this.props;
    return (
      <div>
        <GlobalStyle />
        <Header />
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route path='/shop' component={ShopPage} />
          <Route exact path='/checkout' component={CheckoutPage} />
          <Route
            exact
            path='/signin'
            render={() =>
              currentUser ? <Redirect to='/' /> : <SignInAndOutPage />
            }
          />
        </Switch>
      </div>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
});

const mapDispatchToProps = dispatch => ({
  checkUserSession: () => dispatch(checkUserSession()),
});

export default withAlert()(connect(mapStateToProps, mapDispatchToProps)(App));
