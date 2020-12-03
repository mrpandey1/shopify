import React from 'react';
import SHOP_DATA from './shop.data'

class ShopPage extends React.Component{
    constructor(props){
        super(props);
        this.state={
            collectios:SHOP_DATA
        };
    }
    render(){
        return<div>Shop Page</div>
    }
}