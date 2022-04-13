import React, { useState, useEffect } from 'react';
import './style.css';
import { libraryContext } from './Context';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Books from './Books';
import AddBook from './AddBook';
import EditPage from './EditPage';
import Delete from './Delete';
import BookDetails from './BookDetails';
import axios from 'axios';
export default function App() {
  const [clicked, setClicked] = useState(true);
  const [state, setState] = useState([]);
  useEffect(() => {
    let temp = axios
      .get('https://6215fab47428a1d2a3567953.mockapi.io/library')
      .then((resp) => setState(resp.data));
  }, []);

  return (
    <div className="App">
      <libraryContext.Provider value={{ state, setState }}>
        <BrowserRouter>
          <div className="nav-bar">
            <h3>
              <Link
                to="/books"
                className="nav-item"
                onClick={() => setClicked(true)}
                style={{
                  backgroundColor:
                    clicked === true ? 'rgb(75, 74, 74)' : 'white',
                  color: clicked ? 'white' : 'black',
                }}
              >
                Books List
              </Link>
            </h3>

            <h3>
              <Link
                to="/create-book"
                className="nav-item"
                onClick={() => setClicked(false)}
                style={{
                  backgroundColor:
                    clicked === false ? 'rgb(75, 74, 74)' : 'white',
                  color: !clicked ? 'white' : 'black',
                }}
              >
                Add a Book{' '}
              </Link>
            </h3>
          </div>
          <Routes>
            <Route path="/" element={<Books />} />
            <Route path="/books" element={<Books />} />
            <Route path="/book/:id" element={<BookDetails />} />
            <Route path="/create-book" element={<AddBook />} />
            <Route path="/edit-book/:id" element={<EditPage />} />
            <Route path="/delete-book/:id" element={<Delete />} />
          </Routes>
        </BrowserRouter>
      </libraryContext.Provider>
    </div>
  );
}
