import React from 'react';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { fetchCollectionsStartAsync } from '../../redux/shop/shop.actions';
import { selectIsCollectionFetching,selectIsCollectionLoaded } from '../../redux/shop/shop.selectors';
import WithSpinner from '../../components/with-spinner/with-spinner.component';

import CollectionsOverview from '../../components/collections-overview/collections-overview.components';
import CollectionPage from '../collection/collection.component';

const CollectionsOverviewWithSpinner=WithSpinner(CollectionsOverview);
const CollectionPageWithSpinner=WithSpinner(CollectionPage);
class ShopPage extends React.Component {
    componentDidMount() {
      const { fetchCollectionsStartAsync }=this.props;
      fetchCollectionsStartAsync();
    }
  
    render() {
      const { match,isCollectionFetching ,isCollectionLoaded} = this.props;
      return (
        <div className='shop-page topmargin bodyPadding'>
          <Route
            exact
            path={`${match.path}`}
            render={props => (
              <CollectionsOverviewWithSpinner isLoading={isCollectionFetching} {...props} />
            )}
          />
          <Route
            path={`${match.path}/:collectionId`}
            render={props => (
              <CollectionPageWithSpinner isLoading={!isCollectionLoaded} {...props} />
            )}
          />
        </div>
      );
    }
  }

  const mapStateToProps=createStructuredSelector({
    isCollectionFetching :selectIsCollectionFetching,
    isCollectionLoaded:selectIsCollectionLoaded
  });
  
  const mapDispatchToProps = dispatch => ({
    fetchCollectionsStartAsync:()=>dispatch(fetchCollectionsStartAsync())
  });

  export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(ShopPage);
  