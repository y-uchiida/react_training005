import React from 'react'
import './Main.css'

type props = {
	activeNote: note | undefined
}

export const Main = ({ activeNote }: props) => {

	if (!activeNote) {
		return <div className='no-active-note'>select note from list</div>
	}

	return (
		<div className='app-main'>
			<div className="app-main-note-edit">
				<input type="text" value='new note' />
				<textarea placeholder='input content here ...'></textarea>
			</div>
			<div className='app-main-note-preview'>
				<h1 className='preview-title'>{activeNote?.title}</h1>
				<div className='markdown-preview'>{activeNote?.content}</div>
			</div>
		</div>
	)
}
