import React from 'react';
import { Link } from 'react-router-dom';
import Bookshelf from './Bookshelf';

const BooksShelves = ({ books, updateBook }) => {
  // filtering books according to shelf state
  const category = (cat) => {
    return books.filter((book) => book?.shelf === cat);
  };

  return (
    <div className="list-books">
      <div className="list-books-title">
        <h1>MyReads</h1>
      </div>
      <div className="list-books-content">
        <div>
          <Bookshelf
            bookShelf={category('currentlyReading')}
            state="currentlyReading"
            updateBook={updateBook}
          />
          <Bookshelf
            bookShelf={category('wantToRead')}
            state="wantToRead"
            updateBook={updateBook}
          />
          <Bookshelf
            bookShelf={category('read')}
            state="read"
            updateBook={updateBook}
          />
        </div>
      </div>
      <div className="open-search">
        <Link to="/search">Add a book</Link>
      </div>
    </div>
  );
};

export default BooksShelves;
