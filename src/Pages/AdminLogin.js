import './AdminLogin.css';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { obj } from '../config/keys'


const AdminLogin = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    let navigate = useNavigate();
    let username = email;
    const adminLoginHandler = async (e) => {
        e.preventDefault();
        console.log(username, password);
        let result = await fetch(`${obj.server}/login`, {
            method: 'post',
            body: JSON.stringify({ username, password }),
            headers: {
                'Content-Type': 'application/json'
            }
        });
        result = await result.json();
        console.log(result);
        if (result.username) {
            localStorage.setItem('admin', JSON.stringify(result));
            navigate('/adminhome');
        } else {
            alert("Enter Correct Detail");
        }
    }
    return (
        <div className='adminlogin-main-div py-5'>
            <div className='container'>
                <div className="row justify-content-center">
                    <div className='col-md-6 align-self-center'>
                        <form className=' adminlogin-main' onSubmit={(e) => adminLoginHandler(e)}>
                            <h3 className='mb-3'>Admin Login</h3>
                            <input type="text" placeholder="Enter Your Email" className="adminlogin-input-box"
                                onChange={(e) => setEmail(e.target.value)} value={email}
                            />
                            <input type="password" placeholder="Enter Your Password" className="adminlogin-input-box"
                                onChange={(e) => setPassword(e.target.value)} value={password}
                            />
                            <button type="submit" className="adminlogin-button">Login</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AdminLogin;