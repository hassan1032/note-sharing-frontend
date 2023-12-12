import './Signup.css';
import { useState } from 'react';
import { obj } from '../config/keys'



const Signup = () =>{
    let [name, setName] = useState("");
    let [email, setEmail] = useState("");
    let [contact, setContact] = useState("");
    let [password, setPassword] = useState("");
    let [address, setAddress] = useState("");

    const newSignup =async () =>{
        console.log(name,email,contact,password,address);
        let result = await fetch(`${obj.server}/signup`,{
            method:'post',
            body: JSON.stringify({name,email,contact,password,address}),
            headers:{
                'Content-Type':'application/json'
            }
        });
        result = await result.json();
        
        if(result){
            alert("Regsitered successfully")
            console.log(result);
        }
        
    }

    return(
        <div className='adminlogin-main-div py-5'>
           <div className='container'>
                <div className='row justify-content-center'>
                    <div className='col-md-6'>
                        <div className='adminlogin-main'>
                            <h4 className='mb-4' align="center">User Registration</h4>
                            <input type="text" placeholder='Enter your full Name' className='adminlogin-input-box' 
                            onChange={(e)=>setName(e.target.value)} value={ name } required
                            />
                            <input type="email" placeholder='Enter your Email' className='adminlogin-input-box'
                            onChange={(e)=>setEmail(e.target.value)} value={ email } required
                            />
                            <input type="number" placeholder='Enter your Contact' className='adminlogin-input-box'
                            onChange={(e)=>setContact(e.target.value)} value={ contact } required
                            /> 
                            <input type="password" placeholder='Enter your Password' className='adminlogin-input-box'
                            onChange={(e)=>setPassword(e.target.value)} value={ password } required
                            />
                            <input type="text" placeholder='Enter your Address' className='adminlogin-input-box'
                            onChange={(e)=>setAddress(e.target.value)} value={ address } required
                            />
                            <button onClick={ newSignup } className='adminlogin-button'>Signup</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Signup;