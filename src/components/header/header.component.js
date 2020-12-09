import React from 'react';
import { Link } from 'react-router-dom';
import './header.styles.scss';
import { ReactComponent as Logo } from'./crown.svg';
import { auth } from '../../firebase/firebase.util';
import $ from 'jquery';
class Header extends React.Component{
    constructor(props){
        super(props);
    }
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
        const currentUser=this.props.currentUser;
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

export default Header;