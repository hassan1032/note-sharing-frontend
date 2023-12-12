import './MyNotes.css';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { obj } from '../config/keys'


const MyNotes = () => {
    let [notes, setNotes] = useState([]);
    let useId = JSON.parse(localStorage.getItem('user'))._id;

    const getNotes =async ()=>{
        let result = await fetch(`${obj.server}/mynotes/${useId}`,{
            method:'post'
        });
        result = await result.json();
        setNotes(result);
    }
    getNotes();

    const deleteNote =async (id)=>{
        let result = await fetch(`${obj.server}/deletenotesadmin/${id}`,{
            method:'delete'
        });
        if(result){console.log("Deleted");}
    }
    
    return (
        <div className='py-4 py-md-5'>
            <div className='row justify-content-center'>
                <div className='col-md-8 mynotes-base2'>
                    <h2 align="center">My Notes</h2>
                    {
                        notes.length>0 ? notes.map((item, index) =>
                            <div className='readnoteadmin-main'>
                                
                                <div className='readnoteadmin-heading'>
                                    <div className='readnoteadmin-index'>{ index+1 } </div>
                                    { item.topic }  
                                </div>
                                <div className='readnoteadmin-subheading'>{ item.subtopic }</div>
                                <div className='readnoteadmin-content'>{ item.content }</div>
                                <div className='readnoteadmin-icon'>
                                    <Link  className='readnote_edit' to={"/editnotesuser/"+item._id}> <i class="fa-solid fa-pen-to-square"></i></Link> 
                                    <span onClick={ ()=>deleteNote(item._id) } className='readnote_del'><i class="fa-solid fa-trash"></i></span>
                                </div>
                            </div>
                        ):
                        <h2 align="center">Notes Not Found</h2>
                    }
                </div>
            </div>
        </div>
    );
}


export default MyNotes;