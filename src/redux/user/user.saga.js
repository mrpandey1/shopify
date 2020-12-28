import { takeLatest , put, call,all } from 'redux-saga/effects';
import UserActionTypes from './user.types';
import { signInSuccess,signInFailure, signOutSuccess, signOutFailure, signUpFailure,signUpSuccess} from './user.actions';
import { auth , googleProvider, createUserProfileDocument,getCurrentUser }from '../../firebase/firebase.util';

export function* getSnapShotFromUserAuth(userAuth,additionalData){
    try{
        const userRef=yield call(createUserProfileDocument,userAuth,additionalData);
        const userSnapshot=yield userRef.get();
        yield put(
            signInSuccess({id:userSnapshot.id,...userSnapshot.data()}));
    }catch(error){
        yield put(signInFailure(error));
    }   
}

export function* signInWithGoogle(){
    try{
        const {user}=yield auth.signInWithPopup(googleProvider);
        yield getSnapShotFromUserAuth(user);
    }catch(error){
        yield put(signInFailure(error));
    }
} 

export function* signInWithEmail({payload:{email,password}}){
    try{
        const { user }=yield auth.signInWithEmailAndPassword(email  ,password);
       yield getSnapShotFromUserAuth(user);
    }catch(error){
        yield put(signInFailure(error));
    }
}

export function* isUserAuthenticated(){
    try{
        const userAuth=yield getCurrentUser();
        if(!userAuth) return;
        yield getSnapShotFromUserAuth(userAuth);
    }catch(e){
        yield put(signInFailure(e))
    }
}

export function* signOut(){
    try{
        yield auth.signOut();
        yield put(signOutSuccess());
    }catch(error){
        yield put(signOutFailure());
    }
}
export function* signUp({payload:{email,password,displayName}}){
    try{
        const { user }=yield auth.createUserWithEmailAndPassword(
            email,
            password
        );
        yield put(signUpSuccess({user,additionalData:{displayName}}));
    }catch(error){
        yield put(signUpFailure());
    }
}
export function* signInAfterSignup({payload:{user,additionalData}}){
    yield getSnapShotFromUserAuth(user,additionalData);
}

export function* onGoogleSignInStart(){
    yield takeLatest(UserActionTypes.GOOGLE_SIGN_IN_START,signInWithGoogle)
}
export function* onEmailSignInStart(){
    yield takeLatest(UserActionTypes.EMAIL_SIGN_IN_START,signInWithEmail)
}

export function* onCheckUserSession(){
    yield takeLatest(UserActionTypes.CHECK_USER_SESSION,isUserAuthenticated)
}

export function* onSignOutStart(){
    yield takeLatest(UserActionTypes.SIGN_OUT_START,signOut)
}

export function* onSignUpStart(){
    yield takeLatest(UserActionTypes.SIGN_UP_START,signUp)
}

export function* onSignupSuccess(){
    yield takeLatest(UserActionTypes.SIGN_UP_SUCCESS,signInAfterSignup)
}

export function* userSagas(){
    yield all([
        call(onGoogleSignInStart),
        call(onEmailSignInStart),
        call(onCheckUserSession),
        call(onSignOutStart),
        call(onSignUpStart),
        call(onSignupSuccess)
    ])
} 
