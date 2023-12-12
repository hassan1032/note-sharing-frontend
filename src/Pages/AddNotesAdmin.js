import './AddNotesAdmin.css';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { obj } from "../config/keys";



const AddNotesAdmin = () =>{
    let navigate = useNavigate();
    let [topic,setTopic] = useState("");
    let [subtopic,setSubtopic] = useState("");
    let [content,setContent] = useState("");
    let addby = "admin";
    const addNews =async () =>{
        console.warn(topic,subtopic,content,addby);
        let result = await fetch(`${obj.server}/addnotes-admin`,{
            method:'post',
            body:JSON.stringify({topic,subtopic,content,addby}),
            headers:{
                'Content-Type':'application/json'
            }
        });
        result = await result.json();
        if(result){
            navigate('/readnotesadmin');
        }
        // console.log(result);
    }

    return(
        <div className='py-4 py-md-5'>
            <div className="row justify-content-center">
                <div className='col-md-6 add-notes-admin-main'>
                    <h1>Add New Notes</h1>
                    <input type="text" placeholder="Enter Topic Of Notes" 
                    className='adminlogin-input-box'
                    onChange={ (e)=>setTopic(e.target.value) } value={ topic }
                    />

                    <input type="text" placeholder="Enter Sub-Topic Of Notes" 
                    className='adminlogin-input-box'
                    onChange={ (e)=>setSubtopic(e.target.value) } value={ subtopic }
                    />

                    <textarea type="text" placeholder="Enter Content Of Notes" 
                    className='adminlogin-input-box'
                    onChange={ (e)=>setContent(e.target.value) } value={ content }
                    />

                    <button className="adminlogin-button" onClick={ addNews }>Add Notes</button>
                </div>
            </div>
        </div>
    );
}

export default AddNotesAdmin;