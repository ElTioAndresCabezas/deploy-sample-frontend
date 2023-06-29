import React from 'react';
import './BooksDisplayer.css';

function BookDisplayer({ name, author, price }) {
  return (
    <div className="container">
      <h2 className="title">{name}</h2>
      <h3 className="author">{author}</h3>
      <p className="price">{price}</p>
    </div>
  );
}

export default BookDisplayer;