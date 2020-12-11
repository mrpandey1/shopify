import React from 'react';
import CustomButton from '../custom-button/custom-button.component';
import './collection-item.styles.scss';

const CollectionItem=({ id, name, price,imageUrl})=>(
    <div className='collection-item'>
        <div 
        className='image'
        style={{
            backgroundImage:`url(${imageUrl})`
        }}
        />
        <div className='collection-footer'>
            <span classNam='name'>{name}</span>
            <span classNam='price'>{price}</span>
        </div>
        <CustomButton inverted>Add to cart</CustomButton>
    </div>
)

export default CollectionItem;