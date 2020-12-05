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

export const auth=firebase.auth();
export const firestore=firebase.firestore();

const provider=new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt:'select_account'});
export const signInWithGoogle=()=>auth.signInWithPopup(provider);

export default firebase;
