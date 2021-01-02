import React from 'react';

import CustomButton from '../custom-button/custom-button.component';
import {selectCartItems} from '../../redux/cart/cart.selectors';
import './cart-dropdown.styles.scss';
import CartItem from '../cart-item/cart-item.component';
import {connect} from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { withRouter } from 'react-router-dom';
import {toggleCartHidden} from '../../redux/cart/cart.actions'

const CartDropdown = ({cartItems,history,dispatch}) => (
    <div className='cart-dropdown'>
        <div className='cart-items'>
            {
            cartItems.length?
            cartItems.map(cartItem=>
            <CartItem key={cartItem.id} item={cartItem}/>)
            :
            <span className='empty-message'>Your cart is empty</span>
            }
        </div>
        {
            cartItems.length?
        <CustomButton onClick={()=>{
            history.push('/checkout');
            dispatch(toggleCartHidden());
            }}>GO TO CHECKOUT</CustomButton>:
            null
        }
    </div>
)

const mapstateToProps=createStructuredSelector({
    cartItems:selectCartItems
})

export default withRouter(connect(mapstateToProps)(CartDropdown));