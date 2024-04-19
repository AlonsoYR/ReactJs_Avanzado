import React from 'react'

const Notes = ({ notes }) => {
  return (
    <div>
        <h2>Lista de notas pendientes</h2>
        <ul className="notes-list">
          {notes.map((note, i) => (
            <li key={i}>{note.note}</li>
          ))}
        </ul>
    </div>
  );
};

export default Notes
