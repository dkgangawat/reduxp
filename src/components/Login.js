
import React from 'react'
import { NavLink } from 'react-router-dom';

const handleLogIn=(event)=>{
event.preventDefault();

}
const Login = () => {
  return (
    <>
    <div className='login-page'>
        <form action="http://localhost:5000/login" method='post'  className="loginform">
        <h3 style={{fontWeight:"800",color:"rgb(45, 37, 37)",fontSize:"32px",margin:"20px",marginBottom:"40px" ,width:'100%',textAlign:"center"}}>Login</h3>
        <label htmlFor="username">username</label>
     <input autoComplete='off' type="text" name='username' placeholder='enter your username'/>
     <label htmlFor="password">password</label>
    <input type="password"name="password" placeholder='type your password'/>
    <p style={{width:"100%",textAlign:"right",paddingRight:"10%"}}>forgot password</p>
    <button className='btn-login' type="submit">LOGIN</button>  
    <p style={{width:"100%",cursor:"pointer",marginTop:"40px",padding:"10px",textTransform:"uppercase" ,textAlign:"center"}}> <NavLink to="/shoppingcart/signup">
    Don't have a Account<br/>
     sign Up </NavLink></p> 
    </form>  
    </div>
  
    

    </>
  )
}
const SignUp =()=>{
    return(
        <>
           <div className='login-page'>
           <form action="http://localhost:5000/signup" method='post' className='loginform'>
        <h3 style={{fontWeight:"800",color:"rgb(45, 37, 37)",fontSize:"32px",margin:"20px",marginBottom:"40px" ,width:'100%',textAlign:"center"}}>Sign UP</h3>
        <label htmlFor="email">Email</label>
        <input type="email" autoComplete='off'  name='email' placeholder='enter your username'/>
        <label htmlFor="password">password</label>
        <input type="password"name="password" placeholder='create password'/>
        <label htmlFor="retypepassword">confirm password</label>
        <input type="password"name="retypepassword" placeholder='confirm password'/>
        <button className='btn-login' type="submit">Sign Up</button>  
        <p style={{width:"100%",cursor:"pointer",marginTop:"40px",padding:"10px",textTransform:"uppercase" ,textAlign:"center"}}> <NavLink to="/shoppingcart/login">already have a Account<br/>
        login</NavLink></p> 
        </form>
           </div>
        
        </>
    )
}

export default Login
export {SignUp}