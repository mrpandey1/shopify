import React from 'react';
import './header.styles.scss';

import { Link } from 'react-router-dom';
import { ReactComponent as Logo } from'./crown.svg';
import { auth } from '../../firebase/firebase.util';
import $ from 'jquery';
import {connect} from 'react-redux';

class Header extends React.Component{
    componentDidMount=()=>{
        $(function() {
            $(window).on("scroll", function() {
                if($(window).scrollTop() > 50) {
                    $(".header").addClass("active");
                } else {
                   $(".header").removeClass("active");
                }
            });
        });
    }
    render(){
        const {currentUser} = this.props;
        return(
            <div className='header'>
                <Link to='/' className='logo-container'>
                    <Logo className='logo'/>
                </Link>
                <div className='options'>
                    <Link className='option' to='/shop'>
                        SHOP
                    </Link>
                    <Link className='option' to='/shop'>
                        CONTACT
                    </Link>
                    {
                        currentUser?
                        <div className='option' onClick={()=>auth.signOut()}>SIGNOUT</div>
                        :
                        <Link className='option' to='/signin'>
                            {currentUser?'SIGNOUT':'SIGNIN'}
                        </Link>
                    }
                </div>
        </div>
        );
    }
}

const mapStateToProps=state=>({
    currentUser:state.user.currentUser
})

export default connect(mapStateToProps)(Header);