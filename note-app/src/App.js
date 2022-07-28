import {useState} from 'react';
import {nanoid} from 'nanoid';
import NotesList from './components/NotesList';

function App() {
  const [notes, setNotes] = useState([{
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
  return (
    <div className="container">
      <NotesList notes={notes}/>
    </div>
  );
};

export default App;
