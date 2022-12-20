import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import * as BookAPI from '../BooksAPI';

const Search = () => {
  const [searchBook, setSearchBook] = useState('');

  // ############## Searching in API ######
  useEffect(() => {
    (async () => {
      const searchResponse = await BookAPI.search(searchBook);
      console.log(searchResponse);
    })();
  }, [searchBook]);

  return (
    <div className="search-books">
      <div className="search-books-bar">
        <Link to="/" className="close-search">
          Close
        </Link>
        <div className="search-books-input-wrapper">
          <input
            type="text"
            value={searchBook}
            placeholder="Search by title, author, or ISBN"
            onChange={(e) => setSearchBook(e.target.value)}
          />
        </div>
      </div>
      <div className="search-books-results">
        <ol className="books-grid"></ol>
      </div>
    </div>
  );
};

export default Search;
