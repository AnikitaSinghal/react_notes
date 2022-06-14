import React, { useState } from "react";
function AddNote({ handleAddNote }) {
  const [noteText, setNoteText] = useState("");

  const charLimit = 300;

  const handleChange = (e) => {
    if (charLimit - e.target.value.length >= 0) {
      setNoteText(e.target.value);
    }
  };

  const handleSaveClick = () => {
    if (noteText.trim().length > 0) {
      handleAddNote(noteText);
      setNoteText("");
    }
  };
  return (
    <div className="note-new">
      <textarea
        cols="10"
        rows="8"
        placeholder="Type To Add A new Note..."
        onChange={handleChange}
        value={noteText}
      />
      <div className="note-footer">
        <small>{charLimit - noteText.length} Remaining</small>
        <button className="save" onClick={handleSaveClick}>
          Save
        </button>
      </div>
    </div>
  );
}
export default AddNote;
