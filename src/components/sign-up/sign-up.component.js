import  React from 'react';
import { connect } from 'react-redux';
import './sign-up.styles.scss';
import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';
import { signUpStart } from '../../redux/user/user.actions';
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

        const { signUpStart }=this.props;
        const {displayName,email,password,confirmPassword}=this.state;
        if(password!==confirmPassword){
            alert("passwords don't match");
            return;
        }
        signUpStart({displayName,email,password});
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

const mapDispatchToProps=dispatch=>({
    signUpStart:userCredentials=>dispatch(signUpStart(userCredentials))
})
export default connect(null,mapDispatchToProps)(SignupComponent);