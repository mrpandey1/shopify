import React from 'react';
import CollectionPreview from '../../components/collection-preview/collection-preview.component';
import { selectCollections } from '../../redux/shop/shop.selectors';
import { connect } from 'react-redux';
import { createStructuredSelector} from 'reselect';

const ShopPage =({ collections })=>(
    <div className='shop-page topmargin bodyPadding'>
        {
            collections.map(({id,...otherCollectionProps})=>(
                <CollectionPreview key={id} {...otherCollectionProps}/>
            ))
        }
    </div>
);

const mapStateToProps=createStructuredSelector({
    collections:selectCollections
})
export default connect(mapStateToProps)(ShopPage);