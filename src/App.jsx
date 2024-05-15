import Note from './components/Note'
import { useState } from 'react'

const App = (props) => {

const [notes, setNotes] = useState(props.notes)
const [newNote, setNewNote] = useState(
  'a new note...'
)
const [showAll, setShowAll] = useState(true)


const addNotes = (event) =>{
    event.preventDefault()
    // console.log('button clicked', event.target);
    // console.log(event);
    const noteObject = {
      content: newNote,
      important: Math.random() < 0.5,
      id: notes.length + 1,
    }
    setNotes(notes.concat(noteObject));
    setNewNote('add another note!')
}

const handleNoteChange = (event) =>{
  // console.log(event.target.value);
    setNewNote(event.target.value)
}

const notesToShow = showAll 
        ? notes
        : notes.filter(note => note.important === true) 

  return (
    <div>
      <h1>Notes</h1>
      <div>
        <button onClick={() => setShowAll(!showAll)}>
          show {showAll ? 'important' : 'all'}
        </button>
      </div>
      <ul>
        {notesToShow.map(note => 
          <Note key={note.id} note={note} />
        )}
      </ul>

      <form onSubmit={addNotes} >
        <input 
        value={newNote}
        onChange={handleNoteChange}
        />
        <button type='submit'>save</button> 
      </form>
    </div>
  )
}

export default App

