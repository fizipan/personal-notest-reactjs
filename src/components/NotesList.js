import React from 'react'

import Note from './Note'
import AddNote from './AddNote'

const NotesList = ({ title, notes, handleAddNote, handleDeleteNote, handleArchiveNote }) => {
  return (
    <>
      <h2>{title}</h2>
      <div className="notes-list">
        {notes.map((note) => (
          <Note
            id={note.id}
            title={note.title}
            body={note.body}
            createdAt={note.createdAt}
            isArchived={note.archived}
            handleDeleteNote={handleDeleteNote}
            handleArchiveNote={handleArchiveNote}
            key={note.id}
          />
        ))}
        <AddNote
          handleAddNote={handleAddNote}
          type={title === 'Active Notes' ? 'active' : 'archived'}
        />
      </div>
    </>
  )
}

export default NotesList
