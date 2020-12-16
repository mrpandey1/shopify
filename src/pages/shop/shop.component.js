import React from 'react';
import CollectionsOverview from '../../components/collections-overview/collections-overview.components';

const ShopPage =({ collections })=>(
    <div className='shop-page topmargin bodyPadding'>
        <CollectionsOverview/>
    </div>
);


export default ShopPage;