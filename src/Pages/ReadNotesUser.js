import './ReadNotesUser.css';
import './ReadNotesUser';
import { useState, useEffect } from 'react';
import { obj } from '../config/keys'


const ReadNotesUser = () => {
    let [notes, setNotes] = useState("");
    useEffect(() => {
        allNotes();
    }, []);

    const allNotes = async () => {
        let result = await fetch(`${obj.server}/readnotesuser`);
        result = await result.json();
        setNotes(result);
    }
    const search = async (e) => {
        let key = e.target.value;
        if (key) {
            let result = await fetch(`${obj.server}/search/${key}`);
            result = await result.json();
            if (result) {
                setNotes(result);
            } else {
                allNotes();
            }
        }else{
            allNotes();
        }
    }

    return (
        
        <div className='py-4 py-md-5'>
            <div className="row justify-content-center readnotesuser-base2">
                <div className="col-md-8 readnotesuser-base">
                    <input type='search' onChange={search} className='add-notes-admin-input' placeholder='Search by topic...' />
                    {
                        notes.length > 0 ? notes.map((item, index) =>
                            <div className='readnoteadmin-main'>
                                
                                <div className='readnoteadmin-heading'> 
                                   {item.topic}
                                   <div className='readnoteadmin-index'> {index + 1}</div>
                                </div>
                                <div className='readnoteadmin-subheading'> {item.subtopic}</div>
                                <div className='readnoteadmin-content'> {item.content}</div>
                            </div>
                        ) :
                            <h1 align="center">No Data Found</h1>
                    }
                </div>
            </div>
        </div>
    );
}

export default ReadNotesUser;