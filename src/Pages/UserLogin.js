import './UserLogin.css';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { obj } from '../config/keys'

const UserLogin = () =>{
    let [email, setEmail] = useState("");
    let [password, setPassword] = useState("");
    let navigate = useNavigate();

    const userLogin =async (e) =>{
        e.preventDefault();
        let result = await fetch(`${obj.server}/userlogin`,{
            method:'post',
            body: JSON.stringify({email,password}),
            headers:{
                'Content-Type':'application/json'
            }
        });
        result = await result.json();
        if(result.email){
            localStorage.setItem('user',JSON.stringify(result));
            navigate('/userhome');
        }else{
            alert("Enter Correct Detail");
        }
        
    }
    return(
        <div className='adminlogin-main-div py-5'>
           <div className='container'>
                <div className='row justify-content-center'>
                    <div className='col-md-6 align-self-center'>
                        <form className='adminlogin-main' onSubmit={(e)=>userLogin(e)}>
                            <h4 align="center">User Login</h4>
                            <input type="text" placeholder='Enter your email' className='adminlogin-input-box'
                            onChange={(e)=>setEmail(e.target.value)} value={ email } />
                            <input type="password" placeholder='Enter your password' className='adminlogin-input-box'
                            onChange={(e)=>setPassword(e.target.value)} value={ password } />
                            <button type="submit" className='adminlogin-button'>Login</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default UserLogin;