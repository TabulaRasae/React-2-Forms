import React, { useState } from "react";
import { createRoot } from "react-dom/client";
import "./style.css";
import AddBook from "./components/AddBook";
import BookList from "./components/BookList";

const App = () => {
  const initialBooksState = [
    { id: 1, title: "Babel", author: "Michael Jackson" },
    { id: 2, title: "House of the Spirits" },
    { id: 3, title: "100 Years of Solitude" },
    { id: 4, title: "Pride and Prejudice" },
  ];
  const [books, setBooks] = useState(initialBooksState);

  const appendBook = (newBookTitle) => {
    const newBook = {
      id: books.length + 1,
      title: newBookTitle,
      author: newBookAuthor
    };
    setBooks([...books, newBook]);
  };
  return (
    <div className="app">
      <h1 className="title">React Forms! 📝</h1>
      <AddBook appendBook={appendBook} />
      {/* <BookList /> */}
      {books.map((book) => (
        <li key={book.id}>{book.title}{book.author}</li>
      ))}
      
    </div>
  );
};

const root = createRoot(document.getElementById("root"));
root.render(<App />);