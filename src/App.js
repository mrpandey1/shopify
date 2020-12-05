import React from 'react';
import './App.css';
import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import Header from './components/header/header.component';
import SignInAndSignUp from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';
import { Switch, Route} from 'react-router-dom';
import { auth } from './firebase/firebase.util';
class App extends React.Component {
  constructor(){
    super();
    this.state={
      currentUser:null
    }
  }
  unsubscribeFromAuth=null
  componentDidMount(){
    unsubscribeFromAuth=auth.onAuthStateChanged(user=>{
      this.setState({currentUser:user});
      console.log(user);
    })
  }
  componentWillUnmount(){
    this.unsubscribeFromAuth();
  }
  render(){
  return (
    <div>
      <Header/>
      <Switch>
        <Route exact path='/' component={HomePage}/> 
        <Route path='/shop' component={ShopPage}/> 
        <Route path='/signin' component={SignInAndSignUp}/> 
      </Switch>
    </div>
  );
  }
}
  

export default App;
