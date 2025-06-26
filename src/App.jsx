import React, { useState } from "react";
import { createRoot } from "react-dom/client";
import "./style.css";
import AddBook from "./components/AddBook";
import BookList from "./components/BookList";

const App = () => {
  const [books, setBooks] = useState([
    {
      id: 1,
      title: "Babel",
      author: "R. F. Kuang",
      image:
        "https://prodimage.images-bn.com/pimages/9780063021433_p0_v3_s1200x630.jpg",
      rating: 5,
      category: "fiction",
      isRead: true,
      isFavorite: true,
    },
    {
      id: 2,
      title: "The House of the Spirits",
      author: "Isabel Allende",
      image:
        "https://upload.wikimedia.org/wikipedia/en/9/91/Houseofthesprirts.jpg",
      rating: 4,
      isRead: false,
    },
    {
      id: 3,
      title: "One Hundred Years of Solitude",
      author: "Gabriel García Márquez",
      image:
        "https://upload.wikimedia.org/wikipedia/en/a/a0/Cien_a%C3%B1os_de_soledad_%28book_cover%2C_1967%29.jpg",
      rating: 5,
    },
    {
      id: 4,
      title: "Pride and Prejudice",
      author: "Jane Austen",
      image:
        "https://upload.wikimedia.org/wikipedia/en/thumb/0/09/Brock_Pride_and_Prejudice.jpg/250px-Brock_Pride_and_Prejudice.jpg",
      rating: 4,
    },
  ]);

  const [search, setSearch] = useState("");

  const appendBook = (book) =>
    setBooks((prev) => [...prev, { ...book, id: prev.length + 1 }]);

  const filtered = books.filter(({ title, author, category }) =>
    `${title} ${author} ${category ?? ""}`
      .toLowerCase()
      .includes(search.toLowerCase())
  );

  return (
    <div className="app">
      <h1 className="title"> Book tracker </h1>

      <AddBook appendBook={appendBook} />

      <input
        className="search"
        type="text"
        placeholder="Search title, author, category…"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <BookList books={filtered} />
    </div>
  );
};

createRoot(document.getElementById("root")).render(<App />);
