import React from 'react';
import './note.scss';

import BoltIcon from '@mui/icons-material/Bolt';
import ClearIcon from '@mui/icons-material/Clear';
import toast from 'react-hot-toast';

export default function Note(props) {

    const deleteNote = ()=>{
        props.deleteItem(props.id);
        toast.success("Note deleted successfully");
    }

  return (
  <>
    
        <div className="card card-1" >
            <div className='card_icons'>
            <p className="card_icon"><BoltIcon/></p>
            <p className="card_exit" onClick={deleteNote}><ClearIcon/></p>
            </div>
            <h2 className="card_title">{props.title}.
            </h2>
            <h3 className='card_content'>
           {props.content}
            </h3>
        </div>



       




  </>
  )
}
