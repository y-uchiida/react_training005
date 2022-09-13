import { useState } from 'react'
import './App.css'
import { Sidebar } from './components/Sidebar'
import { Main } from './components/Main'
import uuid from 'react-uuid'

function App() {

  const [notes, setNotes] = useState<note[]>([]);

  const [activeNote, setActiveNote] = useState('');

  /** 新しいノートを追加する */
  const onAddNote: React.MouseEventHandler<HTMLButtonElement> = () => {
    const newNote: note = {
      id: uuid(),
      title: "new note",
      content: "input content here...",
      modDate: Date.now()
    }
    setNotes([...notes, newNote]);
  }

  /** 指定のIDのノートを削除する */
  const onDeleteNote = (id: string) => {
    setNotes(notes.filter(note => note.id !== id));
  }

  return (
    <div className="App">
      <Sidebar notes={notes} onAddNote={onAddNote} onDeleteNote={onDeleteNote} activeNote={activeNote} setActiveNote={setActiveNote} />
      <Main />
    </div>
  )
}

export default App
