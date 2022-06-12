import { useState } from 'react';
import CreateNote from './Component/CreateNotes/CreateNote';
import Footer from './Component/Footer/Footer';
import Header from './Component/Header/Header';
import Note from './Component/Note/Note';
import logo from './logo.svg';
import './styles/App.scss';
import {Toaster} from 'react-hot-toast';

function App() {
  const [addItem,setAddItem] = useState([]);
  const addNote = (note)=>{
    setAddItem((prevData)=>{
        return [...prevData,note];
    });
    console.log(note);
  }
  
  const onDelete = (id)=>{
      setAddItem((oldData)=>oldData.filter((currentData,index)=>{
        return index!==id;
      }));
  };

  return (
<>
    <div className="App">
     <Header/>
     <CreateNote passedNote={addNote}/>
     <div className="note">
      <div className="cards">
      {
        addItem.map((val,index)=>{
          return <Note
          key={index}
          id={index}
          title={val.title}
          content={val.content}
          deleteItem={onDelete}
          />
        })
      }
     </div>
     </div>
     
     <Footer/>




    </div>
    
    <Toaster position="bottom-right" toastOptions={{
      style:{
        fontSize:'1.4rem',
      },
    }}
    />
    </>
  );
}

export default App;
