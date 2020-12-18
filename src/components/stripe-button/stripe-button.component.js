import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton=({price})=>{
    const priceToPay=price*100;
    const publishableKey="pk_test_51HzbntHq63utOpxNfG3jor5b1Dvw4bkYIYx7AevRzceMoVOuxray9Jj84numIHlcpZvnmxGUwJoaTYMCYvTjrqRo00anU2tcE4";
    const onToken=token=>{
        console.log(token);
        alert('Payment Successful')
    }
    return (
        <StripeCheckout
            currency='INR'
            label='Pay Now'
            name='Shopify'
            billingAddress
            shippingAddress
            image='https://svgshare.com/i/CUz.svg'
            description={`Your total is Rupees ₹${price}`}
            amount={priceToPay}
            panelLabel='Pay Now'
            token={onToken}
            stripeKey={publishableKey}
        />
    )
};

export default StripeCheckoutButton;