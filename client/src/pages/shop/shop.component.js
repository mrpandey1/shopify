import React, { lazy, Suspense, useEffect } from 'react';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';
import { fetchCollectionsStart } from '../../redux/shop/shop.actions';
import Spinner from '../../components/spinner/spinner.components';
import ErrorBoundary from  '../../components/error-boundary/error-boundary.component';
const CollectionPageContainer=lazy(()=>import('../../pages/collection/collection.container'))
const CollectionsOverviewContainer=lazy(()=>import('../../components/collections-overview/collections-overview-container'))

const ShopPage=({fetchCollectionsStart,match})=> {
    
  useEffect(()=>{
    fetchCollectionsStart();
  },[fetchCollectionsStart]);
  return (
      <div className='shop-page topmargin bodyPadding'>
        <ErrorBoundary>
          <Suspense fallback={<Spinner/>}>
            <Route
              exact
              path={`${match.path}`}
              component={CollectionsOverviewContainer}
            />
            <Route
              path={`${match.path}/:collectionId`}
              component={CollectionPageContainer}
            />
          </Suspense>
        </ErrorBoundary>
      </div>
    );
}
  
  const mapDispatchToProps = dispatch => ({
    fetchCollectionsStart:()=>dispatch(fetchCollectionsStart())
  });

  export default connect(
    null,
    mapDispatchToProps
  )(ShopPage);
  