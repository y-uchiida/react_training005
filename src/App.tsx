import { useEffect, useState } from 'react'
import './App.css'
import { Sidebar } from './components/Sidebar'
import { Main } from './components/Main'
import uuid from 'react-uuid'

function App() {

  /* localStorage に保存された値を取得する
   * 初めての利用時など、notesが存在しない場合(getItem の結果がnullなとき)があるので、
   * null 合体演算子で対応しておく
   */
  const [notes, setNotes] = useState<note[]>(JSON.parse(localStorage.getItem('notes') ?? '{}'));

  const [activeNote, setActiveNote] = useState<string | undefined>(undefined);

  /* useEffect で、notes のstate に差分が生じるたびに実行される処理を記述
   * ここでデータの保存(localStorage への書き込み)を行う
   */
  useEffect(() => {
    localStorage.setItem('notes', JSON.stringify(notes));
  }, [notes]);

  useEffect(() => {
    setActiveNote(notes[0]?.id);
  }, []);

  /** 新しいノートを追加する */
  const onAddNote: React.MouseEventHandler<HTMLButtonElement> = () => {
    const newNote: note = {
      id: uuid(),
      title: "new note",
      content: "",
      modDate: Date.now()
    }
    setNotes([...notes, newNote]);
  }

  /** 指定のIDのノートを削除する */
  const onDeleteNote = (id: string) => {
    setNotes(notes.filter(note => note.id !== id));
  }

  /** 選択されているノートのオブジェクトを取得する */
  const getActiveNote = () => {
    return notes.find(note => note.id === activeNote);
  }

  /** 引数で受け取ったノートのデータを、notes のstateに取り込む */
  const onUpdateNote = (updatedNote: note) => {
    const updatedNotes = notes.map((note) => {
      /* 更新対象のデータのとき(idが一致するとき)は更新後のデータを返し、それ以外は現状のデータのまま */
      return (note.id === updatedNote.id) ? updatedNote : note;
    });
    /* 更新内容を取り込んだnotes 配列をstateにセットする */
    setNotes(updatedNotes);
  }

  return (
    <div className="App">
      <Sidebar notes={notes} onAddNote={onAddNote} onDeleteNote={onDeleteNote} activeNote={activeNote} setActiveNote={setActiveNote} />
      <Main activeNote={getActiveNote()} onUpdateNote={onUpdateNote} />
    </div>
  )
}

export default App
