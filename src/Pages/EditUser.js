import './EditUser.css';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { obj } from "../config/keys";

const EditUser = () =>{
    let navigate = useNavigate();
    let [name,setName] = useState("");
    let [email,setEmail] = useState("");
    let [contact,setContact] = useState("");
    let [password,setPassword] = useState("");
    let [address,setAddress] = useState("");
    useEffect(()=>{
        getUser();
    },);

    let id = JSON.parse(localStorage.getItem('user'))._id;
    const getUser =async ()=>{
        let result = await fetch(`${obj.server}/getuser/${id}`,{
            method:'post'
        });
        result = await result.json();
        setName(result.name);setEmail(result.email);setContact(result.contact);
        setPassword(result.password);setAddress(result.address);
    }
    
    const update =async () =>{
        let result = await fetch(`${obj.server}/updateuser/${id}`,{
            method:'post',
            body: JSON.stringify({name,email,contact,password,address}),
            headers:{
                'Content-Type':'application/json'
            }
        });
        if(result){
            navigate('/userhome');
        }
    }
    return(
        <div className='py-4 py-md-5'>
            <div className="row justify-content-center">
                <div className='col-md-6 align-self-center add-notes-admin-main'>
                    <h1>Edit Your Detail</h1>
                    <input type="text" className='adminlogin-input-box' readOnly
                    onChange={(e)=>setName(e.target.value)} value={ name } />

                    <input type="text" className='adminlogin-input-box'
                    onChange={(e)=>setEmail(e.target.value)} value={ email } readOnly />

                    <input type="text" className='adminlogin-input-box' readOnly
                    onChange={(e)=>setContact(e.target.value)} value={ contact } />

                    <input type="text" className='adminlogin-input-box'
                    onChange={(e)=>setPassword(e.target.value)} value={ password } placeholder='Enter new Password' />

                    <input type="text" className='adminlogin-input-box' readOnly
                    onChange={(e)=>setAddress(e.target.value)} value={ address } />
                    <button className='adminlogin-button' onClick={ update }>Update</button>
                </div>
            </div>
        </div>
    );
}

export default EditUser;