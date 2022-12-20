import './App.css';
import { useEffect, useState } from 'react';

import * as BooksAPI from './BooksAPI';
import BooksShelves from './components/BooksShelves';
import Search from './components/Search';
import { Route, Routes } from 'react-router-dom';

function App() {
  // catching api respond
  useEffect(() => {
    (async () => {
      const respond = await BooksAPI.getAll();
      setBooks(respond);
    })();
  }, []);

  const [books, setBooks] = useState([]);

  return (
    <div className="app">
      {console.log('books', books)}
      <Routes>
        <Route path="/search" element={<Search />} />
        <Route path="/" element={<BooksShelves books={books} />} />
      </Routes>
    </div>
  );
}

export default App;
