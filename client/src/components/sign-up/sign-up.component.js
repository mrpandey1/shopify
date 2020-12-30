import  React ,{ useState }from 'react';
import { connect } from 'react-redux';
import './sign-up.styles.scss';
import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';
import { signUpStart } from '../../redux/user/user.actions';
const SignupComponent =({signUpStart})=>{
    const [userCredentials,setUserCredentials]=useState({
        displayName:'',
        email:'',
        password:'',
        confirmPassword:''
    })
    const {displayName,email,password,confirmPassword}=userCredentials;
    const handleSubmit=async event =>{
        event.preventDefault();
        if(password!==confirmPassword){
            alert("passwords don't match");
            return;
        }
        signUpStart({displayName,email,password});
    }
    const handleChange=event=>{
        const {value,name}=event.target;
        setUserCredentials({...userCredentials,[name]:value})
    }
    return(
        <div className='sign-up'>
            <h2 className='title'>Want to create account ?</h2>
                <span>Register using email password</span>
                <form className='sign-up-form' onSubmit={handleSubmit}>
                    <FormInput 
                        type='name'
                        name='displayName' 
                        value={displayName} 
                        handleChange={handleChange}
                        label='name'
                        required
                    />
                    <FormInput
                        type='email'
                        name='email'
                        value={email}
                        handleChange={handleChange}
                        label='email'
                        required
                    />
                    <FormInput
                        type='password'
                        name='password'
                        value={password}
                        handleChange={handleChange}
                        label='password'
                        required
                    />
                    <FormInput
                        type='password'
                        name='confirmPassword'
                        value={confirmPassword}
                        handleChange={handleChange}
                        label='confirm password'
                        required
                    />
                    <CustomButton type='submit'>Sign Up</CustomButton>
                </form>
        </div>
    );
}

const mapDispatchToProps=dispatch=>({
    signUpStart:userCredentials=>dispatch(signUpStart(userCredentials))
})
export default connect(null,mapDispatchToProps)(SignupComponent);