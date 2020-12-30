import React from 'react';
import {ReactComponent as ShoppingIcon} from './shopping-bag.svg';
import {ReactComponent as ShoppingIconWhite} from './shopping-bag-light.svg';
import './cart-icon.styles.scss';
import {connect} from 'react-redux';
import {toggleCartHidden} from '../../redux/cart/cart.actions';
import { selectCartItemsCount } from '../../redux/cart/cart.selectors';
import { createStructuredSelector } from 'reselect';

const CartIcon = ({toggleCartHidden,itemCount,image}) => (
    <div className='cart-icon' onClick={toggleCartHidden}>
        {
            image?
            <ShoppingIcon className='shopping-icon'/>:
            <ShoppingIconWhite className='shopping-icon'/>
        }
        <span className={`item-count ${image ? 'black':'white'}`}>{itemCount}</span>
    </div>
)
const mapDispatchToProps = dispatch => ({
    toggleCartHidden: () => dispatch(toggleCartHidden())
  });

const mapStateToProps=createStructuredSelector({
    itemCount:selectCartItemsCount
})

export default connect(mapStateToProps,mapDispatchToProps)(CartIcon);