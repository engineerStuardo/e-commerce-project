import React from 'react';
import SHOP_DATA from './ShopData.js';
import PreviewCollection from '../../components/preview-collection/preview-collection';

class ShopPage extends React.Component {
  state = {
    collections: SHOP_DATA,
  };

  render() {
    const { collections } = this.state;

    return (
      <div className='shop-page'>
        {collections.map(({ id, ...otherProps }) => (
          <PreviewCollection key={id} {...otherProps} />
        ))}
      </div>
    );
  }
}

export default ShopPage;
