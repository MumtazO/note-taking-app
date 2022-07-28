import Note from './Note';
import AddNote from './AddNote';
/* now you destructure the props to get the notes that was 
passed into the NotesList component in App*/

const NotesList = ({ xeemar, handleAddNote }) => {
 
    /* map function to make it more dynamic so it automatically
creates new Note. Inside the brackets u can call it whatever
but its more semantic to call it note. 

props are the part before the = and you can call that whatever,
you then use that in the file that you import. So id, text,
date come from the useState object in App and its gonna get 
destructured in Note file.
*/
  return (
    <div className="notes-list">
      {xeemar.map((warqad) => (
        <Note 
        id={warqad.id} 
        hadaal={warqad.text} 
        maanta={warqad.date} />
      ))}
      <AddNote handleAddNote={handleAddNote}/>  
    </div>
  );
};

export default NotesList;