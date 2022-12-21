import React from 'react';
import Book from './Book';

const Bookshelf = ({ state, bookShelf, updateBook }) => {
  return (
    <div className="bookshelf">
      <h2 className="bookshelf-title">{state}</h2>
      <div className="bookshelf-books">
        <ol className="books-grid">
          {bookShelf?.map((book) => (
            <li key={book?.id}>
              <Book book={book} updateBook={updateBook} />
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
};

export default Bookshelf;
