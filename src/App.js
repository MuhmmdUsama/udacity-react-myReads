import './App.css';
import { useState } from 'react';
import Book from './components/Book';
import Bookshelf from './components/Bookshelf';
import BooksShelves from './components/BooksShelves';
import Search from './components/Search';

function App() {
  const [showSearchPage, setShowSearchpage] = useState(false);

  return (
    <div className="app">
      {showSearchPage ? (
        <Search
          setShowSearchpage={setShowSearchpage}
          showSearchPage={showSearchPage}
        />
      ) : (
        <BooksShelves />
      )}
    </div>
  );
}

export default App;
