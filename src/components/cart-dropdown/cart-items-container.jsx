import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import { selectCartItems } from '../../redux/cart/cart-selector';

import CartItem from '../cart-item/cart-item-component';

import {
  CartItemsContainer,
  EmptyMessageContainer,
} from './cart-dropdown-styles';

const CartItemContainer = ({ cartItems }) => {
  return (
    <CartItemsContainer>
      {cartItems.length ? (
        cartItems.map(cartItem => (
          <CartItem key={cartItem.id} item={cartItem} />
        ))
      ) : (
        <EmptyMessageContainer>Your cart is empty</EmptyMessageContainer>
      )}
    </CartItemsContainer>
  );
};

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
});

export default compose(withRouter, connect(mapStateToProps))(CartItemContainer);
