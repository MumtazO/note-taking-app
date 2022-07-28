import {MdDeleteForever} from 'react-icons/md';

/* destructuring the props we get from NotesList


*/
const Note = ({id, hadaal, maanta}) => {
    return (
        <div className="note">
        <span>{hadaal}</span>
        <div className="note-footer">
            <small>{maanta}</small>
            <MdDeleteForever className='delete-icon'/>
        </div>
        </div>
    );
};

export default Note

/* flexbox works by position its direct children and there are two children
 in here, the span and the footer div, it doesn't care about the text inside 
 the span or that there are more elements inside the footer div */ 