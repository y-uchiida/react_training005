import React from 'react'
import './Main.css'

type props = {
	activeNote: note | undefined,
	onUpdateNote: (updatedNote: note) => void
}

export const Main = ({ activeNote, onUpdateNote }: props) => {

	const onEditNote = (key: string, value: string) => {
		if (!activeNote) return; // もし、activeNote がundefined なら何もしない

		onUpdateNote({
			...activeNote, /* 現在の値を読み込みする */
			[key]: value, /* 更新するプロパティ(title | content)を、動的キーで設定する */
			modDate: Date.now()
		});
	}

	if (!activeNote) {
		return <div className='no-active-note'>select note from list</div>
	}

	return (
		<div className='app-main'>
			<div className="app-main-note-edit">
				<input
					id='title'
					type="text"
					value={activeNote?.title}
					onChange={(e) => onEditNote('title', e.target.value)}
				/>
				<textarea
					id='content'
					placeholder='input content here ...'
					onChange={(e) => onEditNote('content', e.target.value)}
					value={activeNote?.content} /* リアクティブにするため、要素の属性値に記述する必要がある */
				>
				</textarea>
			</div>
			<div className='app-main-note-preview'>
				<h1 className='preview-title'>{activeNote?.title}</h1>
				<div className='markdown-preview'>{activeNote?.content}</div>
			</div>
		</div>
	)
}
