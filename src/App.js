import { useState, useEffect } from 'react'
import { nanoid } from 'nanoid'
import NotesList from './components/NotesList'
import Search from './components/Search'
import Header from './components/Header'

import { getInitialData } from './utils'

const App = () => {
  const [notes, setNotes] = useState(getInitialData)

  const [searchText, setSearchText] = useState('')

  const [darkMode, setDarkMode] = useState(false)

  useEffect(() => {
    const savedNotes = JSON.parse(localStorage.getItem('react-notes-app-data'))

    if (savedNotes) {
      setNotes(savedNotes)
    }
  }, [])

  useEffect(() => {
    localStorage.setItem('react-notes-app-data', JSON.stringify(notes))
  }, [notes])

  const addNote = (data) => {
    const newNote = {
      id: nanoid(),
      ...data,
    }
    const newNotes = [...notes, newNote]
    setNotes(newNotes)
  }

  const deleteNote = (id) => {
    const newNotes = notes.filter((note) => note.id !== id)
    setNotes(newNotes)
  }

  const archiveNote = (id) => {
    const newNotes = notes.map((note) => {
      if (note.id === id) {
        return {
          ...note,
          archived: !note.archived,
        }
      }
      return note
    })
    setNotes(newNotes)
  }

  return (
    <div className={`${darkMode && 'dark-mode'}`}>
      <div className="container">
        <Header handleToggleDarkMode={setDarkMode} />
        <Search handleSearchNote={setSearchText} />
        <NotesList
          notes={notes.filter(
            (note) => note.title.toLowerCase().includes(searchText.toLowerCase()) && !note.archived
          )}
          title="Active Notes"
          handleAddNote={addNote}
          handleDeleteNote={deleteNote}
          handleArchiveNote={archiveNote}
        />
        <NotesList
          notes={notes.filter(
            (note) => note.title.toLowerCase().includes(searchText.toLowerCase()) && note.archived
          )}
          title="Archived Notes"
          handleAddNote={addNote}
          handleDeleteNote={deleteNote}
          handleArchiveNote={archiveNote}
        />
      </div>
    </div>
  )
}

export default App
