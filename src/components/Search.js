import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import * as BookAPI from '../BooksAPI';
import Book from './Book';
import NoResult from './NoResult';

const Search = ({ updateBook, books }) => {
  const [searchBook, setSearchBook] = useState('');
  const [searchingResult, setSearchingResult] = useState([]);

  // ############## Searching in API ######
  useEffect(() => {
    // ############## Debounce timer ######
    const timer = setTimeout(async () => {
      try {
        if (searchBook) {
          const response = await BookAPI?.search(searchBook);

          // response.error
          //   ? setSearchingResult([])
          //   : setSearchingResult(response);
          
          if (response.error) {
            setSearchingResult([]);
          } else {
            response.forEach((res) => {
              books.forEach((book) => {
                if (res.id === book.id) {
                  res.shelf = book.shelf;
                }
              });
            });
            setSearchingResult(response);
          }
        } else {
          setSearchingResult([]);
        }
      } catch (error) {
        setSearchingResult([]);
      }
    }, 500);
    return () => {
      clearTimeout(timer);
    };
  }, [searchBook, books]);

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
            onChange={(e) => setSearchBook(e?.target?.value)}
          />
        </div>
      </div>
      <div className="search-books-results">
        <ol className="books-grid">
          {searchingResult.length > 0 ? (
            searchingResult?.map((book) => (
              <li key={book?.id}>
                <Book book={book} updateBook={updateBook} />
              </li>
            ))
          ) : (
            <NoResult />
          )}
        </ol>
      </div>
    </div>
  );
};

export default Search;
