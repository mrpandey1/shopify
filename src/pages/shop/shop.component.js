import React from 'react';
import { Route } from 'react-router-dom';
import CollectionsOverview from '../../components/collections-overview/collections-overview.components';
import CollectionPage from '../collection/collection.component';
import { firestore ,convertCollectionsSnapshotToMap} from '../../firebase/firebase.util';
import { connect } from 'react-redux';
import { updateCollections } from '../../redux/shop/shop.actions';
class ShopPage extends React.Component{
    unsubscribeFromSnapshot=null;
    componentDidMount(){
        const { updateCollections }=this.props;
        const collectionRef=firestore.collection('collections');
        collectionRef.onSnapshot(async snapshot=>{
            const collectionsMap=convertCollectionsSnapshotToMap(snapshot);
            updateCollections(collectionsMap);
        });
    }
    render(){
        const {match}=this.props;
        return(
        <div className='shop-page topmargin bodyPadding'>
            <Route exact path={`${match.path}`} component={CollectionsOverview}/>
            <Route path={`${match.path}/:collectionId`} component={CollectionPage}/>
        </div>
        );
    }
};

const mapDispatchToProps=dispatch=>({
    updateCollections:collectionMap=>
    dispatch(updateCollections(collectionMap))
})


export default connect(null,mapDispatchToProps)(ShopPage);