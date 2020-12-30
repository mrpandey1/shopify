import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config={
    apiKey: "AIzaSyDcAm-UhTNp8PV1BAEysS3sniQnYJODPbw",
    authDomain: "shopify-ae28b.firebaseapp.com",
    projectId: "shopify-ae28b",
    storageBucket: "shopify-ae28b.appspot.com",
    messagingSenderId: "336261929488",
    appId: "1:336261929488:web:76fa7d95ab2995b201c895",
    measurementId: "G-VCTSF7GHVM"
  };

export const createUserProfileDocument = async (userAuth,additionalData)=>{
    if(!userAuth)return;
    const userRef=firestore.doc(`users/${userAuth.uid}`);

    const snapshot=await userRef.get();
    if(!snapshot.exists){
        const { displayName,email }=userAuth;
        const createdAt=new Date();
        try{
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...additionalData
            })
        }catch(error){
            console.log('error creating user',error.message);
        }
    }
    return userRef;
}

firebase.initializeApp(config);

export const addCollectionAndDocuments = async (
    collectionKey,
    objectsToAdd
  ) => {
    const collectionRef = firestore.collection(collectionKey);
  
    const batch = firestore.batch();
    objectsToAdd.forEach((obj) => {
      const newDocRef = collectionRef.doc();
      batch.set(newDocRef, obj);
    });
  
    return await batch.commit();
  };
  
  export const convertCollectionsSnapshotToMap = collections => {
    const transformedCollection = collections.docs.map(doc => {
      const { title, items } = doc.data();
  
      return {
        routeName: encodeURI(title.toLowerCase()),
        id: doc.id,
        title,
        items
      };
    });
    return transformedCollection.reduce((accumalator,collection)=>{
      accumalator[collection.title.toLowerCase()]=collection;
      return accumalator;
    },{});
  }

  export const getCurrentUser=()=>{
    return new Promise((resolve,reject)=>{
      const unsubscribe=auth.onAuthStateChanged(userAuth=>{
        unsubscribe();
        resolve(userAuth);
      },reject)
    })
  }

export const auth=firebase.auth();
export const firestore=firebase.firestore();

export const googleProvider=new firebase.auth.GoogleAuthProvider();
googleProvider.setCustomParameters({prompt:'select_account'});
export const signInWithGoogle=()=>auth.signInWithPopup(googleProvider);

export default firebase;
