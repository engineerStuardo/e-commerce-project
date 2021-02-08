import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { compose } from 'redux';

import { CartDropdownButton } from './cart-dropdown-styles';

import { toggleCartHidden } from '../../redux/cart/cart-actions';

const CartDropdownButtonContainer = ({ history, setToggleCartHidden }) => (
  <CartDropdownButton
    onClick={() => {
      history.push('/checkout');
      setToggleCartHidden();
    }}
  >
    GO TO CHECKOUT
  </CartDropdownButton>
);

const mapDispatchToProps = dispatch => ({
  setToggleCartHidden: () => dispatch(toggleCartHidden()),
});

const exportButton = compose(
  withRouter,
  connect(null, mapDispatchToProps)
)(CartDropdownButtonContainer);

export default exportButton;
