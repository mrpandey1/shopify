import React from 'react';
import { connect } from 'react-redux';

import CustomButton from '../custom-button/custom-button.component';
import { addItem } from '../../redux/cart/cart.actions';
import $ from 'jquery';
import './collection-item.styles.scss';

class CollectionItem extends React.Component {
    componentDidMount=()=>{
      $(document).ready(function(){
          $(this).scrollTop(0);
      });
    }
    render(){ 
      const {item,addItem}=this.props;
      const { name, price, imageUrl } = item;
      return (
        <div className='collection-item'>
          <div
            className='image'
            style={{
              backgroundImage: `url(${imageUrl})`
            }}
          />
          <div className='collection-footer'>
            <span className='name'>{name}</span>
            <span className='price'>₹{price}</span>
          </div>
          <CustomButton className='add-to-cart'  onClick={() => addItem(item)} inverted>
            Add to cart
          </CustomButton>
        </div>
      )
  }
};

const mapDispatchToProps = dispatch => ({
  addItem: item => dispatch(addItem(item))
});

export default connect(
  null,
  mapDispatchToProps
)(CollectionItem);
