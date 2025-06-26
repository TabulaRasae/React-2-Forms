import React from "react";
import BookCard from "./BookCard";

const BookList = ({ books }) => {
  if (!books.length) return <p>No books found.</p>;

  return (
    <section className="book-list">
      {books.map((b) => (
        <BookCard key={b.id} book={b} />
      ))}
    </section>
  );
};

export default BookList;
