import React, { useContext, useEffect, useState } from 'react';
import { libraryContext } from './Context';
import { useNavigate, useParams } from 'react-router-dom';

export default function BookDetails() {
  const [details, setDetails] = useState();
  const navigate = useNavigate();
  const { state, setState } = useContext(libraryContext);
  let { id } = useParams();
  const getData = (id) => {
    let obj =
      state &&
      state.filter((ele, i) => {
        if (ele.id === id) {
          return ele;
        }
      });
    return obj[0];
  };
  useEffect(() => {
    if (id) {
      setDetails({ ...getData(id) });
    }
  }, [id]);
  return (
    <>
      <h4>BOOK DETAILS</h4>
      <table>
        <tr>
          <th className="table-header-item table-header">ID </th>
          <td
            className="table-row-item"
            style={{ backgroundColor: 'rgba(79, 235, 183, 0.788' }}
          >
            {details && details.id}
          </td>
        </tr>
        <tr>
          <th className="table-header-item table-header">Book Name</th>
          <td
            className="table-row-item"
            style={{ backgroundColor: 'rgba(79, 235, 183, 0.788' }}
          >
            {details && details.title}
          </td>
        </tr>
        <tr>
          <th className="table-header-item table-header">Author</th>
          <td
            className="table-row-item"
            style={{ backgroundColor: 'rgba(79, 235, 183, 0.788' }}
          >
            {details && details.name}
          </td>
        </tr>
        <tr>
          <th className="table-header-item table-header">Total Copies</th>
          <td
            className="table-row-item"
            style={{ backgroundColor: 'rgba(79, 235, 183, 0.788' }}
          >
            {details && details.copies}
          </td>
        </tr>
        <tr>
          <th className="table-header-item table-header">
            Present available copies{' '}
          </th>
          <td
            className="table-row-item"
            style={{ backgroundColor: 'rgba(79, 235, 183, 0.788' }}
          >
            {details && details.availableCopies}
          </td>
        </tr>
      </table>
    </>
  );
}
