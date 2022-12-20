import React from 'react';
import { Link } from 'react-router-dom';
import Bookshelf from './Bookshelf';

const BooksShelves = () => {
  return (
    <div className="list-books">
      <div className="list-books-title">
        <h1>MyReads</h1>
      </div>
      <div className="list-books-content">
        <div>
          <Bookshelf />
          <Bookshelf />
          <Bookshelf />
        </div>
      </div>
      <div className="open-search">
        <Link to="/search">Add a book</Link>
      </div>
    </div>
  );
};

export default BooksShelves;
