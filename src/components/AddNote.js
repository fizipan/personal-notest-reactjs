import { useState } from 'react'

const AddNote = ({ handleAddNote, type }) => {
  const [noteTitle, setNoteTitle] = useState('')
  const [noteText, setNoteText] = useState('')
  const characterLimit = 50

  const handleChangeNoteTitle = (event) => {
    if (characterLimit - event.target.value.length >= 0) {
      setNoteTitle(event.target.value)
    }
  }

  const handleChangeNoteText = (event) => {
    setNoteText(event.target.value)
  }

  const handleSaveClick = () => {
    if (noteTitle.trim().length > 0 && noteText.trim().length > 0) {
      if (type === 'active') {
        handleAddNote({
          title: noteTitle,
          body: noteText,
          createdAt: Date.now(),
          archived: false,
        })
      }

      if (type === 'archived') {
        handleAddNote({
          title: noteTitle,
          body: noteText,
          createdAt: Date.now(),
          archived: true,
        })
      }
      setNoteTitle('')
      setNoteText('')
    }
  }

  return (
    <div className="note new">
      <input
        type="text"
        placeholder="Type to add title..."
        className="note-input"
        value={noteTitle}
        onChange={(event) => handleChangeNoteTitle(event)}
      />
      <textarea
        rows="8"
        cols="10"
        placeholder="Type to add a note..."
        value={noteText}
        className="note-textarea"
        onChange={(event) => handleChangeNoteText(event)}
      ></textarea>
      <div className="note-footer">
        <small>{characterLimit - noteTitle.length} Remaining</small>
        <button className="save" onClick={handleSaveClick}>
          Save
        </button>
      </div>
    </div>
  )
}

export default AddNote
