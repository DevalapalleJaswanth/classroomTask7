import React, { useState, useEffect } from 'react';
import './style.css';
import { libraryContext } from './Context';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Books from './Books';
import EditPage from './EditPage';
import axios from 'axios';
export default function App() {
  const [state, setState] = useState([]);
  useEffect(() => {
    let temp = axios
      .get('https://6215fab47428a1d2a3567953.mockapi.io/library')
      .then((resp) => setState(resp.data));
  }, []);

  return (
    <div>
      <libraryContext.Provider value={{ state, setState }}>
        <BrowserRouter>
          <Link to="/books">Books List</Link>{' '}
          <Link to="/create-book">Add a Book </Link>
          <Routes>
            <Route path="/" element={<Books />} />
            <Route path="/books" element={<Books />} />
            <Route path="/books/:id" element={<> </>} />
            <Route path="/create-book" element={<> </>} />
            <Route path="/edit-book/:id" element={<EditPage />} />
            <Route path="/delete-book/:id" element={<></>} />
          </Routes>
        </BrowserRouter>
      </libraryContext.Provider>
    </div>
  );
}
