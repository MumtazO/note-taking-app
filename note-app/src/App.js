import {useState} from 'react';
import {nanoid} from 'nanoid';
import NotesList from './components/NotesList';

function App() {
  /* setting fixed initial state to an array of objects */
  const [notes, setNotes] = useState([
    {
    id:nanoid(),
    text: 'note numero uno',
    date:'27/7/22'
  },
  {
    id:nanoid(),
    text: 'note numero dos',
    date:'27/7/22'
  },
  {
    id:nanoid(),
    text: 'note numero tres',
    date:'27/7/22'
  },
  {
    id:nanoid(),
    text: 'note numero quatro',
    date:'27/7/22'
  },
]);

const addNote = (hadaallabaa) => {
  const date = new Date();
  const newNote = {
    id: nanoid(),
    text: hadaallabaa, 
    date:  date.toLocaleDateString()
  }
  const newNotes = [...notes, newNote];
  setNotes(newNotes);
}

/* store the notes variable above in the NotesList 
component so that it can render each note. This is done
through props. xeemar prop created and making it =
to notes variable from useState. CHANGE XEEMAR TO NOTES L8R */
  return (
    <div className="container">
      <NotesList xeemar={notes} handleAddNote={addNote}/>
    </div>
  );
};

export default App;
