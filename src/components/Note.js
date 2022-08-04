import { MdArchive, MdDeleteForever, MdUnarchive } from 'react-icons/md'

import { showFormattedDate } from '../utils'

const Note = ({ id, title, body, createdAt, isArchived, handleDeleteNote, handleArchiveNote }) => {
  return (
    <div className="note">
      <span className="note-title">{title}</span>
      <small className="note-date">{showFormattedDate(createdAt)}</small>
      <div className="note-body">{body}</div>
      <div className="note-footer">
        {/* delete button */}
        <button className="delete-button" onClick={() => handleDeleteNote(id)}>
          <MdDeleteForever size="1.2em" />
          Delete
        </button>
        <button className="archive-button" onClick={() => handleArchiveNote(id)}>
          {isArchived ? <MdUnarchive size="1.2em" /> : <MdArchive size="1.2em" />}
          {isArchived ? 'Unarchive' : 'Archive'}
        </button>
      </div>
    </div>
  )
}

export default Note
