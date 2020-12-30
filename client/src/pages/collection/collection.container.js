import {connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import WithSpinner from '../../components/with-spinner/with-spinner.component';
import CollectionPage from './collection.component';
import { compose } from 'redux';
import { selectIsCollectionLoaded } from '../../redux/shop/shop.selectors';

const mapStateToProps=createStructuredSelector({
    isLoading:(state)=>!selectIsCollectionLoaded(state)
});

const CollectionPageContainer=compose(
    connect(mapStateToProps),
    WithSpinner
)(CollectionPage);

export default CollectionPageContainer;