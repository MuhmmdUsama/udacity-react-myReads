import './App.css';
import { useEffect, useState } from 'react';

import * as BooksAPI from './BooksAPI';
import BooksShelves from './components/BooksShelves';
import Search from './components/Search';
import { Route, Routes } from 'react-router-dom';

function App() {
  const [books, setBooks] = useState([]);

  // catching api respond
  useEffect(() => {
    (async () => {
      const respond = await BooksAPI.getAll();
      setBooks(respond);
    })();
  }, []);

  const updateBook = (book, shelf) => {
    BooksAPI.update(book, shelf);
    const updatedList = books.filter((b) => b.id !== book.id);

    setBooks([...updatedList, { ...book, shelf }]);
    console.log('updatedList', updatedList);
  };

  return (
    <div className="app">
      {console.log('books', books)}
      <Routes>
        <Route path="/search" element={<Search />} />
        <Route
          path="/"
          element={<BooksShelves books={books} updateBook={updateBook} />}
        />
      </Routes>
    </div>
  );
}

export default App;
