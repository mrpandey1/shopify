import  React from 'react';
import './sign-in.styles.scss';
import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';
import { connect } from 'react-redux'
import { googleSignInStart,emailSignInStart } from '../../redux/user/user.actions';
class SignInComponent extends React.Component{
    constructor(props){
        super(props);
        this.state={
            email:'',
            password:''
        }
    }

    handleSubmit= async event=>{
        event.preventDefault();
        const { emailSignInStart }=this.props
        const { email,password }=this.state;
        emailSignInStart(email,password);
        
    }
    handleChange=event=>{
        const {value,name}=event.target;
        this.setState({[name]:value})
    }

    render(){
        const {googleSignInStart} = this.props;
        return(
            <div className='sign-in topmargin bodyPadding'>
                <h2>I already have an account</h2>
                <span>SIgn in with your email and password</span>
                <form onSubmit={this.handleSubmit}>
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
                        <div className='buttons'>
                            <CustomButton type='submit'>Sign in</CustomButton>
                            <CustomButton type='button' onClick={googleSignInStart} isGoogleSignIn={true}>
                                {' '}
                                Sign in with google{' '}
                            </CustomButton>
                        </div>
                </form>
            </div>
        )
    }
}

const mapDispatchToProps=dispatch=>({
    googleSignInStart:()=>dispatch(googleSignInStart()),
    emailSignInStart:(email,password)=>dispatch(emailSignInStart({email,password}))
})

export default connect(null,mapDispatchToProps)(SignInComponent);