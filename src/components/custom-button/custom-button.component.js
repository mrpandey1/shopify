import React from 'react';
import './custom-button.styles.scss';

const CustomButton = ({children,isGoogleSignIn,...otherprops}) =>(
    <button className={`${isGoogleSignIn?'google-sign-in':''} custom-button`}{...otherprops}>
        {children}
    </button>
)
export default CustomButton;