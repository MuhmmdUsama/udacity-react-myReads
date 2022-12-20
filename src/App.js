import './App.css';
import { useState } from 'react';

import BooksShelves from './components/BooksShelves';
import Search from './components/Search';
import { Route, Routes } from 'react-router-dom';

function App() {
  const [showSearchPage, setShowSearchpage] = useState(false);

  return (
    <div className="app">
      <Routes>
        <Route
          path="/search"
          element={
            <Search
              setShowSearchpage={setShowSearchpage}
              showSearchPage={showSearchPage}
            />
          }
        />
        <Route path="/" element={<BooksShelves />} />
      </Routes>
    </div>
  );
}

export default App;
