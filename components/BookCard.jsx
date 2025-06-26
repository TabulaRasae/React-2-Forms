import React from "react";

const PLACEHOLDER =
  "https://placehold.co/400x600";

const BookCard = ({ book }) => {
  const {
    title,
    author,
    image,
    publishedDate,
    description,
    rating,
    category,
    isRead,
    isFavorite,
  } = book;

  return (
    <article className="book-card">
      <img src={image || PLACEHOLDER} alt={title} />

      <div className="info">
        <h3>
          {title} {isFavorite && "★"}
        </h3>
        <p className="author">{author}</p>

        {category && <p className="meta">{category}</p>}
        {publishedDate && <p className="meta">{publishedDate}</p>}

        {rating && (
          <p className="meta">
            {Array.from({ length: rating }, () => "⭐").join("")}
          </p>
        )}

        {description && <p className="description">{description}</p>}

        {isRead ? (
          <span className="tag green">Read</span>
        ) : (
          <span className="tag red">Unread</span>
        )}
      </div>
    </article>
  );
};

export default BookCard;
