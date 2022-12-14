import React from 'react'
import './Sidebar.css'

type props = {
	notes: note[],
	onAddNote: React.MouseEventHandler<HTMLButtonElement>,
	onDeleteNote: Function,
	activeNote: string | undefined,
	setActiveNote: React.Dispatch<React.SetStateAction<string | undefined>>
}

export const Sidebar = ({ notes, onAddNote, onDeleteNote, activeNote, setActiveNote }: props) => {

	/* 更新日の新しい順に、ノートのデータを並び替える */
	const sortedNotes = notes.sort((a, b) => b.modDate - a.modDate);

	return (
		<div className='app-sidebar'>
			<div className='app-sidebar-header'>
				<h1>ノート</h1>
				<button onClick={onAddNote}>追加</button>
			</div>
			<div className='app-sidebar-notes'>
				{sortedNotes.map(note => (
					<div
						className={`app-sidebar-note ${note.id === activeNote && 'active'}`}
						key={note.id}
						onClick={() => setActiveNote(note.id)}>
						<div className='sidebar-note-title'>
							<strong>{note.title}</strong>
							{/* 
							  idを引数で渡す必要があるので、イベントハンドラをアロー関数にしておき、そこからonDelete()を実行する
							  イベントハンドラはEventHandler 関数である必要があり、引数はイベントオブジェクトが渡ってきてしまう
							  */}
							<button onClick={() => onDeleteNote(note.id)}>削除</button>
						</div>
						<p>{note.content}</p>
						<small>
							最終変更日：{new Date(note.modDate).toLocaleDateString('ja-JP', {
								hour: '2-digit',
								minute: '2-digit'
							})}
						</small>
					</div>
				))}
			</div>
		</div>
	)
}
