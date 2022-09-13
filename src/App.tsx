import { useState } from 'react'
import './App.css'
import { Sidebar } from './components/Sidebar'
import { Main } from './components/Main'
import uuid from 'react-uuid'

function App() {

  const [notes, setNotes] = useState<note[]>([]);

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

  return (
    <div className="App">
      <Sidebar notes={notes} onAddNote={onAddNote} />
      <Main />
    </div>
  )
}

export default App
