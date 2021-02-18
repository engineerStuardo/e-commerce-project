import React from 'react';

import { CartDropdownContainer } from './cart-dropdown-styles';

import CartItemContainer from './cart-items-container';
import CartDropdownButtonContainer from './cart-dropdown-button-container';

const CartDropdown = () => (
  <CartDropdownContainer>
    <CartItemContainer />
    <CartDropdownButtonContainer />
  </CartDropdownContainer>
);

export default CartDropdown;
