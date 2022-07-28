import {useState} from 'react';

const AddNote = ({handleAddNote}) => {
    const [noteText, setNoteText] = useState('');


    const handleChange =  (event) => {
        setNoteText(event.target.value);
    }

    const handleSaveClick = () => {
        handleAddNote(noteText);
    }

/* adding 8 rows so it doesnt get too tall and 10 columns so it doesnt go too wide

note footer is gonna contain the save button and characters remaining
*/
  return (
    <div className="note new">
      <textarea
        rows="8"
        cols="10"
        placeholder="type here to add note"
        value={noteText} 
        onChange={handleChange}
      ></textarea>
      <div className="note-footer">
          <small>200 remaining</small>
          <button className="save" onClick={handleSaveClick} >save</button>
      </div>
    </div>
  );
};

export default AddNote;
