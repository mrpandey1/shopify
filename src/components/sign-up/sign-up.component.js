import  React from 'react';
import './sign-up.styles.scss';
import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';
import {auth,createUserProfileDocument} from '../../firebase/firebase.util';

class SignupComponent extends React.Component{
    constructor(){
        super();
        this.state={
            displayName:'',
            email:'',
            password:'',
            confirmPassword:''
        }
    }
    handleSubmit=async event =>{
        event.preventDefault();
        const {displayName,email,password,confirmPassword}=this.state;
        if(password!==confirmPassword){
            alert("passwords don't match");
            return;
        }
        try{
            const {user}= await auth.createUserWithEmailAndPassword(email,password);
            await createUserProfileDocument(user,{displayName});
            this.setState({
                displayName:'',
                email:'',
                password:'',
                confirmPassword:''
            })
        }catch(error){
            console.error(error);
        }

    }
    handleChange=event=>{
        const {value,name}=event.target;
        this.setState({[name]:value})
    }
    render(){
        const {displayName,email,password,confirmPassword}=this.state;
        return(
            <div className='sign-up'>
                <h2 className='title'>
                    <span>Sign up with your email and password</span>
                    <form className='sign-up-form' onSubmit={this.handleSubmit}>
                        <FormInput
                            type='text'
                            name='displayName'
                            value={this.displayName}
                            onChange={this.handleChange}
                            required
                        />
                        <FormInput
                            type='email'
                            name='email'
                            value={this.email}
                            onChange={this.handleChange}
                            required
                        />
                        <FormInput
                            type='password'
                            name='password'
                            value={this.password}
                            onChange={this.handleChange}
                            required
                        />
                        <FormInput
                            type='password'
                            name='confirmPassword'
                            value={this.confirmPassword}
                            onChange={this.handleChange}
                            required
                        />
                        <CustomButton type='submit'>Sign Up</CustomButton>
                    </form>
                </h2>
            </div>
        );
    }
}
export default SignupComponent;