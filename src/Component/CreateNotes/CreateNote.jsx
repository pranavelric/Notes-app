import React, { useState } from 'react';
import './createNote.scss';

import AddIcon from '@mui/icons-material/Add';
import Button from '@mui/material/Button';
import toast from 'react-hot-toast';

export default function CreateNote(props) {

    const [note,setNote] = useState({
        title:"",
        content:""
    });

    const [expand,setExpand] = useState(false)

    const inputEvent = (event)=>{
       const {name,value} = event.target;
        setNote((prevData)=>{
            return {
                ...prevData,
                [name]:value,
            }
        });
    };


    const addEvent = ()=>{
        if(note.title === ''){
         toast.error( 'Title cannot be empty!!');
         return;
        }
        if (note.content ===''){
            toast.error( 'Note content cannot be empty!!');
         return;
        }
        props.passedNote(note);
        toast.success('Note Added Successfully');
        setNote({
            title:"",
            content:""
        });
    };

  return (
  
    <>
    <div className="main_note">
        <form action="">
            { expand?
            <input type="text" placeholder='Title' className='title' name='title' value={note.title} onChange={inputEvent} />
        :null    
        }
            <textarea placeholder='Write a note...' cols="100" rows="10" className='textarea' name='content' value={note.content} onChange={inputEvent} onClick={()=>setExpand(true)}></textarea>
        
            { expand?
            <Button onClick={addEvent}>
                <AddIcon className='add-icon'/>
            </Button>
        :null    
        }
        </form>



    </div>
    </>

    )
}
