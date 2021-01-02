import React from 'react';
import './checkout.styles.scss';
import {selectCartItems, selectCartTotal} from '../../redux/cart/cart.selectors';
import { createStructuredSelector } from 'reselect';
import { connect } from 'react-redux';
import CheckoutItem from '../../components/checkout-item/checkout-item.component';
import StripeCheckoutButton from '../../components/stripe-button/stripe-button.component';
import CartEmpty from '../../components/cart-empty/cart-empty.component';
const CheckoutPage=({cartItems,total})=>{
    return(
    cartItems.length>=1? 
    <div className='checkout-page topmargin'>
        <div className='checkout-header'>
            <div className='header-block'>
                <span>Product</span>
            </div>
            <div className='header-block description'>
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
                <CheckoutItem key={cartItem.id} cartItem={cartItem}/>)
        }
        <div className='total'>
            {
            cartItems.length>=1? <span>Total : ₹{total}</span>:
            null
            }
        </div>
        {
        cartItems.length>=1? <StripeCheckoutButton price={total}/>:
        null
        }
    </div>:
    <CartEmpty/>
    );
    }

const mapStateToProps=createStructuredSelector({
    cartItems:selectCartItems,
    total:selectCartTotal
})

export default connect(mapStateToProps)(CheckoutPage);