import './App.css';
import { useEffect, useState } from 'react';

import * as BooksAPI from './BooksAPI';
import BooksShelves from './components/BooksShelves';
import Search from './components/Search';
import { Route, Routes } from 'react-router-dom';

function App() {
  useEffect(() => {
    (async () => {
      const respond = await BooksAPI.getAll();
      console.log(respond);
    })();
  }, []);

  return (
    <div className="app">
      <Routes>
        <Route path="/search" element={<Search />} />
        <Route path="/" element={<BooksShelves />} />
      </Routes>
    </div>
  );
}

export default App;
