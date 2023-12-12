import './ReadNotesAdmin.css';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { obj } from '../config/keys'

const ReadNotesAdmin = () =>{
    let [notes, setNotes] = useState([]);

    const readNews =async () =>{
        let result = await fetch(`${obj.server}/readnotesadmin`);
        result = await result.json();
        setNotes(result);
        // console.log(result);
    }
    readNews();

    const deleteNoteAdmin =async (id)=>{
        let result = await fetch(`${obj.server}/deletenotesadmin/${id}`,{
            method:'delete'
        });
        if(result){console.log("Deleted");}
    }

    return(
        <div className='py-4 py-md-5'>
            <div className='row justify-content-center'>
                <div className='col-md-9'>
                    {
                        notes.map((item,index)=>
                            <div className='readnoteadmin-main'>
                                <div className='readnoteadmin-heading'>
                                    <div className='readnoteadmin-index'>{ index+1 }</div>
                                    {item.topic}
                                </div>
                                <div className='readnoteadmin-subheading'>Sub-Heading : {item.subtopic}</div>
                                <div className='readnoteadmin-content'>Content : {item.content}</div>
                                <div className='readnoteadmin-icon'>
                                    <Link to={"/editnotesadmin/"+item._id} className="readnote_edit"> <i class="fa-solid fa-pen-to-square"></i> </Link>
                                    <button onClick={() => deleteNoteAdmin(item._id)} className='readnote_del'> <i class="fa-solid fa-trash-can"></i> </button>
                                </div>
                            </div>
                        )
                    }
                </div>
            </div>
        </div>
    );
}

export default ReadNotesAdmin;