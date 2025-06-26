import React, { useState, useEffect } from "react";
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

const INITIAL = {
  title: "",
  author: "",
  image: "",
  publishedDate: "",
  description: "",
  rating: "",
  category: "",
  isRead: false,
  isFavorite: false,
};

const CATEGORIES = [
  "fiction",
  "non-fiction",
  "poetry",
  "drama",
  "history",
  "science",
  "cooking",
];

const AddBook = ({ appendBook }) => {
  const [form, setForm] = useState(INITIAL);
  const [errors, setErrors] = useState({});

  useEffect(() => {
    const e = {};
    if (!form.title.trim()) e.title = "Title required";
    if (!form.author.trim()) e.author = "Author required";
    if (form.rating !== "" && (form.rating < 1 || form.rating > 5))
      e.rating = "Rating must be 1-5";
    setErrors(e);
  }, [form]);

  const onChange = (field) => (e) =>
    setForm({ ...form, [field]: e.target.type === "checkbox" ? e.target.checked : e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (Object.keys(errors).length) return;
    appendBook(form);
    setForm(INITIAL); 
  };

  return (
    <form className="new-book-form" onSubmit={handleSubmit}>
      <input placeholder="Title *" value={form.title} onChange={onChange("title")} />

      <input placeholder="Author *" value={form.author} onChange={onChange("author")} />

      <input
        type="url"
        placeholder="Cover Image URL"
        value={form.image}
        onChange={onChange("image")}
      />

      <input
        type="date"
        placeholder="Published Date"
        value={form.publishedDate}
        onChange={onChange("publishedDate")}
      />

      <textarea
        placeholder="Short description"
        value={form.description}
        onChange={onChange("description")}
        rows={3}
      />

      <select value={form.category} onChange={onChange("category")}>
        <option value="">Category (optional)</option>
        {CATEGORIES.map((c) => (
          <option key={c}>{c}</option>
        ))}
      </select>

      <select value={form.rating} onChange={onChange("rating")}>
        <option value="">Rating (1–5)</option>
        {[1, 2, 3, 4, 5].map((n) => (
          <option key={n}>{n}</option>
        ))}
      </select>

      <label className="check">
        <input type="checkbox" checked={form.isRead} onChange={onChange("isRead")} />
        Already read
      </label>

      <label className="check">
        <input type="checkbox" checked={form.isFavorite} onChange={onChange("isFavorite")} />
        Mark as favourite
      </label>

      {Object.values(errors).map((msg) => (
        <p className="error" key={msg}>
          {msg}
        </p>
      ))}

      <button disabled={Object.keys(errors).length}>Add Book</button>
    </form>
  );
};

export default AddBook;