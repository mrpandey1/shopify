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
        return(
            <div className='sign-up'>
                <h2 className='title'>Want to create account ?</h2>
                    <span>Register using email password</span>
                    <form className='sign-up-form' onSubmit={this.handleSubmit}>
                        <FormInput 
                            type='name'
                            name='displayName' 
                            value={this.state.displayName} 
                            handleChange={this.handleChange}
                            label='name'
                            required
                        />
                        <FormInput
                            type='email'
                            name='email'
                            value={this.state.email}
                            handleChange={this.handleChange}
                            label='email'
                            required
                        />
                        <FormInput
                            type='password'
                            name='password'
                            value={this.state.password}
                            handleChange={this.handleChange}
                            label='password'
                            required
                        />
                        <FormInput
                            type='password'
                            name='confirmPassword'
                            value={this.state.confirmPassword}
                            handleChange={this.handleChange}
                            label='confirm password'
                            required
                        />
                        <CustomButton type='submit'>Sign Up</CustomButton>
                    </form>
            </div>
        );
    }
}
export default SignupComponent;