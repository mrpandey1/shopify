import React from 'react';
import './cart.empty.styles.scss';
import CustomButton from '../custom-button/custom-button.component';
import { Link } from 'react-router-dom';
const CartEmpty= () =>(
    <div className='cartEmpty'>
        <p>YOUR CART IS EMPTY START SHOPPING</p>
        <center>
            <Link className='shopbutton' to='/shop'>
                        SHOP
                    </Link>
        </center>
    </div>
);
export default CartEmpty;