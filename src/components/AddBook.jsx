import React, { useState } from "react";
import "../style.css";

/**
 * A book should have the following fields:
 * - title (required)
 * - author (required)
 * - image (optional, url)
 * - publishedDate (optional, datetime)
 * - description (optional, text)
 * - rating (number, 1-5)
 * - category (optional, dropdown with options: fiction, non-fiction, poetry, drama, biography, history, science, technology, art, music, travel, cooking, gardening, etc.)
 * - isRead (boolean, default false)
 * - isFavorite (boolean, default false)
 */

const AddBook = ({ appendBook }) => {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("")
  const [titleErrors, setTitleErrors] = useState([]);
  const [authorErrors, setAuthorErrors] = useState([]);
  const [image, setImage] = useState("");
  const [dirty, setDirty] = useState(false);
  const [isRead, setIsRead] = useState(false);
  const [isFavorite, setIsFavorite] = useState(false)
  const [rating, setRating] = useState(1);

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("title", title);
    appendBook(title, author, isRead, isFavorite, rating);
    clearForm();
  };

  const handleTitleChange = (event) => {
    setDirty(true);
    // Let's make sure the title has at least 4 characters in it
    setTitle(event.target.value);
    if (title.length < 4) {
      setTitleErrors(["title must have at least 4 characters"]);
    } else {
      setTitleErrors([]);
    }
  };

    const handleAuthorChange = (event) => {
    setDirty(true);
    // Let's make sure the Author has at least some characters in it
    setAuthor(event.target.value);
    if (author.length < 4) {
      setAuthorErrors(["Author must have at least some characters"]);
    } else {
      setAuthorErrors([]);
    }
  };

    const handleImageChange = (event) => {
    setDirty(true);
    // Let's make sure the Image has at least some characters in it
    setImage(event.target.value);
    if (image.length < 4) {
      setImageErrors(["Image must be valid"]);
    } else {
      setImageErrors([]);
    }
  };

  const handleReadClick = () => {
    setIsRead(!isRead);
  }

  const handleFavoriteClick = () => {
    setIsFavorite(!isFavorite);
  }

  const clearForm = () => {
    setTitle("");
    setAuthor("");
    setAuthorErrors([]);
    setImage("");

  };



  return (
    <form onSubmit={handleSubmit} className="new-book-form">
      <input
        name="title"
        type="text"
        required
        placeholder="Title"
        value={title}
        onChange={handleTitleChange}
      />
      <input
        name="author"
        type="text"
        required
        placeholder="Author"
        value={author}
        onChange={handleAuthorChange}
      />
      <input
        name="img"
        type="url"
        placeholder="Image URL"
        value={image}
        onChange={handleImageChange}
      />
      <select
        name="rating"
        type="number"
        min="1"
        max="5"
        placeholder="Rating (1-5)"
        onChange={(e) => {
          setDirty(true);
          const value = parseInt(e.target.value, 10);
          if (value >= 1 && value <= 5) {
            setRating(value);
          }
        }}  
      >
        <option value="">Select a rating</option>
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
        <option value="5">5</option>
      </select>
      <label className="label">
        <input
          name="read"
          type="checkbox"
          onChange={handleReadClick}
        />
        read
      </label>
      <label className="label">
        <input
          name="favorite"
          type="checkbox"
          onChange={handleFavoriteClick}
        />
        favorite
      </label>

      {titleErrors.map((error) => (
        <p className="error" key={error}>
          {error}
        </p>
      ))}
      <button disabled={titleErrors.length > 0 || !dirty}>Create Book</button>

      
    </form>
  );
};

export default AddBook;