import React from 'react';
import './header.styles.scss';
import { Link } from 'react-router-dom';
import { ReactComponent as Logo } from'./crown.svg';
import { ReactComponent as LightLogo } from'./crown-light.svg';
import { auth } from '../../firebase/firebase.util';
import $ from 'jquery';
import {connect} from 'react-redux';
import CartIcon from '../cart-icon/cart-icon.component';
import CartDropdown from '../cart-dropdown/cart-dropdown.component';
import { selectCartHidden } from '../../redux/cart/cart.selectors';
import { selectCurrentUser } from '../../redux/user/user.selectors';
import { createStructuredSelector } from 'reselect';

class Header extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            blackImage:true
        }
      }
    stateHandler = (state) => {
    this.setState(state);
    }
    listenScrollEvent = (e,stateHandler) => {
        $(function() {
            $(window).on("scroll", function() {
                if($(window).scrollTop() > 50) {
                    $(".header").addClass("active");
                    stateHandler({
                        blackImage:false
                    })
                } else {
                   $(".header").removeClass("active");
                   stateHandler({
                       blackImage:true
                   })
                }
            });
        });
      }
    componentDidMount() {
    window.addEventListener('scroll', this.listenScrollEvent(this,this.stateHandler))
    }

    componentWillUnmount() {
        window.removeEventListener("scroll", this.listenScrollEvent(this,this.stateHandler));
    }
    render(){
        const {currentUser,hidden} = this.props;
        return(
            <div className='header'>
                <Link to='/' className='logo-container'>
                    { this.state.blackImage ?
                        <Logo className='logo'/>
                        :<LightLogo className='logo'/>
                    }
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
                    <CartIcon image={this.state.blackImage}/>
                </div>
                {hidden ? null :<CartDropdown/>}
        </div>
        );
    }
}


const mapStateToProps=createStructuredSelector({
    currentUser:selectCurrentUser,
    hidden:selectCartHidden,
})

export default connect(mapStateToProps)(Header);