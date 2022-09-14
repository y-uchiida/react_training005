import React from 'react'
import './Main.css'

export const Main = () => {
	return (
		<div className='app-main'>
			<div className="app-main-note-edit">
				<input type="text" value='new note' />
				<textarea placeholder='input content here ...'></textarea>
			</div>
			<div className='app-main-note-preview'>
				<h1 className='preview-title'>new note</h1>
				<div className='markdown-preview'>input content here ...</div>
			</div>
		</div>
	)
}
