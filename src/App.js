import React, { useEffect, useState } from "react";
import { nanoid } from "nanoid";
import Search from "./components/Search";
import Header from "./components/Header";
import NoteList from "./components/NotesList";
function App() {
  const [searchNote, setSearchNote] = useState("");

  const [darkMode, setDarkMode] = useState(false);

  const [notes, setNotes] = useState([
    {
      id: nanoid(),
      text: "This is my first note",
      date: "08/06/2022"
    },
    {
      id: nanoid(),
      text: "This is my first note",
      date: "08/06/2022"
    },
    {
      id: nanoid(),
      text: "This is my first note",
      date: "08/06/2022"
    }
  ]);

  useEffect(() => {
    const savedNotes = JSON.parse(localStorage.getItem("react-notes-app-data"));
    if (savedNotes) {
      setNotes(savedNotes);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("react-notes-app-data", JSON.stringify(notes));
  }, [notes]);

  const addNote = (text) => {
    const date = new Date();
    const newNote = {
      id: nanoid(),
      text: text,
      date: date.toLocaleDateString()
    };
    const newNotes = [...notes, newNote];
    setNotes(newNotes);
  };

  const deletingNote = (id) => {
    const newNotes = notes.filter((note) => note.id !== id);
    setNotes(newNotes);
  };
  return (
    <div className={`${darkMode && "dark-mode"}`}>
      <div className="container">
        <Header handleToggleDarkMode={setDarkMode} />
        <Search handleSearch={setSearchNote} />
        <NoteList
          notes={notes.filter((note) =>
            note.text.toLowerCase().includes(searchNote)
          )}
          handleAddNote={addNote}
          handleDelete={deletingNote}
        />
      </div>
    </div>
  );
}
export default App;
