import './App.css';
import { useEffect, useState } from 'react';

import * as BooksAPI from './BooksAPI';
import BooksShelves from './components/BooksShelves';
import Search from './components/Search';
import { Route, Routes } from 'react-router-dom';

function App() {
  const [books, setBooks] = useState([]);

  // ############## catching api respond ######
  useEffect(() => {
    (async () => {
      const respond = await BooksAPI.getAll();
      setBooks(respond);
    })();
  }, []);

  // ############## Updating books shelves ######
  const updateBook = (book, shelf) => {
    BooksAPI.update(book, shelf);
    const updatedList = books.filter((b) => b.id !== book.id);
    setBooks([...updatedList, { ...book, shelf }]);
  };

  return (
    <div className="app">
      <Routes>
        <Route path="/search" element={<Search updateBook={updateBook} books={books} />} />
        <Route
          path="/"
          element={<BooksShelves books={books} updateBook={updateBook} />}
        />
      </Routes>
    </div>
  );
}

export default App;
