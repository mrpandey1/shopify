import React from 'react';
import './checkout.styles.scss';
import {selectCartItems, selectCartTotal} from '../../redux/cart/cart.selectors';
import { createStructuredSelector } from 'reselect';
import { connect } from 'react-redux';


const CheckoutPage=({cartItems,total})=>(
    <div className='checkout-page topmargin'>
        <div className='checkout-header'>
            <div className='header-block'>
                <span>Product</span>
            </div>
            <div className='header-block'>
                <span>Description</span>
            </div>
            <div className='header-block'>
                <span>Quantity</span>
            </div>
            <div className='header-block'>
                <span>Price</span>
            </div>
            <div className='header-block'>
                <span>Remove</span>
            </div>
        </div>
        {
            cartItems.map(cartItem=>
                cartItem.name)
        }
        <div className='total'>
            <span>Total : ${total}</span>
        </div>
    </div>
)

const mapStateToProps=createStructuredSelector({
    cartItems:selectCartItems,
    total:selectCartTotal
})

export default connect(mapStateToProps)(CheckoutPage);