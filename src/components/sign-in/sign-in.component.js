import  React from 'react';
import './sign-in.styles.scss';

class SignInComponent extends React.Component{
    constructor(props){
        super(props);
        this.state={
            email:'',
            password:''
        }
    }

    handleSubmit=event=>{
        event.preventDefault();
        this.setState({email:'',password:''})
    }
    handleChange=event=>{
        const {value,name}=event.target;
        this.setState({[name]:value})
    }

    render(){
        return(
            <div className='sign-in topmargin'>
                <h2>I already have an account</h2>
                <span>SIgn in with your email and password</span>
                <form onSubmit={this.handleSubmit}>
                    <input 
                        type='email'
                        name='email' 
                        value={this.state.email} 
                        onChange={this.handleChange}
                        required/>
                    <label>Email</label>
                    <input
                        type='password' 
                        name='password' 
                        value={this.state.password} 
                        onChange={this.handleChange}
                        required/>
                    <label>password</label>
                    <input type='submit'/>
                </form>
            </div>
        )
    }
}
export default SignInComponent;