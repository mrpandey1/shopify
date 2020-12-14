import React from 'react';

import CustomButton from '../custom-button/custom-button.component';
import {selectCartItems} from '../../redux/cart/cart.selectors';
import './cart-dropdown.styles.scss';
import CartItem from '../cart-item/cart-item.component';
import {connect} from 'react-redux';

const CartDropdown = ({cartItems}) => (
    <div className='cart-dropdown'>
        <div className='cart-items'>
            {
            cartItems.map(cartItem=>
            <CartItem key={cartItem.id} item={cartItem}/>)
            }
        </div>
        <CustomButton>GO TO CHECKOUT</CustomButton>
    </div>
)

const mapstateToProps=(state)=>({
    cartItems:selectCartItems(state)
})

export default connect(mapstateToProps)(CartDropdown);