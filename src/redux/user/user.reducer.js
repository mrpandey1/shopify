import { act } from 'react-dom/test-utils';
import ShopActionTypes from './user.types';
const INITIAL_STATE={
    currentUser:null,
    error:null
}
const userReducer=(state=INITIAL_STATE,action)=>{
    switch(action.type){
        case ShopActionTypes.GOOGLE_SIGN_IN_SUCCESS:
        case ShopActionTypes.EMAIL_SIGN_IN_SUCCESS:    
            return{
                ...state,
                currentUser:action.payload,
                error:null
            }
        case ShopActionTypes.EMAIL_SIGN_IN_FAILURE:
        case ShopActionTypes.GOOGLE_SIGN_IN_FAILURE:
            return{
                ...state,
                error:action.payload
            }
        
        default:
            return state;
    }
}

export default userReducer;