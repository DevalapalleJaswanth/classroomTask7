import React, { useContext } from 'react';
import { libraryContext } from './Context';
import { useNavigate } from 'react-router-dom';
export default function Books() {
  const { state, setState } = useContext(libraryContext);
  const navigate = useNavigate();
  return (
    <div>
     
      <table>
        <thead>
          <tr>
            <th>ID </th>
            <th>Book Name</th>
            <th>Author</th>
            <th>Total Copies</th>
            <th>Present available copies </th>
            <th colSpan="2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {state &&
            state.map((ele, i) => (
              <tr key={i}>
                <td>{ele.id}</td>
                <td>{ele.title}</td>
                <td>{ele.name}</td>
                <td>{ele.copies}</td>
                <td>{ele.availableCopies}</td>
                <td>
                  <button onClick={() => navigate(`/edit-book/${ele.id}`)}>
                    Edit
                  </button>
                </td>
                <td>
                  <button>Delete</button>
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
}
